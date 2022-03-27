import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

<nav class="navbar is-link is-fixed-top">
  <div class="navbar-brand">
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-end">
      <a class="navbar-item" href="#about">
        <span class="icon">
          <i class="fas fa-info"></i>
        </span>
        <span>About</span>
      </a>
      <a class="navbar-item" href="#services">
        <span class="icon">
          <i class="fas fa-bars"></i>
        </span>
        <span>Services</span>
      </a>
      <a class="navbar-item" href="#resume">
        <span class="icon">
          <i class="fas fa-file-alt"></i>
        </span>
        <span>Resume</span>
      </a>
      <a class="navbar-item" href="#portfolio">
        <span class="icon">
          <i class="fas fa-th-list"></i>
        </span>
        <span>Portfolio</span>
      </a>
      <a class="navbar-item" href="#contact">
        <span class="icon">
          <i class="fas fa-envelope"></i>
        </span>
        <span>Contact</span>
      </a>
    </div>
  </div>
</nav>


<section class="hero is-link is-fullheight is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="container">Hello! My name is
      <h1 class="title is-1 bold">
        Michael Rogers
      </h1>
      <h2 class="subtitle is-3">
        I'm a <b>full stack web developer</b>. I mostly focus on the <b>back-end</b> of the web and specialized to make fun and interactive digital experiencs
      </h2>
    </div>
  </div>
</section>


<section class="section" id="about">

  <div class="section-heading">
    <h3 class="title is-2 bold">About Me</h3>
    <h4 class="subtitle is-5">Jack of all trades, master of "some"</h4>
    <div class="container">
      <p>Web developer with more than <strong>4 years</strong> of well-rounded experience.
        Looking for an opportunity to work and upgrade, as well as being involved in an organization that
        believes
        in gaining a competitive edge and giving back to the community.</p>
    </div>
  </div>

  <div class="columns has-same-height is-gapless aboutcolumns">
    <div class="column">

      <div class="card">
        <div class="card-content">
          <h3 class="title is-4">Profile</h3>

          <div class="content">
            <table class="table-profile">
              <tr>
                <th colspan="1"></th>
                <th colspan="2"></th>
              </tr>
              <tr>
                <td>Address:</td>
                <td>Guru's Lab</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>0123-456789</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>michael_ro48@yahoo.com</td>
              </tr>
            </table>
          </div>
          <br></br>
          <div class="buttons has-addons is-centered">
            <a href="https://github.com/MichaelRogerss" class="button is-link" target="_blank" >Github</a>
            <a href="https://stackoverflow.com/users/18572887/michael-rogers" class="button is-link" target="_blank">Stackoverflow</a>
            <a href="https://www.linkedin.com/in/michael-rogers-77484b216/" class="button is-link" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/9to5disappear" class="button is-link" target="_blank">Twitter</a>
            <a href="#" class="button is-link" target="_blank">CodeTrace</a>
          </div>
        </div>
      </div>
    </div>

    <div class="column">

      <div class="card">
        <div class="card-content skills-content">
          <h3 class="title is-4">Skills</h3>
          <div class="content">

            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>JavaScript:</strong>
                    <br></br>
                    <progress class="progress is-primary" value="90" max="100"></progress>
                  </p>
                </div>
              </div>
            </article>

            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Vue.js:</strong>
                    <br></br>
                    <progress class="progress is-primary" value="90" max="100"></progress>
                  </p>
                </div>
              </div>
            </article>

            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Node.js:</strong>
                    <br></br>
                    <progress class="progress is-primary" value="75" max="100"></progress>
                  </p>
                </div>
              </div>
            </article>

            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>HTML5/CSS3</strong>
                    <br></br>
                    <progress class="progress is-primary" value="95" max="100"></progress>
                  </p>
                </div>
              </div>
            </article>

            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Databases</strong>
                    <br></br>
                    <progress class="progress is-primary" value="66" max="100"></progress>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


 <br></br>
      <div class="tags custom-tags">
        <span class="tag is-light">Node.js</span><span class="tag is-light">Express.js</span><span class="tag is-light">VueJS</span><span
          class="tag is-light">JavaScript</span><span class="tag is-light">HTML5</span><span class="tag is-light">Canvas</span><span
          class="tag is-light">CSS3</span><span class="tag is-light">Bulma</span><span class="tag is-light">Bootstrap</span><span
          class="tag is-light">jQuery</span><span class="tag is-light">Pug</span><span class="tag is-light">Stylus</span><span
          class="tag is-light">SASS/SCSS</span><span class="tag is-light">Webpack</span><span class="tag is-light">Git</span><span
          class="tag is-light">ASP.NET Web Forms</span><span class="tag is-light">MSSQL</span><span class="tag is-light">MongoDB</span><span
          class="tag is-light">Apache Cordova</span><span class="tag is-light">Chrome Extensions</span>
      </div>


