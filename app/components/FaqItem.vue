<script setup lang="ts">
	defineProps<{
		question: string;
		answer?: string;
	}>();

	const open = defineModel<boolean>('open', { default: false });
	const id = useId();
</script>

<template>
	<div
		class="flex flex-col gap-4 rounded-[10px] border border-border bg-white p-5 leading-figma">
		<button
			type="button"
			class="flex w-full items-center gap-4 text-left text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
			:aria-expanded="open"
			:aria-controls="id"
			@click="open = !open">
			<span class="flex-1 text-base font-semibold">{{ question }}</span>
			<span
				class="shrink-0 text-[22px] font-medium"
				aria-hidden="true"
				>{{ open ? '-' : '+' }}</span
			>
		</button>
		<div
			v-show="open"
			:id="id"
			class="text-[15px] text-secondary">
			<slot>{{ answer }}</slot>
		</div>
	</div>
</template>
