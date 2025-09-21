<script lang="ts">
    import ToolKit from "./toolKit.svelte";
    let message: string;
    let username: string | null;
    let name: string | null;
    let statusMessage: string;
    let statusDisplay: HTMLElement;

    async function sendMessage() {
        try {
            const response = await fetch('/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message, username, name})
            });
            const result = await response.json();
            if (response.ok) {
                statusMessage = 'Message sent';
                statusDisplay.style.color = 'green';
            }
            else {
                statusMessage = `Error: ${result.error}`;
                statusDisplay.style.color = 'red';
            }
        }
        catch (error) {
            console.error(error);
            statusMessage = 'An unexpected error occurred. Please try again.';
            statusDisplay.style.color = 'red';
        }
    }
</script>

<style lang="scss">
    form {
        padding: 10px;
        input, textarea{
            width: clamp(7.4rem, 1.4286rem + 30.3571vw, 50rem);
            background: transparent;
            color: inherit;
            transition: all ease-in-out 0.4s;
            border: none;
            outline: none;
            font-family: inherit;
            border-bottom: 2px solid salmon;
            &:focus{
                outline-color: rgb(0, 255, 255);
                box-shadow: -3px -3px 15px rgb(0, 255, 255);
                transition: .1s;
                transition-property: box-shadow;
            }
        }
        input {
            height: 45px;
            // width: 180px;
        }
        button {
            background: #fbca1f;
            font-family: inherit;
            padding: 0.6em 1.3em;
            font-weight: 900;
            font-size: 18px;
            border: 3px solid black;
            border-radius: 0.4em;
            box-shadow: 0.1em 0.1em;
            cursor: pointer;
            &:hover{
                transform: translate(-0.05em, -0.05em);
                box-shadow: 0.15em 0.15em;
            }
            &:active{
                transform: translate(0.05em, 0.05em);
                box-shadow: 0.05em 0.05em;
            }
        }
    }  
    div#socials {
        font-family: "Cormorant Upright", serif;
        font-size: clamp(0.7rem, 0.5857rem + 0.5714vw, 1.5rem);
        a {
            color: inherit;
            text-decoration: none;
            &:visited {
                color: inherit;
            }
        } 
        div.svg {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.2em;
            height: 1.2em;
            
            svg {
                width: 100%;
                height: 100%;
                fill: #fb1f1f;
            }
        }
    }
</style>

<div class="wrapper">
    <form method="post" on:submit|preventDefault={sendMessage}>
        <label for="name">Enter your name:</label> 
        <br><br><br>
        <input type="text" name="name" placeholder="Name..." bind:value={name}>
        <br><br><br>
        <label for="username">Enter your discord username(optional):</label> 
        <br><br><br>
        <input type="text" name="name" placeholder="sun.breathing_01" bind:value={username}>
        <br><br><br>
        <label for="message">Type message:</label> 
        <br><br><br>
        <textarea name="message" rows="20" draggable="false" bind:value={message} required placeholder="Yo, why did you use svelte?"></textarea> <br><br><br>
        <button type="submit">Submit</button>
    </form>
    <br><br><br>
    <div id="socials">
        <a target="_blank" href="https://www.instagram.com/17veed/">
            <div class="svg">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
            </div>
            <ToolKit hoverText="@17veed" actualText="Instagram"/>
        </a>
        <a target="_blank" href="https://github.com/17anirudh">
            <div class="svg">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </div>
            <ToolKit hoverText="@17anirudh" actualText="Github"/>
        </a>
        <a target="_blank" href="mailto:vedalaanirudh@gmail.com">
            <div class="svg">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            </div>
            <ToolKit hoverText="vedalaanirudh@gmail.com" actualText="Gmail"/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/vedala-anirudh/">
            <div class="svg">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>linkedin</title><path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path></svg>
            </div>
            <ToolKit hoverText="@vedala-anirudh" actualText="LinkedIn"/>
        </a>
    </div>
    <p bind:this={statusDisplay}>{statusMessage}</p>
</div>