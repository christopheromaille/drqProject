import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { Content } from './componenets/content';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Navbar, Nav} from 'react-bootstrap';
import{BrowserRouter as Router, Switch, Route} from'react-router-dom';
import { CreateCarBrands } from './componenets/CreateCarBrands';
import { ShowCarBrands } from './componenets/ShowCarBrands';
import { Edit } from './componenets/edit';
import { Reviews } from './componenets/Reviews';


class App extends Component{
  // used youtube and previous labs(2) for this code and this link https://www.geeksforgeeks.org/how-to-change-navigation-bar-color-in-bootstrap/

  render() {
    return(
      <Router>
    <div className="App">
      {/* this is the code for my navbar */}
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Cars</Navbar.Brand>
    <Nav className="mr-auto">

      <Nav.Link href="/">Home</Nav.Link>

      <Nav.Link href="/ShowCarBrands">ShowCarBrands</Nav.Link>

      <Nav.Link href="/CreateCarBrands">Create</Nav.Link>

      <Nav.Link href="/Reviews">Reviews</Nav.Link>
      
      
    </Nav>
    </Navbar>

    <br />

    {/* //this will linnk the component from eachother and i just used a  video for this code   */}
    <Switch>
      <Route path='/' component={Content} exact/>

      <Route path='/CreateCarBrands' component={CreateCarBrands} exact/>

      <Route path='/ShowCarBrands' component={ShowCarBrands} exact/>

      <Route path='/edit/:id' component={Edit}></Route>

      <Route path='/Reviews' component={Reviews}></Route>
     
    </Switch>
     
      </div>
      </Router>
  );
}
}

export default App;
