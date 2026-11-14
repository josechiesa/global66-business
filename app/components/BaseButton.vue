<script setup lang="ts">
	import { resolveComponent } from 'vue';

	type Variant = 'primary' | 'secondary' | 'accent';

	const props = withDefaults(
		defineProps<{
			variant?: Variant;
			inverse?: boolean;
			to?: string;
			type?: 'button' | 'submit' | 'reset';
			block?: boolean;
			disabled?: boolean;
		}>(),
		{
			variant: 'primary',
			inverse: false,
			type: 'button',
			block: false,
			disabled: false,
		},
	);

	const variantClasses: Record<Variant, string> = {
		primary: 'bg-primary text-white hover:bg-hover',
		secondary:
			'bg-white text-primary border border-border hover:border-primary',
		accent: 'bg-accent text-primary hover:bg-primary hover:text-white',
	};

	const colorClasses = computed(() =>
		props.inverse && props.variant === 'primary' ?
			'bg-white text-primary hover:bg-accent'
		:	variantClasses[props.variant],
	);

	const tag = computed(() =>
		props.to ? resolveComponent('NuxtLink') : 'button',
	);
</script>

<template>
	<component
		:is="tag"
		:to="to"
		:type="to ? undefined : type"
		:disabled="to ? undefined : disabled"
		:class="[
			'inline-flex items-center justify-center rounded-[28px] px-6 py-4 text-[15px] font-semibold leading-figma whitespace-nowrap transition-colors',
			'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
			'disabled:pointer-events-none disabled:opacity-50',
			colorClasses,
			block && 'w-full',
		]">
		<slot />
	</component>
</template>
