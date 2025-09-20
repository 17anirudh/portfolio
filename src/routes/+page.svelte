<script lang="ts">
    import ToolKit from "../components/toolKit.svelte";
    import Skills from "../components/skills.svelte";
</script>

<style lang="scss">
    div#pageBody{
        display: flex;
        flex-direction: column;
        gap: 36px;
        padding: 80px;
        font-size: large;
        h1 {
            font-size: 3.6rem;
            transition: color ease-in-out 0.6s;
            cursor: default;
            &:hover {
                color: rebeccapurple;
            }
        }
        .card {
            transition: all ease-in-out 0.5s;
            width: inherit;
            &:hover {
                box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
            }
            h3{
                transition: all ease-in 0.3s;
                &:hover {
                    text-decoration: underline;
                }
            }
            a{
                color: inherit;
                text-decoration: underline;
                &:visited {
                    color: inherit;
                }
            }
            p {
                font-size: larger;
                padding: 20px 0 20px 0;
            }
        }
    }
</style>

<div id="pageBody">
    <h1>VEDALA ANIRUDH</h1>
    <h2><span class="material-symbols-outlined">location_on</span>Visakhapatnam, India</h2>
    <div class="card">
       <p> 
            I love working on enhancing my skills and knowledge in computer science, with a primary focus on Data 
            Engineering, Machine Learning, Deep Learning, and Full Stack Website Development.
            Currently senior pursuing an undergraduate degree in Computer Science Engineering. 
            Beyond technology, I like maps and entertainment especially movies and music. I have also immersed myself 
            in various extracurricular activities like drawing, swimming, and roller-skating during my school years.
        </p>
    </div>
    <div class="card">
        <h3><span class="material-symbols-outlined">emoji_people</span>About:</h3>
        <p>
            The key to a fast and demanding future is to <b>build slow now</b>. It might feel counterintuitive, but a 
            well-designed foundation is what allows for rapid scaling and true speed later on. When we rush or simply 
            copy/paste templates we're creating a quick-fix solution that will inevitably break under pressure. By 
            taking the time to write clean code, plan our architecture, and build with scalability in mind, we are 
            investing in a future where our system is not just functional, but also resilient and powerful enough to 
            meet any demand. I'm not perfect, and I'm trying to improve by understanding concepts  through <b>trail and 
            error</b> method and use templates where actually needed. 
            <br><br>
            A feverant student studying B.Tech Computer Science Engineering in
            <a href="https://lbce.edu.in/" target="_blank">
                <b>Dr Lankapalli Bullayya College of Engineering</b>
            </a>
            graduating by 2026. My curious nature have gotten me involved in more pratical development than theoritical
            approach. Started with the installation of MinGW compiler to run C programs, I feel to proud to come this 
            far exploring various technical concepts. A major turn came when I started working with 
            <ToolKit hoverText="Training machine through data" actualText="Machine Learning"/> when I explored concepts of
            mathematical coding, algorithmic tuning, etc. My curiosity peaked when I tried a simple ML deployement project 
            <a href="https://github.com/17anirudh/NIDS" target="_blank"><ToolKit hoverText="Simple binary classifier on nsl-kdd dataset" 
            actualText="repo link"/></a> when I came across backend and frontend in use.
        </p>
    </div>
    <div class="card" id="skills">
        <h3><span class="material-symbols-outlined">engineering</span>Skills:</h3>
        <Skills />
    </div>
</div>