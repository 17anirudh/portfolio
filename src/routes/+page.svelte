<script lang="ts">
    let counts = [1,2,3,4,5,6,7,8,9];
</script>

<style lang="scss">
    div#pageBody{
        padding: 30px;
    }
    p{
        font-size: x-large;
        text-align: start;
        margin-bottom: 30px;
    }
</style>

<div id="pageBody">
    {#each counts as count}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id harum pariatur adipisci et commodi debitis a 
            perspiciatis quisquam ut nemo, culpa aspernatur. Suscipit neque fugit dignissimos culpa ipsum doloribus laudantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum, tempore est laborum expedita mollitia rerum 
            consequuntur consequatur necessitatibus natus voluptatum vero repellendus incidunt explicabo aperiam corrupti optio 
            nam voluptatem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto mollitia laborum quos repellendus 
            sapiente veritatis amet, perspiciatis libero tempore nobis animi quisquam, corporis eos ab blanditiis illum! Odio, 
            similique quos.
        </p>
    {/each}
</div>