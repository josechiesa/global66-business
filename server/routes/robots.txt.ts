import { absoluteUrl } from '../../app/utils/site';

// Replaces public/robots.txt so the sitemap line carries the absolute site URL.
export default defineEventHandler((event) => {
	const { siteUrl } = useRuntimeConfig(event).public;
	setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
	return [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${absoluteUrl(siteUrl, '/sitemap.xml')}`,
		'',
	].join('\n');
});
