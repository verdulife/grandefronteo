import { writable } from 'svelte/store';

export const routes = writable([
	{
		title: 'Laitmotiv',
		href: '#welcome',
		active: true
	},
	{
		title: 'Sinopsis',
		href: '#sinopsis',
		active: false
	},
	{
		title: 'Personajes',
		href: '#personajes',
		active: false
	},
	{
		title: 'Referencias',
		href: '#referencias',
		active: false
	},
	{
		title: 'Contacto',
		href: '#contacto',
		active: false
	}
]);
