<style lang="scss">
    #innerProjects{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    img {
        height: 270px;
    }
    a {
        text-decoration: none;
        background-color: inherit;
        filter: contrast(-20%);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        figcaption {
            transition: all ease-in-out 0.3s;
            &:hover {
                color: blueviolet;
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
@media only screen and (max-width: 640px) {
    #innerProjects img {
        height: 100px;
    }
}
</style>

<div id="innerProjects">
    <a href="/" class="project1">
        <figure>
            <img src="https://github.com/17anirudh/ATS-Score/raw/main/ss.png" alt="ATS-Score checker screenshot">
            <figcaption>ATS-Score checker</figcaption>
        </figure>
    </a>
    <a href="/" class="project2">
        <figure>
            <img src="https://github.com/17anirudh/URL-Shortner/raw/main/shrink.io.png" alt="">
            <figcaption>URL-Shortner</figcaption>
        </figure>
    </a>
    <a href="/" class="project3">
        <figure>
            <img src="https://github.com/17anirudh/NIDS/blob/main/web.png?raw=true" alt="Basic ML deployed website">
            <figcaption>Binary Tree classifier</figcaption>
        </figure>
    </a>
    <a href="/" class="project4">
        <figure>
            <img src="https://private-user-images.githubusercontent.com/139898545/366485568-574ebcce-d60d-46eb-9355-ce032a67a959.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgzNzgxMDYsIm5iZiI6MTc1ODM3NzgwNiwicGF0aCI6Ii8xMzk4OTg1NDUvMzY2NDg1NTY4LTU3NGViY2NlLWQ2MGQtNDZlYi05MzU1LWNlMDMyYTY3YTk1OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyMFQxNDE2NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNDg3MzI0NjBmOWFjNjI5ZTA2YmViNGY4OWFhNzkzNDZjNjcwYTNhMjFlYTk1YThlM2NmYmM1NWEzMmM4YjQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.v56WJ-MhC7tcTwgQ5ClzasavjJ4Nu4vTRxrI7Cpuptc" alt="Terminal screenshot">
            <figcaption>Requests API calls</figcaption>
        </figure>
    </a>
</div>