import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export let lightTheme: Writable<Boolean> = writable(false);
let dynamicTheme: [string | null, boolean]  = [
        localStorage.getItem("lightTheme"), 
        window.matchMedia('(prefers-color-scheme: light)').matches
    ];

export function checkUserThemePreference() {
    dynamicTheme[0] ? lightTheme.set(Boolean(dynamicTheme[0])) : lightTheme.set(dynamicTheme[1]);
}