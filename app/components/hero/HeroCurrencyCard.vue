<script setup lang="ts">
	defineProps<{
		label: string;
		title: string;
		description: string;
	}>();
</script>

<template>
	<div
		class="flex flex-col gap-2 rounded-[10px] bg-white p-4 leading-figma lg:p-5">
		<p class="text-[11px] font-semibold text-secondary">{{ label }}</p>
		<p class="text-xl font-semibold text-primary lg:text-[22px]">{{ title }}</p>
		<p class="text-[13px] text-secondary">{{ description }}</p>
	</div>
</template>
