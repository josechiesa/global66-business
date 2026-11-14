<script setup lang="ts">
	import type { NuxtError } from '#app';

	const props = defineProps<{ error: NuxtError }>();

	const is404 = computed(() => props.error.status === 404);

	useSeoMeta({
		title: () =>
			`${is404.value ? 'Página no encontrada' : 'Error'} · ${SITE.name}`,
		robots: 'noindex, follow',
	});
</script>

<template>
	<div
		class="flex min-h-screen flex-col bg-white font-sans text-primary antialiased">
		<AppNavbar />
		<main
			class="mx-auto flex w-full max-w-xl flex-1 flex-col items-start gap-4 px-6 py-24 leading-figma">
			<p class="text-sm font-semibold text-secondary">
				{{ error.status }}
			</p>
			<h1 class="text-[32px] font-semibold">
				{{ is404 ? 'Esta página aún no existe' : 'Algo salió mal' }}
			</h1>
			<p class="text-base text-secondary">
				{{
					is404 ?
						'Estamos construyéndola. Vuelve al inicio para seguir explorando.'
					:	error.message
				}}
			</p>
			<BaseButton @click="clearError({ redirect: ROUTES.home })"
				>Volver al inicio</BaseButton
			>
		</main>
		<AppFooter />
	</div>
</template>
