<script>
  import Social from "./lib/Social.svelte";
  import Footer from "./lib/Footer.svelte";
  import Jay from "./assets/jay.png";
</script>

<div id="container">
  <main>
    <div class="inner">
      <img src={Jay} class="headshot" alt="Jay" />
      <h1>Jay Mascarenas</h1>
      <h2>Web Developer, Director, and Full-Stack Bootcamp Instructor.</h2>
      <p>
        I have over 12 years of professional experience managing and developing
        web apps with thoughtful UI/UX within a collaborative team setting. I
        enjoy leading teams to build external and internal applications that
        drive business forward and improves productivity.
      </p>
      <p>
        I enjoy running, working out, going to concerts and spending time with
        my family. I enjoy learning new developer tech and keeping up with the
        latest, and greatest tech in the space.
      </p>
      <Social />
    </div>
  </main>
  <Footer />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap");
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(body) {
    min-width: 320px;
    min-height: 100vh;
    line-height: 1;
    word-wrap: break-word;
    overflow-x: hidden;
  }

  :global(body::before) {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
    transform: scale(1);
    background-attachment: scroll;
    background-image: linear-gradient(
        to top,
        rgba(21, 25, 31, 0.831),
        rgba(21, 25, 31, 0.831)
      ),
      url("./assets/bg.jpeg");
    background-position: 0% 0%, center;
    background-repeat: repeat, repeat;
    background-size: auto, cover;
    background-color: #ffffff;
  }

  #container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  main {
    display: flex;
    position: relative;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
    text-align: left;
    transition: opacity 1s ease-in-out 0s;
  }

  main > .inner {
    position: relative;
    border-radius: inherit;
    padding: 6.25rem 5rem;
    max-width: 100%;
    width: 49rem;
  }

  main > .inner > :first-child {
    margin-top: 0;
  }

  main > .inner > * {
    margin-bottom: 1.5rem;
  }

  main .inner img {
    max-width: 150px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
  }

  h1 {
    color: #fff;
    font-family: "Quicksand", sans-serif;
    font-size: 3em;
    line-height: 1.125;
    font-weight: 700;
    margin-top: 0;
  }

  h2 {
    color: #fff;
    font-family: "Quicksand", sans-serif;
    font-size: 1.5em;
    line-height: 1.5;
    font-weight: 300;
  }

  p {
    color: rgba(255, 255, 255, 0.729);
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .headshot {
      margin: 0 auto;
      display: block;
    }
    h1 {
      text-align: center;
    }
  }

  @media (min-width: 480px) {
  
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
