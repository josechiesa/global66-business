import type { ContentSectionProps } from '~/components/ContentSection.vue';
import type { CurrencyOption } from '~/components/CurrencyCard.vue';
import { SECTION_IDS } from '../utils/routes';

// Order follows the brief: pain → explanation → conversion.

export const pain: ContentSectionProps = {
	id: SECTION_IDS.account,
	eyebrow: '01 / EL COSTO DE NO HACER NADA',
	title: 'La plata quieta también\nle cuesta a tu empresa.',
	description:
		'Cobraste. Reservaste para los próximos pagos. Pero mientras esperas, ese saldo podría estar haciendo más.',
	layout: 'cards',
	background: 'white',
	items: [
		{
			title: 'Plata inmovilizada',
			description:
				'El saldo espera en la cuenta corriente sin aportar a tu negocio.',
		},
		{
			title: 'Poco rendimiento',
			description:
				'Tener dinero disponible no debería impedirte evaluar otras opciones.',
		},
		{
			title: 'Costos que sorprenden',
			description:
				'Una tasa atractiva dice poco si no conoces las comisiones y condiciones.',
		},
	],
};

export const currenciesSection: ContentSectionProps = {
	id: SECTION_IDS.currencies,
	eyebrow: '02 / UNA CUENTA, DOS MONEDAS',
	title: 'Haz que tu saldo tenga\nun papel más activo.',
	description:
		'Una cuenta remunerada permite generar rendimientos sobre el saldo elegible, según las condiciones de cada moneda.',
	background: 'section',
	footnote:
		'La disponibilidad y las condiciones pueden variar por país y moneda. Confirma qué opción aplica a tu empresa.',
};

const DEMO_CHECKLIST = [
	'Tasa vigente · saldo mínimo',
	'Acreditación · retiros · costos',
];

export const currencies: CurrencyOption[] = [
	{
		id: 'dolares',
		eyebrow: 'USD / DÓLARES',
		title: 'Tus dólares, con otro propósito.',
		description:
			'Si tu empresa cobra o mantiene reservas en dólares, conoce la opción remunerada en USD.',
		note: 'Para evaluar el saldo que reservas para pagos y compromisos en dólares.',
		checklist: DEMO_CHECKLIST,
	},
	{
		id: 'pesos',
		eyebrow: 'PESOS / MONEDA LOCAL',
		title: 'Más posibilidades para tus pesos.',
		description:
			'Si tu operación está en moneda local, explora cómo remunerar el saldo elegible en pesos.',
		note: 'Para evaluar los excedentes entre cobros y próximos pagos de tu empresa.',
		checklist: DEMO_CHECKLIST,
	},
];

export const netReturn: ContentSectionProps = {
	id: 'rendimiento',
	eyebrow: '03 / MIRA MÁS ALLÁ DE LA TASA',
	title: 'El rendimiento importa.\nLo que te queda, más.',
	description:
		'Antes de mover tu plata, compara el rendimiento neto: lo que genera tu saldo menos los costos e impuestos que correspondan.',
	layout: 'columns',
	background: 'white',
	items: [
		{
			title: 'Una tasa con contexto',
			description:
				'Pregunta si es anual, fija o variable, sobre qué saldo aplica y cuándo se acredita.',
		},
		{
			title: 'Los costos, a la vista',
			description:
				'Revisa mantenimiento, transferencias, retiros y conversión de moneda, si aplican.',
		},
		{
			title: 'Liquidez para tu operación',
			description:
				'Confirma plazos, límites de retiro y disponibilidad del dinero antes de comprometerlo.',
		},
	],
};

export const howItWorks: ContentSectionProps = {
	id: SECTION_IDS.howItWorks,
	eyebrow: '04 / CÓMO FUNCIONA',
	title: 'De la demo a tu saldo\nrindiendo.',
	description: 'Tres pasos, con las condiciones claras antes de decidir.',
	layout: 'cards',
	background: 'section',
	items: [
		{
			title: 'Solicita tu demo',
			description:
				'Cuéntanos cómo opera tu empresa y en qué moneda mantienes tu saldo.',
		},
		{
			title: 'Revisa las condiciones',
			description:
				'Conoce la tasa vigente, los costos y la liquidez de cada moneda.',
		},
		{
			title: 'Abre tu cuenta',
			description:
				'Registra tu empresa, presenta los documentos y, una vez aprobada, empieza a operar.',
		},
	],
};

export const faq: ContentSectionProps = {
	id: SECTION_IDS.faq,
	eyebrow: '06 / RESUELVE TUS DUDAS',
	title: 'Antes de mover tu plata.',
	layout: 'faq',
	background: 'white',
	items: [
		{
			title: '¿Qué es una cuenta remunerada?',
			description:
				'Es una cuenta que permite generar rendimientos sobre un saldo elegible. Las condiciones, los riesgos y el cálculo dependen del producto y de la moneda.',
			open: true,
		},
		{
			title: '¿Dólares o pesos?',
			description:
				'Depende de la moneda de tus cobros, pagos y reservas. En la demo revisamos las opciones disponibles para tu país y tu empresa.',
			open: false,
		},
		{
			title: '¿Cuánto rinde y qué costos tiene?',
			description:
				'Consulta la tasa vigente, su forma de cálculo y todos los cargos aplicables. Compara el rendimiento neto, no solo la tasa anunciada.',
			open: false,
		},
		{
			title: '¿Cuándo puedo usar mi dinero?',
			description:
				'Antes de abrir la cuenta, confirma los plazos, los límites y las condiciones de retiro de cada moneda. Así puedes planificar tus pagos.',
			open: false,
		},
		{
			title: '¿Qué necesito para abrirla?',
			description:
				'Registra tu empresa y presenta los datos y documentos que correspondan a tu país. La apertura requiere revisión y aprobación.',
			open: false,
		},
	],
};
