<script setup lang="ts">
	import type { IconName } from '~/utils/icons';

	withDefaults(
		defineProps<{
			name: IconName;
			size?: number;
		}>(),
		{ size: 24 },
	);
</script>

<template>
	<svg
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true">
		<path
			v-for="(d, i) in ICONS[name]"
			:key="i"
			:d="d" />
	</svg>
</template>
