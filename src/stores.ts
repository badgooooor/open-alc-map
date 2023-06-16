import { writable } from 'svelte/store';

export const selectedProvince = writable<string | null>(null);
