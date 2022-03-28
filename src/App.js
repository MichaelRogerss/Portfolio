import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInfo, faBars, faList, faEnvelope } from '@fortawesome/free-solid-svg-icons'

 library.add(fab, faInfo, faBars, faList, faEnvelope)
function App() {
  return (
    <div className="App">

<nav class="navbar is-link">
  <div class="navbar-brand">
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-end">
      <a class="navbar-item" targett="about" >
        <span class="icon primarycolor">
          <FontAwesomeIcon icon={faInfo} />
        </span>
        <span>About</span>
      </a>
      <a class="navbar-item" targett="services" >
        <span class="icon primarycolor">
        <FontAwesomeIcon icon={faBars} />

        </span>
        <span>Services</span>
      </a>
      <a class="navbar-item" targett="resume" >
        <span class="icon primarycolor">


        </span>
        <span>Resume</span>
      </a>
      <a class="navbar-item" targett="portfolio">
        <span class="icon primarycolor" >
        <FontAwesomeIcon icon={faList} />

        </span>
        <span>Portfolio</span>
      </a>
      <a class="navbar-item" targett="contact" >
        <span class="icon primarycolor">
        <FontAwesomeIcon icon={faEnvelope} />

        </span>
        <span>Contact</span>
      </a>
    </div>
  </div>
</nav>


<section class="hero is-fullheight is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="container maintext">
    <p class="cyxx">Hello!<b class="cyxv">👋</b> My name is</p>
      <h1 class="title is-1 bold">
        Michael Rogers
      </h1>
      <h2 class="subtitle is-3">
        I'm a <b class="primarycolor" >full stack web developer</b>. I mostly focus on <b class="primarycolor" >back-end</b> development and I specialize to make <b class="primarycolor" >fun</b> and <b class="primarycolor" >interactive</b> digital experiences
      </h2>
    </div>
  </div>
</section>


<section class="section" id="about">

  <div class="section-heading">
    <h3 class="title is-2 bold">About Me</h3>

    <img src="/img/mypic.jpg" class="mypic"></img>
    <div class="container">
      <p>Hello! I am a full stack web developer with more than <strong class="primarycolor" >3 years</strong> of well-rounded experience.
        Looking for an opportunity to work and upgrade, as well as being involved in an organization that
        believes
        in gaining a competitive edge and giving back to the community.</p>
    </div>

    <div class="columns tagplacement">
      <div class="column">
        <p class="tagHeader bold">Languages</p>
        <span class="tag is-light">JavaScript</span>
        <span class="tag is-light" >HTML</span>
        <span class="tag is-light" >CSS</span>
        <span class="tag is-light" >PHP</span>
        <span class="tag is-light" >Python</span>
        <span class="tag is-light" >SQL</span>
      </div>

      <div class="column">
        <p class="tagHeader bold">Frameworks</p>
        <span class="tag is-light" >React</span>
        <span class="tag is-light">JQuery</span>
        <span class="tag is-light">NodeJS</span>
        <span class="tag is-light">Bootstrap</span>
        <span class="tag is-light">Bulma</span>
      </div>

    </div>
    <div class="buttons has-addons is-centered socials">
      <a href="https://github.com/MichaelRogerss" class="button is-link socialbutton" target="_blank" > <FontAwesomeIcon icon={["fab", "github"]} /></a>
      <a href="https://stackoverflow.com/users/18572887/michael-rogers" class="button is-link socialbutton" target="_blank"> <FontAwesomeIcon icon="fa-brands fa-stack-overflow" /></a>
      <a href="https://www.linkedin.com/in/michael-rogers-77484b216/" class="button is-link socialbutton" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
      <a href="https://twitter.com/9to5disappear" class="button is-link socialbutton" target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
      <a href="#" class="button is-link socialbutton" target="_blank"><FontAwesomeIcon icon={["fab", "codepen"]} /></a>
    </div>

  </div>

</section>



<section class="section" id="services">
  <div class="section-heading">
    <h3 class="title is-2 bold">Services</h3>
    <h4 class="subtitle is-5">What can I do for you?</h4>
  </div>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="content">
            <h4 class="title is-5">Front End Web Development</h4>
            Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
            Vue.js.
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="content">
            <h4 class="title is-5">Back End Web Development</h4>
            Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="content">
            <h4 class="title is-5">Front End Web Development</h4>
            Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
            Vue.js.
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="content">
            <h4 class="title is-5">Back End Web Development</h4>
            Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section" id="resume">
  <div class="section-heading">
    <h3 class="title is-2 bold">Resume</h3>
    <h4 class="subtitle is-5">More about my past</h4>
    <a href="#" class="button is-link is-medium">
      <span class="icon">
        <i class="fas fa-file-alt"></i>
      </span>
      <span>Download My Resume</span>
    </a>
  </div>
</section>


<section class="section" id="portfolio">
  <div class="container">
    <div class="section-heading">
      <h3 class="title is-2 bold">Portfolio</h3>
      <h4 class="subtitle is-5">My latest works</h4>
    </div>
    <br></br>

    <div class="container portfolio-container">
      <div class="columns">
        <div class="column is-4">

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Admin <small>(Light)</small></span>
                <span class="is-pulled-right">
                  <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                    <span class="tag is-default">v0.7.2</span>
                  </a>
                  <span class="tag is-default">Desktop</span>
                  <span class="tag is-danger">WIP</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image">
                <img src="../images/admin.png" alt="Admin template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/admin.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>




          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Modal Cards</span>
                <span class="is-pulled-right">
                  <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                    <span class="tag is-default">v0.7.2</span>
                  </a>
                  <span class="tag is-default">Desktop</span>
                  <span class="tag is-default">?</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image">
                <img src="https://dummyimage.com/555x255/000/fff" alt="modal-cards template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/modal-cards.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/modal-cards.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






<section class="section" id="contact">
  <div class="container">
    <div class="section-heading">
      <h3 class="title is-2">Contact</h3>
      <h4 class="subtitle is-5">Get in touch</h4>
    </div>
    <br></br>

    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="box">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input"></input>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email input" value=""></input>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div class="field is-grouped has-text-centered">
            <div class="control">
              <button class="button is-link is-large"><span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <span>Submit</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<footer class="footer">
  <div class="section-heading">
  <p><strong>Designed and Built </strong> by <a class="bold" href="https://michaelrogerss.github.io/"> Michael Rogers ✌️</a></p>
  </div>
</footer>
    </div>
  );
}

export default App;
