<script lang="ts">
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
            background: transparent;
            color: inherit;
            transition: all ease-in-out 0.4s;
            border: none;
            outline: none;
            font-family: inherit;
            &:hover{
                border: 0.5px solid greenyellow;
            }
            &:focus{
                outline-color: rgb(0, 255, 255);
                box-shadow: -3px -3px 15px rgb(0, 255, 255);
                transition: .1s;
                transition-property: box-shadow;
            }
        }
        input {
            height: 45px;
            width: 500px;
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
        <textarea name="message" rows="20" cols="70" draggable="false" bind:value={message} required placeholder="Yo, why did you use svelte?"></textarea> <br><br><br>
        <button type="submit">Submit</button>
    </form>
    <br><br><br>
    <p bind:this={statusDisplay}>{statusMessage}</p>
</div>