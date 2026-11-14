
<script setup lang="ts">
	// Exported from here so content files and llms.txt can share the type.
	export interface CurrencyOption {
		id: string;
		eyebrow: string;
		title: string;
		description: string;
		note?: string;
		checklist: string[];
	}
	
	defineProps<CurrencyOption>();
</script>

<template>
	<article
		:id="id"
		class="flex flex-col items-start gap-5 rounded-2xl border border-border bg-white p-6 leading-figma lg:p-8">
		<p class="text-xs font-semibold text-secondary">{{ eyebrow }}</p>
		<h3 class="text-2xl font-semibold leading-[1.2] text-primary lg:text-[28px]">
			{{ title }}
		</h3>
		<p class="text-lg text-primary">{{ description }}</p>
		<p
			v-if="note"
			class="text-base text-secondary">
			{{ note }}
		</p>
		<div class="flex w-full flex-col gap-2 rounded-[10px] bg-section p-4">
			<p class="text-sm font-semibold text-primary">Qué revisar en tu demo</p>
			<ul class="text-[13px] text-secondary">
				<li
					v-for="line in checklist"
					:key="line">
					{{ line }}
				</li>
			</ul>
		</div>
		<BaseButton
			variant="secondary"
			:to="ROUTES.demo"
			class="mt-1 w-full sm:w-auto">
			Consultar en una demo
		</BaseButton>
	</article>
</template>
