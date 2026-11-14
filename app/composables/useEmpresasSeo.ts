export const useEmpresasSeo = () => {
	const { siteUrl } = useRuntimeConfig().public;
	const route = useRoute();

	const title = SITE.title;
	const description = SITE.description;
	const pageUrl = absoluteUrl(siteUrl, route.path);
	const imageUrl = absoluteUrl(siteUrl, SITE.logo);

	useSeoMeta({
		title,
		description,
		robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
		ogType: 'website',
		ogSiteName: SITE.name,
		ogLocale: SITE.locale,
		ogTitle: title,
		ogDescription: description,
		ogUrl: pageUrl,
		ogImage: imageUrl,
		ogImageAlt: SITE.name,
		twitterCard: 'summary',
		twitterTitle: title,
		twitterDescription: description,
		twitterImage: imageUrl,
		twitterImageAlt: SITE.name,
	});

	// Canonical without query or hash, so UTM-tagged ad URLs don't split ranking signals.
	useHead({ link: [{ rel: 'canonical', href: pageUrl }] });
}
