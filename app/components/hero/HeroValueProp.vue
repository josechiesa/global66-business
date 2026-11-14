<template>
	<div class="flex flex-col gap-6 leading-figma">
		<h1
			id="hero-title"
			class="flex flex-col gap-6 text-[42px] font-bold leading-[1.1] text-white lg:text-5xl xl:text-[64px]">
			<span class="text-xs font-semibold leading-[1.3] text-accent uppercase">
				Cuenta remunerada para empresas
			</span>
			<span>
				Tu empresa se mueve.<br />
				Que tu plata también.
			</span>
		</h1>
		<p class="text-lg text-white lg:text-[21px]">
			¿Plata parada en tu cuenta corriente? Dale un nuevo propósito a tu
			saldo en dólares y pesos con una cuenta remunerada.
		</p>
		<p class="text-base text-border">
			Conoce cómo funciona, cuánto puede rendir y qué costos aplican antes
			de decidir.
		</p>
		<div class="flex flex-col items-center gap-4 lg:flex-row">
			<BaseButton
				inverse
				:to="ROUTES.demo"
				class="w-full lg:w-auto">
				Solicitar demo
			</BaseButton>
			<ArrowLink
				:to="ROUTES.currencies"
				class="lg:p-4">
				Conocer las monedas
			</ArrowLink>
		</div>
		<p class="text-xs text-border">
			Para tu tesorería. Con información clara para decidir.
		</p>
	</div>
</template>
