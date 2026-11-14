import { absoluteUrl } from '../../app/utils/site';
import { ROUTES } from '../../app/utils/routes';

// Only real, indexable pages. Redirected paths (/, /empresas, -clp) are left out.
const PAGES = [{ path: ROUTES.home, changefreq: 'weekly', priority: '1.0' }];

export default defineEventHandler((event) => {
	const { siteUrl } = useRuntimeConfig(event).public;
	const lastmod = new Date().toISOString().slice(0, 10);

	const urls = PAGES.map(
		(page) => `	<url>
		<loc>${absoluteUrl(siteUrl, page.path)}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`,
	).join('\n');

	setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
});
