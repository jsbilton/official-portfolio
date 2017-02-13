const React = require('react')

const Language = React.createClass({
  render() {
    return (
      <div>
        <section className="vh-100 bg-washed-blue baskerville">
        <header className="tc ph5 lh-copy">
          <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
          <h2 className="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
        </header>
        <p className="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
        <ul className="list tc pl0 w-100 mt5">
          <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/">Home</a></li>
          <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/about">About</a></li>
          <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/resume">Resume</a></li>
          <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/projects">Projects</a></li>
          <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/interests">Interests Up</a></li>
          <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/contact">Contact</a></li>
        </ul>
      </section>
     </div>
   )
 }
})

module.exports = Language
