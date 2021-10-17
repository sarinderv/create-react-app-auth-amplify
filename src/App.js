import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import Files from './components/Files'
import Admin from './components/Admin'

Amplify.configure(aws_exports);

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Files</Nav.Link>
              <Nav.Link href="/Admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Files}></Route>
            <Route path="/admin" component={Admin}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default withAuthenticator(App);
