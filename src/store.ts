import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export let lightTheme: Writable<boolean> = writable(false);
export let visibleState: Writable<boolean> = writable(false);