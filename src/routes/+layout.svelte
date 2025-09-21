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

    <!--Icons-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"  />
    <!--Logo-->
    <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Google+Sans+Code:wght@300&display=swap" rel="stylesheet">
    <!--Navbar-->
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@300&display=swap" rel="stylesheet">
    <!--p-->
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,441;1,441&display=swap" rel="stylesheet">
    <!--Vizag, h3-->
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@400;500;600&display=swap" rel="stylesheet">

    <title>Anirudh</title>
</svelte:head>

<script lang="ts">
	import owl from '$lib/assets/owl.svg';
    import Navbar from '../components/navbar.svelte';
    import Loader from '../components/loader.svelte';
    import {lightTheme} from '../store';
    import {visibleState} from '../store';

    let { children } = $props();
</script>

<style lang="scss">
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
    @mixin full-screen {
        min-height: 100vh;
        min-height: 100dvh;
        min-height: 100%;
        height: 100vh;
        height: 100dvh;
        height: 100%;
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
        height: 100vh;
        height: 100dvh;
        width: 100vw;
        @include center-stuff;
        @include body-color("d");
        &.hide {
            display: none;
        }
    }

	div {
        &#mainBody{
            @include full-screen;
            @include body-color("d");
            @include center-stuff;
            visibility: hidden;
            &.visible{
                visibility: visible;
            }
            &.lightTheme{
                @include body-color("l");
            }
        }
    }
    footer {
        bottom: 0;
        border-top: 1px solid slateblue;
        display: flex;
        flex-direction: column;
        @include center-stuff;
        height: 200px;
        a {
            color: inherit;
            text-decoration: none;
            &:visited {
                color: inherit;
            }
        }
    }
</style>

<div id="loader" class:hide={$visibleState}>
    <Loader />
</div>

<div id="mainBody" class:visible={$visibleState} class:lightTheme={$lightTheme} >
    <Navbar />
    <div>
        {@render children?.()}
    </div>
    <br><br><br><br><br><br>
    <footer>
        <b>Thank you for taking your time and visiting my website</b>
        <a href="#mainBody" aria-label="To top">Scroll to top</a>
    </footer>
</div>