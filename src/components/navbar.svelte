<script lang="ts">
    import { onMount } from 'svelte';
    import {lightTheme} from '../store';
    import {visibleState} from '../store';
            
    onMount(() => {
        setTimeout(() => {
            let dynamicTheme: [string | null, boolean]  = [
                localStorage.getItem("lightTheme"), 
                window.matchMedia('(prefers-color-scheme: light)').matches
            ];
            dynamicTheme[0] ? lightTheme.set(Boolean(dynamicTheme[0])) : lightTheme.set(dynamicTheme[1]);
            visibleState.update(n=>!n);
        }, 1200);
    });

    $effect(() => {
        localStorage.setItem("lightTheme", String(lightTheme));
    });
</script>

<style lang="scss">
    $dark-bg: #0F1035;
    $dark-div: #365486;
    $light-div: #7FC7D9;
    $light-bg: #DCF2F1;
    
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
    
    nav {
        display: flex;
        @include div-color("d");
        @include center-stuff;
        gap: 20px;
        width: 100vw;
        div#inner {
            display: flex;
            @include center-stuff;
            gap: 20px;
            right: 50px;
        }
        &.lightTheme {
            @include div-color("l");
        }
        a {
            color: inherit;
            text-decoration: none;
            &:visited {
                color: inherit;
                text-decoration: none;
            }
        }
    }
    button {
        &.theme{
            cursor: pointer;
            position: relative;
            padding: 3px;
            font-size: 18px;
            // color: rgb(193, 163, 98);
            border: none;
            background-color: transparent;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
            overflow: hidden;
            ::before {
                content: '';
                position: absolute;
                inset: 0;
                margin: auto;
                width: 50px;
                height: 50px;
                border-radius: inherit;
                scale: 0;
                z-index: -1;
                background-color: rgb(193, 163, 98);
                transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            }
            :hover::before {
                scale: 3;
            }
            :hover {
                color: #212121;
                scale: 1.1;
                box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
                border-radius: 24px;
            }
            :active {
                scale: 1;
            }
        }
        &:not(.theme) {
            color: inherit;
            cursor: pointer;
            background: transparent;
            border: none;
            margin-left: 25px;
        }
    }
    @media only screen and (max-width: 534px){
        nav {
            flex-direction: column;
            gap: 5px;
            div#inner {
                flex-direction: column;
                gap: 5px;
            }
        }
    }
</style>

<nav class:lightTheme={$lightTheme}>
    <button title="Anirudh" aria-label="Anirudh" type="button" onclick="{() => location.reload()}">
        <h1>ANIRUDH</h1>
    </button>
    <div id="inner">
        <a href="#projects">
            <h3>Projects</h3>
        </a>
        <a href="#experience">
            <h3>Experience</h3>
        </a>
        <a href="#contact">
            <h3>Contact me</h3>
        </a>
        <button title="{$lightTheme?'Dark mode':'Light mode'}" aria-label="{$lightTheme?'Dark mode':'Light mode'}"
        type="button" onclick="{() => lightTheme.update(n=>!n)}" class="theme">
            <span class="material-symbols-outlined">{$lightTheme?'dark_mode':'light_mode'}</span>
        </button>
    </div>
</nav>