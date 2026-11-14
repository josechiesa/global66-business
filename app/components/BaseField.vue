<script setup lang="ts">
	defineOptions({ inheritAttrs: false });

	const props = withDefaults(
		defineProps<{
			label: string;
			placeholder?: string;
			type?: string;
			error?: string;
		}>(),
		{ type: 'text' },
	);

	const model = defineModel<string>();
	const id = useId();
	const errorId = `${id}-error`;
</script>

<template>
	<div class="flex w-full flex-col gap-2 leading-figma">
		<label
			:for="id"
			class="text-sm font-medium text-primary"
			>{{ label }}</label
		>
		<div
			:class="[
				'flex rounded-lg border bg-white p-3.75 focus-within:border-2 focus-within:p-3.5',
				props.error ?
					'border-danger focus-within:border-danger'
				:	'border-border focus-within:border-primary',
			]">
			<input
				:id="id"
				v-model="model"
				:type="type"
				:placeholder="placeholder"
				:aria-invalid="!!error"
				:aria-describedby="error ? errorId : undefined"
				v-bind="$attrs"
				class="min-w-0 flex-1 bg-transparent text-[15px] text-primary outline-none placeholder:text-secondary" />
		</div>
		<p
			v-if="error"
			:id="errorId"
			class="text-xs text-danger">
			{{ error }}
		</p>
	</div>
</template>
