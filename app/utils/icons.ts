export const ICONS = {
	// Una sola cuenta
	wallet: [
		'M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z',
		'M6 6V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1',
		'M21 11h-4a2 2 0 0 0 0 4h4',
	],
	// Cobros y pagos
	transfer: ['M4 8h15', 'M15 4l4 4-4 4', 'M20 16H5', 'M9 12l-4 4 4 4'],
	// Divisas
	exchange: [
		'M3 9a6 6 0 1 0 12 0A6 6 0 1 0 3 9Z',
		'M9 6.5v5',
		'M10.75 7.25H8.5a1.25 1.25 0 0 0 0 2.5h1a1.25 1.25 0 0 1 0 2.5H7.25',
		'M17.2 10.4a6 6 0 1 1-6.8 6.8',
	],
	// Form success
	check: ['M20 6 9 17l-5-5'],
	// Scroll to top
	arrowUp: ['M12 19V5', 'M5 12l7-7 7 7'],
} as const;

export type IconName = keyof typeof ICONS;
