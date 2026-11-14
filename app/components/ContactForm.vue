<script setup lang="ts">
	import {
		hasContactErrors,
		validateContact,
		type ContactErrors,
		type ContactField,
		type ContactForm,
	} from '~/utils/contact';

	type Status = 'idle' | 'loading' | 'success' | 'error';

	const emit = defineEmits<{
		success: [data: ContactForm];
	}>();

	const form = reactive<ContactForm>({
		name: '',
		email: '',
		company: '',
	});
	const errors = reactive<ContactErrors>({});
	const status = ref<Status>('idle');
	const message = ref('');

	const validate = () => {
		Object.assign(errors, validateContact(form));
		return !hasContactErrors(errors);
	};

	// Clear a field's error as soon as the user edits it
	watch(
		() => ({ ...form }),
		(now, before) => {
			for (const key of Object.keys(now) as ContactField[]) {
				if (now[key] !== before[key]) errors[key] = undefined;
			}
		},
	);

	const onSubmit = async () => {
		if (status.value === 'loading' || !validate()) return;

		status.value = 'loading';
		message.value = '';
		try {
			const res = await $fetch<{ ok: boolean; message: string }>(
				'/api/contact',
				{
					method: 'POST',
					body: { ...form },
				},
			);
			message.value = res.message;
			status.value = 'success';
			emit('success', { ...form });
			console.log('Lead sent to CRM and GA4.');
		} catch (err: unknown) {
			const data = (
				err as {
					data?: {
						data?: { fieldErrors?: ContactErrors };
					};
				}
			).data;
			if (data?.data?.fieldErrors) {
				// 422: show the server's per-field errors only
				Object.assign(errors, data.data.fieldErrors);
				status.value = 'idle';
				return;
			}
			message.value =
				'No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.';
			status.value = 'error';
			console.log('Error sending lead to CRM and GA4.');
		}
	};

	const reset = () => {
		Object.assign(form, { name: '', email: '', company: '' });
		Object.assign(errors, {
			name: undefined,
			email: undefined,
			company: undefined,
		});
		status.value = 'idle';
		message.value = '';
	};
</script>

<template>
	<div
		class="w-full rounded-2xl border border-border bg-white p-6 leading-figma">
		<!-- Success -->
		<div
			v-if="status === 'success'"
			class="flex flex-col items-start gap-5"
			role="status">
			<span
				class="flex size-11 items-center justify-center rounded-full bg-accent text-primary">
				<BaseIcon name="check" />
			</span>
			<h2 class="text-2xl font-semibold text-primary">
				¡Solicitud enviada!
			</h2>
			<p class="text-[15px] text-secondary">{{ message }}</p>
			<BaseButton
				variant="secondary"
				@click="reset">
				Enviar otra solicitud
			</BaseButton>
		</div>

		<!-- Form -->
		<form
			v-else
			class="flex flex-col gap-5"
			novalidate
			@submit.prevent="onSubmit">
			<h2 class="text-2xl font-semibold text-primary">
				Solicita tu demo
			</h2>
			<p class="text-[15px] text-secondary">
				Déjanos tus datos. Conversemos sobre tu saldo.
			</p>
			<BaseField
				v-model="form.name"
				label="Nombre y apellido"
				placeholder="Tu nombre"
				autocomplete="name"
				:error="errors.name"
				:disabled="status === 'loading'" />
			<BaseField
				v-model="form.email"
				label="Correo de trabajo"
				type="email"
				placeholder="nombre@empresa.com"
				autocomplete="email"
				:error="errors.email"
				:disabled="status === 'loading'" />
			<BaseField
				v-model="form.company"
				label="Empresa"
				placeholder="Nombre de tu empresa"
				autocomplete="organization"
				:error="errors.company"
				:disabled="status === 'loading'" />
			<p class="text-xs text-secondary">
				Al enviar, aceptas que te contactemos y nuestra Política de
				privacidad.
			</p>
			<p
				v-if="status === 'error'"
				class="rounded-lg bg-danger/10 p-3 text-sm text-danger"
				role="alert">
				{{ message }}
			</p>
			<BaseButton
				type="submit"
				variant="accent"
				class="self-start"
				:disabled="status === 'loading'"
				:aria-busy="status === 'loading'">
				{{ status === 'loading' ? 'Enviando…' : 'Solicitar demo' }}
			</BaseButton>
		</form>
	</div>
</template>
