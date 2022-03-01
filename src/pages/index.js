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
                    <i class="fas fa-unlock"></i>
                  </span>
              </div>

              <div id="navbarBasicExample" class="navbar-menu">
                
                <div class="navbar-start">
                  <a class="navbar-item" href="http://localhost:8000/">
                    <strong>miguelocana</strong>
                  </a>
                  
                  <span className="navbar-item">
                    / 
                  </span>

                  <a class="navbar-item" href="http://localhost:8000/">
                    <strong>README.md</strong>
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
                </div>

                <div className="column is-three-quarter">
                  <p>
                    Estudié el grado de biología, aunque me he criado entre ordenadores y siempre mostré un gran interés por la informática (y la música). Acabé estudiando el máster de bioinformática y bioestadística.
                  </p>
                  <p>
                    Desde entonces, si no estoy programando, estoy tocando la guitarra.
                  </p>
                  <Tag title="machine-learning"/>
                  &nbsp;
                  <Tag title="bioinformatics"/>
                  &nbsp;
                  <Tag title="software-development"/>
                </div>
              </div>
            </Section>


            <Section title="experience 💼">

              {content.map((c) => {
                  return <Card content={c} />;
                })}

            </Section>


            <Section title="contact 📧">
              Si quieres que trabajemos juntos, si tienes alguna pregunta o si sólo quieres saludar, <b>mi bandeja de entrada siempre está abierta</b> e intentaré responderte lo antes posible.
            </Section>

          </div>

          <div class="block" id="footer">
            Footer
          </div>


        </div>  

      </section>
    </main>
  )
}

export default IndexPage
