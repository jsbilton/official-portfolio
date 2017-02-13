const React = require('react')
const { Link } = require('react-router')
const Resume = React.createClass({
  render() {
    return (
      <div id="resume">
        <h1>Resume</h1>
        <div className="objective">
          <h2>Objective</h2>
          <p>Having a career in advertising and media, with solid software development training, I feel I bring a unique mix of skills and perspective to any position that requires the ability to solve problems with software and communicate effectively</p>
        </div>
        <div className="skills">
          <h2>Skills & Tools</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Express</li>
            <li>Node</li>
            <li>CouchDB</li>
            <li>PouchDB</li>
            <li>Cloudant</li>
            <li>MySQL</li>
            <li>Angular</li>
            <li>Backbone</li>
            <li>jQuery</li>
            <li>Ionic</li>
            <li>CSS</li>
            <li>RESTful API</li>
            <li>Atom</li>
            <li>NPM</li>
            <li>Github</li>
            <li>Command Line</li>
            <li>Apple/Mac OS</li>
            <li>Docker</li>
            <li>Workbench</li>
            <li>Postman</li>
            <li>Underscore</li>
            <li>Ramda</li>
            <li>Now</li>
            <li>Surge</li>
            <li>Agile/Scrum</li>
          </ul>
        </div>
        <div className="experience">
          <h2>Experience</h2>
            <h3>Bilton Outdoor Advertising, St. George, SC – Owner/Operator</h3>
            <date>April 2016 – Present</date>
            <p>Oversee operations, maintain accounts and generate new clients</p>

            <h3>Festiva Development Group, Charleston, SC – Sales Representative</h3>
            <date>April 2014 – October 2015</date>
            <p>Strategically reviewed potential client’s information and customized a specific presentation to provide solutions for their travel needs</p>

            <h3>EUE/Screen Gems Studios, Charleston, SC – Manager</h3>
            <date>Oct 2007 - March 2013</date>
            <p>Serviced clients on a day-to-day basis as well as helped them to identify services and products needed to achieve desired objectives</p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>JRS Coding School, Mt. Pleasant, SC – Graduate
            <date>Sept 2016 - Dec 2016</date>
            <p>
            Full-Stack JavaScript course building applications leveraging technologies such as: React, Express, Node, noSQL and MySQL</p></li>
            <li>The Iron Yard, Charleston, SC – Graduate
            <date>Oct 2015 - Jan 2016</date>
            <p>
            Front-End architecture course utilizing JavaScript and MVC frameworks: Angular, Backbone and jQuery.</p></li>
            <li>College of Charleston, Charleston, SC - Graduate
            <date>Aug 2001 - May 2004</date>
            <p>
            Graduated with a BA in Corporate Communications</p></li>
          </ul>
        </div>
        <div className="projects">
          <Link to="/projects">Projects</Link>
          <h3>MishMash</h3>
          <time>December 2016</time>
            <p>A progressive web application taking the hassle out of deciding where to have lunch with friends.</p>
            <p>Technologies utilized: React, Express, Node & Cloudant</p>
        </div>
      </div>

    )
  }
})
module.exports = Resume
