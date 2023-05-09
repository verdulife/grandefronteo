import { writable } from 'svelte/store';

export const routes = writable([
	{
		title: '👋 Hola',
		href: '/#welcome',
		active: true
	},
	{
		title: '¿Trans qué?',
		href: '/#transmedia',
		active: false
	},
	{
		title: 'Sinopsis',
		href: '/#sinopsis',
		active: false
	},
	{
		title: 'Guión',
		href: '/#guion',
		active: false
	},
	{
		title: 'Contacto',
		href: '/#contacto',
		active: false
	}
]);
