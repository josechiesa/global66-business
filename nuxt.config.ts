// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true, vueDevTools: true },
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
			// Absolute public URL, used for canonical, Open Graph, JSON-LD and the sitemap.
			// Override per environment with NUXT_PUBLIC_SITE_URL.
			siteUrl: 'https://www.global66.com',
		},
	},
	routeRules: {
		// Home: the cuenta remunerada landing.
		'/': { redirect: { to: '/empresas/cuenta-remunerada', statusCode: 301 } },
		// SEO: the CLP landing merges into the USD + CLP landing (fixes cannibalization).
		'/empresas/cuenta-remunerada-clp': {
			redirect: { to: '/empresas/cuenta-remunerada', statusCode: 301 },
		},
		// Performance: the logo rarely changes, but its name has no hash,
		// so cache it for a week instead of forever.
		'/logo-global66-business.svg': {
			headers: { 'cache-control': 'public, max-age=604800' },
		},
	},
	app: {
		head: {
			htmlAttrs: { lang: 'es' },
			meta: [
				{ name: 'theme-color', content: '#131f44' },
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [
				{ rel: 'icon', href: '/favicon.ico', sizes: 'any' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: '',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=block',
				},
			],
		},
	},
	// Performance: inline the critical CSS in the HTML instead of a blocking <link>.
	features: { inlineStyles: true },
	nitro: {
		// Serve precompressed (gzip/brotli) JS and CSS.
		compressPublicAssets: true,
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: ['.trycloudflare.com'],
		},
	},
});
