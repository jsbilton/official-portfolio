const React = require('react')
const { BrowserRouter, Link, Match} = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Resume = require('./pages/resume')
const Projects = require('./pages/projects')
const Interests = require('./pages/interests')
const Contact = require('./pages/contact')
const Privacy = require('./pages/privacy.js')
const Language = require('./pages/language.js')
const Terms = require('./pages/terms.js')


const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
          <div id="app">
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/about" component={About} />
            <Match pattern="/resume" component={Resume} />
            <Match pattern="/projects" component={Projects} />
            <Match pattern="/interests" component={Interests} />
            <Match pattern="/contact" component={Contact} />
            <Match pattern="/privacy" component={Privacy} />
            <Match pattern="/language" component={Language} />
            <Match pattern="/terms" component={Terms} />


          </div>
        </BrowserRouter>
    )
  }
})
module.exports = App
