<script setup lang="ts">
	const menuOpen = ref(false);
	const route = useRoute();

	const isActive = (path: string) =>
		route.path === path || route.path.startsWith(`${path}/`);

	watch(
		() => route.fullPath,
		() => {
			menuOpen.value = false;
		},
	);
</script>

<template>
	<header class="bg-primary text-white">
		<nav
			class="mx-auto box-content flex max-w-312 items-center gap-4 px-6 py-5.5 lg:gap-8 lg:px-10 lg:py-6 xl:gap-10 xl:px-24"
			aria-label="Principal">
			<NuxtLink
				:to="ROUTES.home"
				class="flex-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
				aria-label="Global66 Business, ir al inicio">
				<img
					src="/logo-global66-business.svg"
					alt="Global66 Business"
					width="214"
					height="27"
					class="h-5.5 w-auto lg:h-6.75" />
			</NuxtLink>

			<!-- Desktop -->
			<NuxtLink
				v-for="link in NAV_LINKS"
				:key="link.to"
				:to="link.to"
				:class="[
					'hidden text-sm font-medium leading-figma whitespace-nowrap underline-offset-8 transition-colors lg:inline',
					isActive(link.to) ?
						'text-accent underline decoration-2'
					:	'hover:text-accent',
				]">
				{{ link.label }}
			</NuxtLink>
			<div class="hidden shrink-0 lg:block">
				<BaseButton
					inverse
					:to="ROUTES.demo">
					Solicitar demo
				</BaseButton>
			</div>

			<!-- Móvil -->
			<button
				type="button"
				class="-m-2 p-2 lg:hidden focus-visible:outline-2 focus-visible:outline-accent"
				:aria-expanded="menuOpen"
				aria-controls="mobile-menu"
				:aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
				@click="menuOpen = !menuOpen">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					aria-hidden="true">
					<template v-if="menuOpen">
						<path d="M6 6l12 12M18 6L6 18" />
					</template>
					<template v-else>
						<path d="M4 7h16M4 12h16M4 17h16" />
					</template>
				</svg>
			</button>
		</nav>

		<div
			v-show="menuOpen"
			id="mobile-menu"
			class="flex flex-col gap-1 border-t border-white/10 px-6 pt-4 pb-6 lg:hidden">
			<NuxtLink
				v-for="link in NAV_LINKS"
				:key="link.to"
				:to="link.to"
				:class="[
					'border-l-2 py-2 pl-3 text-base font-medium leading-figma',
					isActive(link.to) ?
						'border-accent text-accent'
					:	'border-transparent',
				]">
				{{ link.label }}
			</NuxtLink>
			<BaseButton
				inverse
				:to="ROUTES.demo"
				block
				class="mt-3">
				Solicitar demo
			</BaseButton>
		</div>
	</header>
</template>
