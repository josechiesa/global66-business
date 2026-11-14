<script setup lang="ts">
	import type { IconName } from '~/utils/icons';

	defineProps<{
		icon: IconName;
		title: string;
		description: string;
	}>();
</script>

<template>
	<div class="flex items-center gap-4 leading-figma">
		<span
			class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
			<BaseIcon :name="icon" />
		</span>
		<div class="flex min-w-0 flex-col gap-1.5">
			<h3 class="text-lg font-semibold text-primary">{{ title }}</h3>
			<p class="text-sm text-secondary">{{ description }}</p>
		</div>
	</div>
</template>
