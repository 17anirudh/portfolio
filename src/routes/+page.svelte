<script lang="ts">
    import ToolKit from "../components/toolKit.svelte";
    import Skills from "../components/skills.svelte";
    import Projects from "../components/projects.svelte";
    import Contact from "../components/contact.svelte";
    import Signature from "../components/signature.svelte";
</script>

<style lang="scss">
    div#pageBody{
        display: flex;
        flex-direction: column;
        gap: 36px;
        padding: clamp(1.25rem, 0.8571rem + 1.9643vw, 4rem);
        font-family: inherit;
        font-size: large;
        h2 {
            cursor: default;
            font-family: "Cormorant Upright", serif;
            font-weight: 300;
            font-size: clamp(1.26rem, 0.8686rem + 1.9571vw, 4rem);
            span {
                font-size: clamp(1.26rem, 0.8686rem + 1.9571vw, 4rem);
            }
        }
        .card {
            transition: all ease-in-out 0.5s;
            width: inherit;
            font-family: "Exo 2", sans-serif;
            h3{
                font-family: "Cormorant Upright", serif;
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
                font-family: "Exo 2", sans-serif;
                font-size: clamp(0.7rem, 0.5857rem + 0.5714vw, 1.5rem);
                font-weight: 441;
            }
        }
    }
    dt.underline{
        text-decoration: underline;
    }
</style>

<div id="pageBody">
    <!-- <h1>Vedala Anirudh</h1> -->
    <div><Signature /></div>
    <h2><span class="material-symbols-outlined">location_on</span>Visakhapatnam, India</h2>
    <div class="card">
       <p> 
            I love working on enhancing my skills and knowledge in computer science, with a primary focus on Data 
            Engineering, Machine Learning, Deep Learning, and Full Stack Website Development.
            Currently senior pursuing an undergraduate degree in <ToolKit hoverText="Dynamic field that combines principles of cs and engineering" actualText="Computer Science Engineering"/>. 
            Beyond technology, I like maps and entertainment especially movies and music. I have also immersed myself 
            in various extracurricular activities like drawing, swimming, and roller-skating during my school years.
        </p>
    </div>
    <br><br><br>
    <div class="card">
        <h3><span class="material-symbols-outlined">emoji_people</span>About:</h3>
        <p>
            The key to a fast and demanding future is to <b>build slow now</b>. It might feel counterintuitive, but a 
            well-designed foundation is what allows for rapid scaling and true speed later on. When we rush or simply 
            copy/paste templates we're creating a quick-fix solution that will inevitably break under pressure. By 
            taking the time to write clean code, plan our architecture, and build with scalability in mind, we are 
            investing in a future where our system is not just functional, but also resilient and powerful enough to 
            meet any demand. I'm not perfect, and I'm trying to improve by understanding concepts  through <ToolKit hoverText="Characterized by repeated, varied attempts which are continued until success" actualText="Trail and Error"/> method and use templates where actually needed. 
            <br><br>
            A feverant student studying B.Tech Computer Science Engineering in
            <a href="https://lbce.edu.in/" target="_blank">
                <b><ToolKit actualText="Dr Lankapalli Bullayya College of Engineering" hoverText="Autonomous Engineering college affiliated to Andhra University"/></b>
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
    <br><br><br>
    <div class="card" id="skills">
        <h3><span class="material-symbols-outlined">engineering</span>Skills:</h3>
        <Skills />
    </div>
    <br><br><br>
    <div id="projects" class="card">
        <br><br>
        <h3><span class="material-symbols-outlined">folder_code</span>Projects</h3>
        <Projects />
    </div>
    <br><br><br>
    <div id="experience" class="card">
        <h3><span class="material-symbols-outlined">work_history</span>Experience: </h3> <br> <br>
        <dl>
            <dt class="underline">
                HackAP Hackathon
            </dt>
            <dd>
                Qualified twice for the in-person demonstration phase along with my team after the prototype evaluation. <br>
                Built an Android app to detect outsiders/trespassers entering residential zone. <br>
                Created a Web app to search LinkedIn profiles with 10+ years of experience in a domain.
            </dd>
            <br>
            <dt class="underline">
                Smart India Hackathon
            </dt>
            <dd>
                Participated for SIH Internal hackathon
            </dd>
            <br>
            <dt class="underline">
                Walmart Advanced Software Engineering Virtual Experience Program
            </dt>
            <dd>
                Developed a novel version of a heap data structure in Java for Walmart's shipping department, showcasing strong
                problem-solving and algorithmic skills. <br>
                Designed a UML class diagram and ER diagram for a data processor, considering different operating modes and
                database connections.
            </dd>
        </dl>
    </div>
    <br><br><br>
    <div id="contact" class="card">
        <h3><span class="material-symbols-outlined">account_circle</span>Contact me: </h3> <br> <br>
        <div id="form">
            <Contact />
        </div>
    </div>
</div>