// Contact form rules, shared by ContactForm.vue (instant feedback)
// and /api/contact (the API can be called without the form).

export type ContactField = 'name' | 'email' | 'company';
export type ContactForm = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContact = (form: ContactForm): ContactErrors => {
	return {
		name:
			form.name.trim().length < 2 ? 'Ingresa tu nombre y apellido.' : undefined,
		email:
			EMAIL_RE.test(form.email.trim()) ? undefined : 'Ingresa un correo válido.',
		company:
			form.company.trim().length < 2 ?
				'Ingresa el nombre de tu empresa.'
			:	undefined,
	};
}

export const hasContactErrors = (errors: ContactErrors) =>
	Object.values(errors).some(Boolean);
