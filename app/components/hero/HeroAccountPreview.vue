<script setup lang="ts">
	const currencies = [
		{
			label: 'USD',
			title: 'Dólares de tu empresa',
			description: 'Explora una alternativa para tu saldo en USD.',
		},
		{
			label: 'PESOS',
			title: 'Moneda local',
			description: 'Evalúa el rendimiento de tu saldo en pesos.',
		},
	];
</script>

<template>
	<div
		class="flex flex-col gap-5 rounded-[18px] bg-section p-5 leading-figma lg:p-8">
		<p class="text-[22px] font-semibold text-primary lg:text-[26px]">
			Tu Cuenta remunerada
		</p>
		<p class="text-[15px] text-secondary">
			Dos monedas. Una mejor pregunta:<br />
			¿qué está haciendo hoy tu saldo?
		</p>

		<div class="flex flex-col gap-3">
			<HeroCurrencyCard
				v-for="currency in currencies"
				:key="currency.label"
				v-bind="currency" />
		</div>

		<p class="text-xs text-secondary">
			Consulta tasas, costos y disponibilidad en tu demo.
		</p>
	</div>
</template>
