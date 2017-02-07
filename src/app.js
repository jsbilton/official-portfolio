const React = require('react')
const { BrowserRouter, Link, Match} = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Resume = require('./pages/resume')
const Projects = require('./pages/projects')
const Interests = require('./pages/interests')
const Contact = require('./pages/contact')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            |
            <Link to="/about">About</Link>
            |
            <Link to="/resume">Resume</Link>
            |
            <Link to="/projects">Projects</Link>
            |
            <Link to="/interests">Interests</Link>
            |
            <Link to="/contact">Contact</Link>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/about" component={About} />
            <Match pattern="/resume" component={Resume} />
            <Match pattern="/projects" component={Projects} />
            <Match pattern="/interests" component={Interests} />
            <Match pattern="/contact" component={Contact} />
          </div>
        </BrowserRouter>
    )
  }
})
module.exports = App