<section class="section" id="services">
  <div class="section-heading">
    <h3 class="title is-2">Services</h3>
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
    <h3 class="title is-2">Resume</h3>
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
      <h3 class="title is-2">Portfolio</h3>
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
                <span>Cards</span>
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
                <img src="../images/cards.png" alt="Cards template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/cards.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cards.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Forum</span>
                <span class="is-pulled-right">
                  <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                    <span class="tag is-default">v0.7.2</span>
                  </a>
                  <span class="tag is-default">Desktop</span>
                  <span class="tag is-default">Mobile</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image">
                <img src="../images/forum.png" alt="Hero template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/forum.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/forum.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>InstaAlbum</span>
                <span class="is-pulled-right">
                  <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                    <span class="tag is-default">v0.7.2</span>
                  </a>
                  <span class="tag is-default">Desktop</span>
                  <span class="tag is-default">Mobile</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image">
                <img src="../images/instaalbum.png" alt="Landing template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/instaAlbum.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Landing</span>
                <span class="is-pulled-right">
                  <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                    <span class="tag is-default">v0.7.2</span>
                  </a>
                  <span class="tag is-default">Desktop</span>
                  <span class="tag is-default">Mobile</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image">
                <img src="../images/landing.png" alt="Landing template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/landing.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

        </div>
        <div class="column is-4">

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Band</span>
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
                <img src="../images/band.png" alt="Band template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/band.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/band.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Cheatsheet</span>
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
                <img src="https://dummyimage.com/555x255/000/fff" alt="Cheatsheet template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/cheatsheet.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cheatsheet.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Hero</span>
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
                <img src="../images/hero.png" alt="Hero template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/hero.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>
>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Kanban</span>
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
                <img src="../images/kanban.png" alt="Kanban template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/kanban.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Login</span>
                <span class="is-pulled-right">
                  <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                    <span class="tag is-default">v0.7.2</span>
                  </a>
                  <span class="tag is-default">Desktop</span>
                  <span class="tag is-default">Mobile</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image">
                <img src="../images/login.png" alt="Login template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/login.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/login.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>
        </div>
        <div class="column is-4">

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Blog</span>
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
                <img src="../images/blog.png" alt="Blog template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/blog.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Cover</span>
                <span class="is-pulled-right">
                  <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                    <span class="tag is-default">v0.7.2</span>
                  </a>
                  <span class="tag is-default">Desktop</span>
                  <span class="tag is-default">Mobile</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image">
                <img src="../images/cover.png" alt="Cover template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/cover.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cover.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Inbox</span>
                <span class="is-pulled-right">
                  <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                    <span class="tag is-default">v0.7.2</span>
                  </a>
                  <span class="tag is-default">Desktop</span>
                  <span class="tag is-default">Mobile</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image">
                <img src="../images/inbox.png" alt="Inbox template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/inbox.html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/inbox.html" class="card-footer-item">Source
                Code</a>
            </footer>
          </div>

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <span>Kanban with Search box</span>
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
                <img src="../images/kanban2.png" alt="Kanban template screenshot"></img>
              </figure>
            </div>
            <footer class="card-footer">
              <a href="templates/kanban[search].html" class="card-footer-item">Preview</a>
              <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban[search].html" class="card-footer-item">Source
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


 <section class="section">
  <nav class="level">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Tweets</p>
        <p class="title">3,456</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Following</p>
        <p class="title">123</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Followers</p>
        <p class="title">456K</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Likes</p>
        <p class="title">789</p>
      </div>
    </div>
  </nav>
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
    <p>
      <strong>Bulma Personal Template</strong> by <a href="https://mubaidr.js.org">Muhammad Ubaid Raza</a>. The
      source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </p>
  </div>
</footer>
    </div>
  );
}

export default App;
