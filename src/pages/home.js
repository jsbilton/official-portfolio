const React = require('react')
const { Link } = require('react-router')


const Home = React.createClass({
  render() {
    return (
      <div className="navbar">

          <header className="bg-white black-80 tc pv4 avenir">
            <div class="pa4 tc">
              <img
                  src="../../JaredBiltonProfile.jpg"
                  class="br4 h3 w3 dib" alt="avatar" />
            </div>
            <h1 className="mt2 mb0 fw1 f1">Jared Bilton</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked">Full-Stack JavaScript Developer</h2>
            <nav className="bt bb tc mw7 center mt4">
              <Link to="/" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">Home</Link>
              |
              <Link to="/about" className="f6 f5-l link bg-animate black-80 hover-bg-moon-gray dib pa3 ph4-l">About</Link>
              |
              <Link to="/resume" className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">Resume</Link>
              |
              <Link to="/projects" className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">Projects</Link>
              |
              <Link to="/interests" className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l">Interests</Link>
              |
              <Link to="/contact" className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l">Contact</Link>
            </nav>
          </header>

          <article className="helvetica pb5">
              <header className="vh-100 bg-light-pink dt w-100">
                <div style={{background: 'url(http://m2.22slides.com/zcollinsphotography/charleston-ravenel-bridge-photozak-collins-1082192.png) no-repeat center right', backgroundSize: 'cover'}} className="dtc v-mid cover ph3 ph4-m ph5-l">
                  <h1 className="f2 white-90 f-subheadline-l measure lh-title fw9">Allow myself to introduce myself</h1>
                  <h2 className="f6 fw6 white-90">The story of Jared Bilton</h2>
                </div>
              </header>
              <div className="serif ph3 ph4-m ph5-l">
                <p className="lh-copy f5 f3-m f1-l measure center pv4">
                  Born <time>October 13, 1980</time>, in the Lowcountry of South Carolina.</p>
                <div className="f5 f3-m lh-copy">
                  <div className="cf dt-l w-100 bt b--black-10 pv4">
                    <div className="dtc-l v-mid mw6 pr3-l">
                      <img className="w-100" src="http://mrmrs.io/photos/009.jpg" alt />
                    </div>
                    <div className="dtc-l v-mid f6 f5-m f4-l measure-l">
                      <p className="measure pv4-l center">
                        <span className="fw9 fw4-ns">
                        Before I made the move into development,</span>  I spent time as a salesman and even prior to that I was working in the motion picture industry. Currently, I am operating a small outdoor advertising business started by my father in 1985. No matter where I have been, I enjoy being challenged and am up to any task of complex problem solving. I have always valued those who I have worked for and worked with and look forward to the opportunity to work closely with a tight-knit and passionate team. I want to learn as much as possible by working with talented developers.
                      </p>
                    </div>
                  </div>
                  <div className="cf dn">
                    <div className="fl w-100 w-50-l">
                      <p className="f5 pv4">
                        During high tides, water would flow directly into the pools from the
                        nearby ocean, recycling the <span className="db f4 f3-m f1-l fw6 measure lh-title">two million US gallons of water in about an hour. </span>
                      </p>
                    </div>
                    <div className="fl w-100 w-50-l">
                      <p className="f5">
                        During low tides, a powerful turbine water pump,
                        built inside a cave at sea level, could be switched on from a control
                        room and could fill the tanks at a rate of 6,000 US gallons a minute,
                        recycling all the water in five hours.
                      </p>
                    </div>
                  </div>
                  <div className="cf">
                    <div className="fl w-100 w-50-l pr2-l pb3">
                      <img className="db w-100" src="http://mrmrs.io/photos/010.jpg" alt="Photo of a dusk skyline above a grassy rockface covered in trees." />
                    </div>
                    <div className="fl w-50 w-50-l pr1 pr0-l pl2-l pb3">
                      <img className="db w-100" src="http://mrmrs.io/photos/011.jpg" alt="Photo of the sea and sky on the horizon with the foundations of a demolished house." />
                    </div>
                    <div className="fl w-50 w-50-l pl2 pl0-l pr2-l pb3">
                      <img className="db w-100" src="http://mrmrs.io/photos/012.jpg" alt="Photo of the sea with mist covering the rocky formations near the shore." />
                    </div>
                    <div className="fl w-100 w-50-l pl2-l">
                      <img className="db w-100" src="http://mrmrs.io/photos/013.jpg" alt="Photo of the foundations of a building on a cliff overlooking a lighthouse." />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <footer className="ph3 ph4-ns pv6 bt b--black-10 black-70">
              <a href="mailto:" className="link b f3 f2-ns dim black-70 lh-solid">jsbilton@gmail.com</a>
              <p className="f6 db b ttu lh-solid">© 2017</p>
              <div className="mt5">
                <a href="/language/" title="Language" className="f6 dib pr2 mid-gray dim">Language</a>
                <a href="/terms/" title="Terms" className="f6 dib ph2 mid-gray dim">Terms of Use</a>
                <a href="/privacy/" title="Privacy" className="f6 dib pl2 mid-gray dim">Privacy</a>
              </div>
            </footer>



      </div>
    )
  }
})

module.exports = Home
