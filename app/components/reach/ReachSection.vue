<script setup lang="ts">
	import type { IconName } from '~/utils/icons';

	const items: { icon: IconName; title: string; description: string }[] = [
		{
			icon: 'wallet',
			title: 'Una sola cuenta',
			description: 'Centraliza tu operación',
		},
		{
			icon: 'transfer',
			title: 'Cobros y pagos',
			description: 'Conecta con clientes y proveedores',
		},
		{
			icon: 'exchange',
			title: 'Divisas bajo control',
			description: 'Gestiona tu dinero con claridad',
		},
	];
</script>

<template>
	<section
		class="bg-section px-6 py-7 lg:px-10 lg:py-8 xl:px-24"
		aria-label="Alcance de la cuenta">
		<div
			class="mx-auto grid max-w-xl gap-5 md:max-w-312 md:grid-cols-3 md:gap-10">
			<ReachItem
				v-for="item in items"
				:key="item.title"
				v-bind="item" />
		</div>
	</section>
</template>
