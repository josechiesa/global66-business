<script setup lang="ts">
	const talkingPoints = [
		'Revisa las condiciones de cada moneda.',
		'Entiende el rendimiento y los costos aplicables.',
		'Resuelve qué necesitas para abrir tu cuenta.',
	];
</script>

<template>
	<section
		:id="SECTION_IDS.contact"
		aria-labelledby="contact-title"
		class="bg-primary px-6 py-12 leading-figma lg:px-10 lg:py-18 xl:px-24">
		<div
			class="mx-auto flex max-w-xl flex-col gap-9 lg:max-w-312 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
			<div class="flex flex-col gap-6 lg:max-w-150 lg:flex-1">
				<p class="text-xs font-semibold text-accent">
					05 / HABLEMOS DE TU SALDO
				</p>
				<h2
					id="contact-title"
					class="text-[34px] font-semibold leading-[1.1] text-white lg:text-5xl">
					Tu plata puede<br />
					hacer más.<br />
					Veamos cómo.
				</h2>
				<p class="text-lg text-border">
					Descubre si la Cuenta remunerada en dólares o pesos encaja
					con la operación de tu empresa.
				</p>
				<ul class="flex flex-col gap-3.5">
					<li
						v-for="point in talkingPoints"
						:key="point"
						class="flex gap-3 text-[15px] text-white">
						<span
							class="text-accent"
							aria-hidden="true"
							>—</span
						>
						{{ point }}
					</li>
				</ul>
				<p class="text-xs text-border">
					Una conversación para decidir con información, sin
					compromiso de apertura.
				</p>
			</div>

			<!-- Formulario -->
			<div class="lg:w-130 lg:shrink-0">
				<ContactForm />
			</div>
		</div>
	</section>
</template>
