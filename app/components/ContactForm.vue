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

	// Form tracking: only console.log, nothing is sent to GA4.
	const track = (event: string, params: Record<string, unknown> = {}) => {
		console.log(`[GA4] ${event}`, params);
	};

	let started = false;

	const trackFieldErrors = (found: ContactErrors) => {
		for (const [field, error] of Object.entries(found)) {
			if (error) track('form_field_error', { field_name: field, error });
		}
	};

	const validate = () => {
		Object.assign(errors, validateContact(form));
		trackFieldErrors(errors);
		return !hasContactErrors(errors);
	};

	// Clear a field's error as soon as the user edits it
	watch(
		() => ({ ...form }),
		(now, before) => {
			for (const key of Object.keys(now) as ContactField[]) {
				if (now[key] !== before[key]) errors[key] = undefined;
			}
			// form_start: first edit only
			if (!started && Object.values(now).some(Boolean)) {
				started = true;
				track('form_start');
			}
		},
	);

	const onSubmit = async () => {
		if (status.value === 'loading') return;
		track('form_submit_attempt', { ...form });
		if (!validate()) return;

		status.value = 'loading';
		message.value = '';
		try {
			const res = await $fetch<{
				ok: boolean;
				id: string;
				message: string;
			}>('/api/contact', {
				method: 'POST',
				body: { ...form },
			});
			
			// Only on 2xx. Same id the server logged as the CRM lead.
			track('generate_lead', { lead_id: res.id });
			message.value = res.message;
			status.value = 'success';
			emit('success', { ...form });
		} catch (err: unknown) {
			const { statusCode, data } = err as {
				statusCode?: number;
				data?: {
					data?: { fieldErrors?: ContactErrors };
				};
			};
			track('form_submit_error', { error_code: statusCode ?? 'network' });
			if (data?.data?.fieldErrors) {
				// 422: show the server's per-field errors only
				Object.assign(errors, data.data.fieldErrors);
				trackFieldErrors(data.data.fieldErrors);
				status.value = 'idle';
				return;
			}
			message.value =
				'No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.';
			status.value = 'error';
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
		started = false;
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
