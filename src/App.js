import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import { Router, Route, browserHistory,hashHistory IndexRoute } from 'react-router'

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

let history = process.env.NODE_ENV === "production" ? browserHistory : hashHistory;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'nicholas coursel-stoll',
      headerLinks: [
        { title: 'home', path: '/' },
        { title: 'about', path: '/about' },
        { title: 'projects', path: '/projects' },
      ],
      home: {
        title: 'nicholas coursel-stoll',
        subTitle: 'software engineer, writer',
        text: '',
      },
      about: {
        title: 'about me',
      },
      projects: {
        title: 'selected projects',
        subTitle: 'snippets of my work, personal and professional',
      },
      contact: {
        title: 'get in touch',
      }
    }
  }

  render() {
    return (
      <Router history={history}>
        <Container className="p-1 flex-wrapper" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>nicholas coursel-stoll | swe </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">home</Link>
              <Link className="nav-link" to="/about">about</Link>
              <Link className="nav-link" to="/projects">projects</Link>
              <Link className="nav-link" to="/contact">contact</Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
            <Route path="/react-deploy" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} /> } />
            <Route path="/projects" render={() => <ProjectPage title={this.state.projects.title} subTitle={this.state.projects.subTitle} /> } />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} /> } />

          <Footer />

        </Container>
      </Router>
      );
  }
}

export default App;
