<script lang="ts">
    import {lightTheme} from '../store';
</script>

<style lang="scss">
    #innerProjects{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    font-family: inherit;
    img {
        height: 270px;
    }
    a {
        text-decoration: none;
        background-color: inherit;
        filter: contrast(-20%);
        figcaption {
            transition: all ease-in-out 0.3s;
            color: white;
            &.light {
                color: black;
            }
        }
    }
    }
@media only screen and (max-width: 1089px) {
    #innerProjects{
        display: flex;
        flex-direction: column;
    }
}
@media only screen and (max-width: 600px) {
    #innerProjects img {
        height: 190px;
    }
}
@media only screen and (max-width: 406px) {
    #innerProjects img {
        height: 126px;
    }
}
</style>

<div id="innerProjects">
    <a href="/" class="project1">
        <figure>
            <img src="https://github.com/17anirudh/ATS-Score/raw/main/ss.png" alt="ATS-Score checker screenshot">
            <figcaption class:light={$lightTheme}>ATS-Score checker</figcaption>
        </figure>
    </a>
    <a href="/" class="project2">
        <figure>
            <img src="https://github.com/17anirudh/URL-Shortner/raw/main/shrink.io.png" alt="">
            <figcaption class:light={$lightTheme}>URL-Shortner</figcaption>
        </figure>
    </a>
    <a href="/" class="project3">
        <figure>
            <img src="https://github.com/17anirudh/NIDS/blob/main/web.png?raw=true" alt="Basic ML deployed website">
            <figcaption class:light={$lightTheme}>Binary Tree classifier</figcaption>
        </figure>
    </a>
    <a href="/" class="project4">
        <figure>
            <img src="https://github.com/17anirudh/owl-svg/blob/main/terminal.png?raw=true" alt="Terminal screenshot">
            <figcaption class:light={$lightTheme}>Requests API calls</figcaption>
        </figure>
    </a>
</div>