const HOME = '/empresas/cuenta-remunerada';

// Section ids on the home page. Single source of truth for the anchors:
// the content and components set these ids, and ROUTES links to them.
export const SECTION_IDS = {
	account: 'costo-de-no-hacer-nada',
	currencies: 'monedas',
	howItWorks: 'como-funciona',
	faq: 'preguntas-frecuentes',
	contact: 'contacto',
} as const;

const section = (id: string) => `${HOME}#${id}`;

export const ROUTES = {
	home: HOME,
	account: section(SECTION_IDS.account),
	currencies: section(SECTION_IDS.currencies),
	howItWorks: section(SECTION_IDS.howItWorks),
	faq: section(SECTION_IDS.faq),
	demo: section(SECTION_IDS.contact),
} as const;

export const NAV_LINKS = [
	{ label: 'Cuenta remunerada', to: ROUTES.account },
	{ label: 'Cómo funciona', to: ROUTES.howItWorks },
	{ label: 'Preguntas frecuentes', to: ROUTES.faq },
] as const;