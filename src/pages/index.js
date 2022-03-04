import React, {useState} from "react"
import "../styles/styles.scss"
import Section from "../components/Section"
import me from "../images/me.jpg"
import Helmet from "react-helmet"
import Card from "../components/Card"
import content from "../content/experience.json"
import useLocalStorage from "use-local-storage";
import Toggle from "react-toggle";
import Tag from "../components/Tag"
import ContactButton from "../components/ContactButton"
import ReactTypingEffect from "react-typing-effect";
import Minisection from "../components/Minisection"
import GithubIcon from "../images/github.svg";
import LinkedinIcon from "../images/linkedin.svg";

const IndexPage = () => {

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  
  const firstLoad = theme === "dark" ? true : false;
  const [isDark, setIsDark] = useState(firstLoad);

  const handleToggle = (theme) => {
    if (theme === "dark") {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  };
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    handleToggle(newTheme);
  };

  return (
    <main className="app" data-theme={theme}>

      <Helmet>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </Helmet>

      <section class="hero">

        <div class="box" id="wrapper">

          <div class="block" id="header">

            <nav class="navbar" role="navigation" aria-label="main navigation">
              
              <div class="navbar-brand">
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-unlock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
                  </span>
              </div>

              <div class="navbar-menu">
                
                <div class="navbar-start">
                  <a class="navbar-item" href="https://github.com/miguelocana" id="user" target="_blank">
                    miguelocana
                  </a>
                  
                  <span className="navbar-item">
                    /
                  </span>

                  <a class="navbar-item" href="http://localhost:8000/" id="readme">
                    <strong>README</strong>
                  </a>
                </div>

                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <Toggle
                        defaultChecked={isDark}
                        className="toggle"
                        onChange={switchTheme}
                        icons={{
                          checked: null,
                          unchecked: null
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>

          </div>

          <div class="block" id="content">

            <Section title={null} id="introduction">
              <div className="columns">
                <div className="column is-one-quarter" id="me_wrapper">
                    <img src={me} id="me"/>
                    
                    <Minisection title="Social media">

                      <div class="card social-media">
                        <header class="card-header">
                          <button class="card-header-icon" >
                            <span class="icon">
                              <i class="fab fa-linkedin-in"></i>
                            </span>
                          </button>
                          <p class="card-header-title">
                              @miguelocanaacosta
                          </p>
                        </header>
                      </div>
                      <div class="card social-media">
                        <header class="card-header">
                          <button class="card-header-icon" >
                            <span class="icon">
                              <i class="fab fa-github"></i>
                            </span>
                          </button>
                          <p class="card-header-title">
                              @miguelocana
                          </p>
                        </header>
                      </div>

                    </Minisection>
                    
                    <Minisection title="Campos de interés">
                      <Tag title="machine-learning"/>{" "}
                      <Tag title="bioinformatics"/>{" "}
                      <Tag title="software-development"/>{" "}
                    </Minisection>

                </div>
                <div className="column is-three-quarter">
                  <p>
                    Hey! I'm Miguel, I currently live in Madrid.
                  </p>

                  <p>
                    Soy{" "}
                    <strong>
                      <ReactTypingEffect
                        text={["bioinformático", "software engineer"]}
                        speed={40}
                        className="typing"
                      />
                    </strong>
                  </p>
                  
                  <p>
                    Cuando no estoy programando, estoy tocando la guitarra. Mis áreas de interés son
                  </p>
                  
                  <p>
                    Cuando no estoy programando, estoy tocando la guitarra. Mis áreas de interés son
                  </p>
                  
                  <p>
                    Cuando no estoy programando, estoy tocando la guitarra. Mis áreas de interés son
                  </p>

                </div>
              </div>
            </Section>

            <Section title="experience">
              
              <p>
                <div className="notification">
                  Un resumen de mi trayectoria profesional y académica...
                </div>
              </p>

              {content.map((c) => {
                  return <Card content={c} />;
                })}

            </Section>


            <Section title="contact">
              <p>
                Si quieres que trabajemos juntos, si tienes alguna pregunta o si sólo quieres saludar, <b>mi bandeja de entrada siempre está abierta</b> e intentaré responderte lo antes posible.
              </p>
              
              <div className="container has-text-centered">
                <ContactButton />
              </div>

            </Section>

          </div>

          <div class="block" id="footer">
            <div className="container has-text-centered">
              <a href="https://github.com/miguelocana/miguelocanaacosta.com">
                Built by Miguel Ocaña
              </a>
            </div>
          </div>


        </div>  

      </section>
    </main>
  )
}

export default IndexPage
