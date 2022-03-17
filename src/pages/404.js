import React, {useState} from "react"
import "../styles/styles.scss"
import Helmet from "react-helmet"
import useLocalStorage from "use-local-storage";
import Toggle from "react-toggle";

// Components
import Section from '../components/Section';
import Head from '../components/Head';

const NotFoundPage = () => {

  const [theme, setTheme] = useLocalStorage(
    "theme",
    "dark"
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

      <Head />

      <section class="hero is-fullheight">

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

                  <a class="navbar-item" href="http://www.miguelocanaacosta.com/" id="readme">
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

            <Section title={null} id="notfound">
              
              <p className="title">404</p>
              <p className="subtitle">Page not found</p>
              <a href="http://www.miguelocanaacosta.com/">← Go back</a>
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

export default NotFoundPage
