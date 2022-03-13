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
import Notification from "../components/Notification";

const IndexPage = () => {
  const [theme, setTheme] = useState("dark")

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
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
                  <a class="navbar-item" href="https://github.com/miguelocana" id="user" target="_blank" rel="noopener">
                    miguelocana
                  </a>
                  
                  <span className="navbar-item">
                    /
                  </span>

                  <a class="navbar-item" href="http://www.miguelocanaacosta.com/" id="readme">
                    <strong>README.md</strong>
                  </a>
                </div>

                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <Toggle
                        defaultChecked={true}
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
                    
                    <Minisection title="Find me">

                      <a href="https://www.linkedin.com/in/miguelocanaacosta/" target="_blank">
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
                      </a>

                      <a href="https://github.com/miguelocana" target="_blank">
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
                      </a>

                    </Minisection>
                    
                    <Minisection title="Fields of interest">
                      <Tag title="machine-learning"/>{" "}
                      <Tag title="bioinformatics"/>{" "}
                      <Tag title="software-development"/>{" "}
                    </Minisection>

                </div>
                <div className="column is-three-quarter">
                  <p>
                    Hey! I'm <strong>Miguel</strong>, I currently live in Madrid, Spain 🇪🇸.
                  </p>

                  <p>
                    I'm a{" "}
                    <strong>
                      <ReactTypingEffect
                        text={["bioinformatician", "software developer"]}
                        speed={40}
                        className="typing"
                      />
                      🧬🖥️.
                    </strong>
                  </p>
                  
                  <p>
                    I studied biology showing a great interest in computers (and music). Thanks to the entropy of biological and clinical data, I ended up specializing in bioinformatics and delving into the world of software and artificial intelligence building all kinds of applications.
                  </p>

                  <p>
                    Since then, when I'm not programming, I'm playing guitar 🎸.
                  </p>

                  <p>
                    Currently, I'm involved in the digital transformation of a <a href="https://www.bancosantander.es/">huge fintech corporation</a>. Here are a few techonologies I've been working with recently:
                    <div className="columns is-mobile" id="techs">
                        <div className="column is-two-fifths">
                          <ul>
                            <li id="python">Python</li>
                            <li id="shell">Shell</li>
                            <li id="r">R</li>
                            <li id="csharp">C#</li>
                          </ul>
                        </div>
                        <div className="column is-three-fifths">
                          <ul>
                            <li id="pyspark">PySpark</li>
                            <li id="javascript">JavaScript</li>
                            <li id="html-css">HTML/CSS</li>
                            <li id="react">React</li>
                          </ul>
                        </div>
                    </div>
                  </p>
                  
                </div>
              </div>
            </Section>

            <Section title="Where I've Worked">

              {content.map((c) => {
                  return <Card content={c} />;
                })}

            </Section>


            <Section title="Get In Touch">
              <Notification>
                If you want us to work together, if you have any questions or if you just want to say hello, <strong>my inbox is always open</strong> and I will try to answer you as soon as possible.
              </Notification>
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
