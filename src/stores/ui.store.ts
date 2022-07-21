import { writable, readable } from 'svelte/store';

export const theme = writable('primary');

export const bug = writable(true);

let timeout: ReturnType<typeof setTimeout>;

export const data = readable(
	{
		buttons: [] as string[],
		items: [] as string[]
	},
	function start(set) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			set({
				buttons: ['1', '2'],
				items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
			});
		}, 1500);
	}
);

export const selection = writable({
	button: '',
	item: ''
});
