import type { ContentSectionProps } from '../../app/components/ContentSection.vue';
import {
	currencies,
	currenciesSection,
	faq,
	howItWorks,
	netReturn,
	pain,
} from '../../app/content/empresas';
import { SITE, absoluteUrl } from '../../app/utils/site';
import { ROUTES } from '../../app/utils/routes';

// llms.txt (https://llmstxt.org): a Markdown summary of the site for AI answer
// engines (GEO). Built from the same content as the page, so it never drifts.
// Format: H1 title, blockquote summary, then H2 sections whose bodies are
// link lists ("- [name](url): notes"). Each link points to its page section.
export default defineEventHandler((event) => {
	const { siteUrl } = useRuntimeConfig(event).public;
	const page = absoluteUrl(siteUrl, ROUTES.home);

	// Square brackets would break the Markdown link text.
	const escape = (text: string) => text.replace(/[[\]]/g, '\\$&');

	const linkList = (section: ContentSectionProps) => {
		const url = section.id ? `${page}#${section.id}` : page;
		return (section.items ?? [])
			.map((item) => `- [${escape(item.title)}](${url}): ${item.description}`)
			.join('\n');
	};

	const currencyList = currencies
		.map(
			(c) =>
				`- [${escape(c.title)}](${page}#${c.id}): ${c.description} ${c.note ?? ''}`.trimEnd(),
		)
		.join('\n');

	setHeader(event, 'Content-Type', 'text/markdown; charset=utf-8');
	setHeader(event, 'Cache-Control', 'public, max-age=3600');

	return `# ${SITE.name} · ${SITE.tagline}

> ${SITE.description}

La disponibilidad y las condiciones pueden variar por país y moneda.

## Página principal

- [${SITE.tagline}](${page}): Cuenta remunerada en dólares (USD) y pesos para empresas: por qué rentabilizar el saldo, cómo funciona en cada moneda, cómo comparar el rendimiento neto y preguntas frecuentes.

## ${pain.title.replace(/\n/g, ' ')}

${linkList(pain)}

## ${currenciesSection.title.replace(/\n/g, ' ')}

${currencyList}

## ${netReturn.title.replace(/\n/g, ' ')}

${linkList(netReturn)}

## Cómo funciona

${linkList(howItWorks)}

## Preguntas frecuentes

${linkList(faq)}
`;
});
