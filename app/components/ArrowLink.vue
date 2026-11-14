<script setup lang="ts">
	defineProps<{ to: string }>();
</script>

<template>
	<NuxtLink
		:to="to"
		class="group inline-flex items-center gap-2 text-[15px] font-semibold leading-figma text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
		<span class="underline-offset-4 group-hover:underline"><slot /></span>
		<span
			class="transition-transform group-hover:translate-x-1"
			aria-hidden="true"
			>→</span
		>
	</NuxtLink>
</template>
