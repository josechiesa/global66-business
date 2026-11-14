<script setup lang="ts">
	const FOOTER_ITEMS = [
		'Soluciones',
		'Centro de ayuda',
		'Términos y condiciones',
		'Privacidad',
	];
</script>

<template>
	<footer
		class="bg-primary px-6 py-10 leading-figma text-white lg:px-10 lg:py-12 xl:px-24">
		<div class="mx-auto flex max-w-xl flex-col gap-8 lg:max-w-312">
			<div class="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-16">
				<div class="flex flex-col gap-2.5">
					<NuxtLink
						:to="ROUTES.home"
						class="self-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
						aria-label="Global66 Business, ir al inicio">
						<img
							src="/logo-global66-business.svg"
							alt="Global66 Business"
							width="214"
							height="27"
							loading="lazy"
							class="h-6.75 w-auto" />
					</NuxtLink>
					<p class="text-sm text-border">
						Una cuenta para empresas que piensan en grande.
					</p>
				</div>

				<ul
					aria-label="Información y ayuda"
					class="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-7">
					<li
						v-for="item in FOOTER_ITEMS"
						:key="item"
						class="text-sm whitespace-nowrap">
						{{ item }}
					</li>
				</ul>
			</div>

			<div
				class="flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-border">
				<p>
					La disponibilidad de productos y monedas depende del país y
					de la regulación local aplicable.
				</p>
				<p>Global66 Business · Cuenta remunerada para empresas</p>
			</div>
		</div>
	</footer>
</template>
