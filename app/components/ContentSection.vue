<script setup lang="ts">
	export interface ContentItem {
		title: string;
		description: string;
		number?: string;
		open?: boolean;
	}

	export interface ContentSectionProps {
		id?: string;
		eyebrow: string;
		title: string;
		description?: string;
		items?: ContentItem[];
		layout?: 'cards' | 'list' | 'faq' | 'columns';
		background?: 'white' | 'section';
		cardInverse?: boolean;
		footnote?: string;
	}
	
	const props = withDefaults(defineProps<ContentSectionProps>(), {
		items: () => [],
		layout: 'cards',
		background: 'white',
		cardInverse: false,
	});

	const titleId = useId();

	const numbered = computed(() =>
		props.items.map((item, i) => ({
			...item,
			number: item.number ?? String(i + 1).padStart(2, '0'),
		})),
	);

	const isList = computed(() => props.layout === 'list');
	const isFaq = computed(() => props.layout === 'faq');
	const isColumns = computed(() => props.layout === 'columns');
</script>

<template>
	<section
		:id="id"
		:aria-labelledby="titleId"
		:class="[
			'px-6 py-12 leading-figma lg:px-10 lg:py-18 xl:px-24',
			background === 'section' ? 'bg-section' : 'bg-white',
		]">
		<div
			:class="[
				'mx-auto flex max-w-xl flex-col lg:max-w-312',
				isList ?
					'gap-8 lg:flex-row lg:items-center lg:gap-20'
				:	'gap-7 lg:gap-10',
			]">
			<!-- Intro -->
			<div
				:class="[
					'flex flex-col',
					isList ? 'gap-4 lg:w-110 lg:shrink-0' : 'gap-3 lg:max-w-210',
				]">
				<p class="text-xs font-semibold text-secondary">{{ eyebrow }}</p>
				<h2
					:id="titleId"
					class="text-[30px] font-semibold leading-[1.15] whitespace-pre-line text-primary lg:text-[42px]">
					{{ title }}
				</h2>
				<p
					v-if="description"
					class="text-lg text-secondary">
					{{ description }}
				</p>
			</div>

			<!-- Custom content (e.g. currency cards) -->
			<slot v-if="$slots.default" />

			<!-- Items: numbered list -->
			<ol
				v-else-if="isList"
				class="flex flex-col lg:flex-1">
				<li
					v-for="item in numbered"
					:key="item.number"
					class="flex items-start gap-5 border-b border-border py-5.5">
					<span class="text-sm font-semibold text-secondary">{{ item.number }}</span>
					<div class="flex min-w-0 flex-1 flex-col gap-1.5">
						<h3 class="text-xl font-semibold text-primary">{{ item.title }}</h3>
						<p class="text-base text-secondary">{{ item.description }}</p>
					</div>
				</li>
			</ol>

			<!-- Items: accordion -->
			<div
				v-else-if="isFaq"
				class="flex flex-col gap-3">
				<FaqItem
					v-for="item in numbered"
					:key="item.number"
					:question="item.title"
					:answer="item.description"
					:open="item.open" />
			</div>

			<!-- Items: plain text columns -->
			<div
				v-else-if="isColumns"
				class="grid gap-7 lg:grid-cols-3 lg:gap-10">
				<div
					v-for="item in items"
					:key="item.title"
					class="flex flex-col gap-2.5">
					<h3 class="text-xl font-semibold text-primary">{{ item.title }}</h3>
					<p class="text-base text-secondary">{{ item.description }}</p>
				</div>
			</div>

			<!-- Items: cards -->
			<div
				v-else
				class="grid gap-6 lg:grid-cols-3">
				<BaseCard
					v-for="item in numbered"
					:key="item.number"
					:inverse="cardInverse"
					:number="item.number"
					:title="item.title"
					:description="item.description" />
			</div>

			<p
				v-if="footnote"
				class="text-sm text-secondary">
				{{ footnote }}
			</p>
		</div>
	</section>
</template>
