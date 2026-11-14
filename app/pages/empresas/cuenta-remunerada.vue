<script setup lang="ts">
	import {
		currencies,
		currenciesSection,
		faq,
		howItWorks,
		netReturn,
		pain,
	} from '~/content/empresas';
	import { useEmpresasSeo } from '~/composables/useEmpresasSeo';

	useEmpresasSeo();
</script>

<template>
	<main>
		<HeroSection />
		<ContentSection v-bind="pain" />
		<ContentSection v-bind="currenciesSection">
			<div class="grid gap-6 lg:grid-cols-2">
				<CurrencyCard
					v-for="currency in currencies"
					:key="currency.id"
					v-bind="currency" />
			</div>
		</ContentSection>
		<ContentSection v-bind="netReturn" />
		<ContentSection v-bind="howItWorks" />
		<ContactSection />
		<ContentSection v-bind="faq" />
	</main>
</template>
