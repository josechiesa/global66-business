// Site-wide identity used by SEO meta, structured data, sitemap and llms.txt.
// The public URL comes from runtimeConfig.public.siteUrl (NUXT_PUBLIC_SITE_URL).
export const SITE = {
	name: 'Global66 Business',
	legalName: 'Global66',
	tagline: 'Cuenta remunerada para empresas',
	title: 'Cuenta remunerada para empresas en dólares y pesos | Global66',
	description:
		'Haz que la caja de tu empresa rinda en dólares y pesos. Conoce la tasa, los costos y la liquidez de cada moneda antes de decidir. Solicita una demo.',
	locale: 'es_LA',
	language: 'es',
	logo: '/logo-global66-business.svg',
	themeColor: '#131f44',
} as const;

/** Joins the site URL and a path into an absolute URL without double slashes. */
export const absoluteUrl = (siteUrl: string, path = '/'): string => {
	return `${siteUrl.replace(/\/+$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}
