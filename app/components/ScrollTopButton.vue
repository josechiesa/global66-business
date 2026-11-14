<script setup lang="ts">
	const SHOW_AFTER = 600;

	const visible = ref(false);
	let frame = 0;

	const onScroll = () => {
		if (frame) return;
		frame = requestAnimationFrame(() => {
			visible.value = window.scrollY > SHOW_AFTER;
			frame = 0;
		});
	};

	const scrollToTop = () => {
		const reduceMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;
		window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
		document
			.querySelector<HTMLElement>('header a')
			?.focus({ preventScroll: true });
	};

	onMounted(() => {
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
	});

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', onScroll);
		cancelAnimationFrame(frame);
	});
</script>

<template>
	<Transition
		enter-active-class="transition duration-200 motion-reduce:transition-none"
		leave-active-class="transition duration-200 motion-reduce:transition-none"
		enter-from-class="translate-y-2 opacity-0"
		leave-to-class="translate-y-2 opacity-0">
		<button
			v-show="visible"
			type="button"
			aria-label="Volver arriba"
			title="Volver arriba"
			class="fixed right-4 bottom-4 z-50 flex size-12 items-center justify-center rounded-full border border-white/20 bg-primary text-white shadow-lg transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:right-8 lg:bottom-8"
			@click="scrollToTop">
			<BaseIcon
				name="arrowUp"
				:size="22" />
		</button>
	</Transition>
</template>
