import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

export const TAILWIND_COLORS = Object.keys(resolveConfig(tailwindConfig).theme.colors);

export const EXCLUDED_COLORS = ['current', 'black', 'white', 'transparent'];

export const USABLE_COLORS = TAILWIND_COLORS.filter((c) => !EXCLUDED_COLORS.includes(c));
