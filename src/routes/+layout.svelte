<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Sveltekit, SCSS, Webhooks">
    <meta name="description" content="Portfolio website by Anirudh">
    <meta name="author" content="Anirudh">
    <meta name="robots" content="index, follow">

    <!-- Open Graph -->
    <meta property="og:title" content="Anirudh's portfolio">
    <meta property="og:description" content="Portfolio website by Anirudh">
    <meta property="og:image" content="https://raw.githubusercontent.com/17anirudh/owl-svg/28a92f7491af255fd675813b5180f20bda436b61/owl.svg">
    <meta property="og:url" content="https://17anirudh.github.io/">
    <meta property="og:type" content="website">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Anirudh">
    <meta name="twitter:description" content="Portfolio website by Anirudh">
    <meta name="twitter:image" content="https://raw.githubusercontent.com/17anirudh/owl-svg/28a92f7491af255fd675813b5180f20bda436b61/owl.svg">

    <link rel="icon" href="{owl}" type="image/svg">
    <link rel="apple-touch-icon" href="{owl}">
	<link rel="icon" href={owl} />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <title>Anirudh</title>
</svelte:head>

<script lang="ts">
	import owl from '$lib/assets/owl.svg';
    import ThemeButton from '../components/themeButton.svelte';
    import Loader from '../components/loader.svelte';
    import {lightTheme} from '../store';
    import {checkUserThemePreference} from '../store';
    import { onMount } from 'svelte';

    let { children } = $props();
    let visibleState = $state(false);
    onMount(() => {
        setTimeout(() => {
            checkUserThemePreference();
            visibleState = true;
        }, 1200);
    });

    $effect(() => {
        localStorage.setItem("lightTheme", String(lightTheme));
    })
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    $dark-bg: #0F1035;
    $dark-div: #365486;
    $light-div: #7FC7D9;
    $light-bg: #DCF2F1;

    @mixin body-color($theme) {
        @if $theme == "d" {
            background-color: $dark-bg;
            color: $light-bg;
        }
        @else {
            background-color: $light-bg;
            color: $dark-bg;
        }
    }
    @mixin div-color($theme) {
        @if $theme == "d" {
            background-color: $dark-div;
        }
        @else {
            background-color: $light-div;
        }
    }
    @mixin full-screen {
        height: 100vh;
        height: 100dvh;
        width: 100vw;
        width: 100dvw;
    }
    @mixin center-stuff {
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    div#loader {
        display: flex;
        @include full-screen;
        @include center-stuff;
        @include body-color("d");
        &:not(.visible) {
            display: none;
        }
    }

	div#mainBody{
        @include full-screen;
        @include body-color("d");
		font-family: 'Inter', sans-serif;
        visibility: hidden;
        &.visible{
            visibility: visible;
        }
        &.lightTheme{
            @include body-color("l");
        }
	}
</style>

<div id="loader" class:visible={visibleState}>
    <Loader />
</div>

<div id="mainBody" class:visible={visibleState} class:lightTheme={lightTheme}>
    <ThemeButton />
    <p>{$lightTheme}</p>
    {@render children?.()}
</div>