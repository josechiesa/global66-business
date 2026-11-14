<script setup lang="ts">
	withDefaults(
		defineProps<{
			inverse?: boolean;
			number?: string;
			title: string;
			description?: string;
		}>(),
		{ inverse: false },
	);
</script>

<template>
	<article
		:class="[
			'flex min-h-55 flex-col gap-3.5 rounded-2xl border border-border p-6 leading-figma',
			inverse ? 'bg-section' : 'bg-white',
		]">
		<p
			v-if="number"
			class="text-sm font-semibold text-secondary">
			{{ number }}
		</p>
		<h3 class="text-[22px] font-semibold text-primary">{{ title }}</h3>
		<p
			v-if="description || $slots.default"
			class="text-base text-secondary">
			<slot>{{ description }}</slot>
		</p>
	</article>
</template>
