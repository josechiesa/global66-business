// Mock contact API. Nothing is stored or sent anywhere.
// - Validates the payload with the same rules as the form (shared/utils/contact.ts)
//   and answers 422 with per-field errors.
// - Waits ~900 ms to simulate the network.
// - Any email ending in "@error.com" returns a 500, to try the error state.

import {
	hasContactErrors,
	validateContact,
	type ContactForm,
} from '~/utils/contact';

export default defineEventHandler(async (event) => {
	const body = (await readBody<Partial<ContactForm>>(event)) ?? {};
	const form: ContactForm = {
		name: String(body.name ?? '').trim(),
		email: String(body.email ?? '').trim(),
		company: String(body.company ?? '').trim(),
	};
	const { name, email } = form;

	const fieldErrors = validateContact(form);
	if (hasContactErrors(fieldErrors)) {
		throw createError({
			statusCode: 422,
			statusMessage: 'Datos inválidos',
			data: { fieldErrors },
		});
	}

	await new Promise((resolve) => setTimeout(resolve, 900));

	if (email.toLowerCase().endsWith('@error.com')) {
		throw createError({
			statusCode: 500,
			statusMessage: 'No pudimos procesar tu solicitud',
		});
	}

	// The same id goes to the CRM (here) and to GA4 (generate_lead in the form)
	const id = `req_${Date.now().toString(36)}`;
	console.log('[CRM] lead', { lead_id: id, ...form });

	return {
		ok: true,
		id,
		message: `Gracias, ${name.split(' ')[0]}. Te contactaremos pronto.`,
	};
});
