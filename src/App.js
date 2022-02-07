import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TableShow from './components/TableShow';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee'
import Login from './components/Login';
import Registration from './components/Registration';
import {  Container, Nav, Navbar, Table } from 'react-bootstrap';
import { useState } from 'react';
import { ContextProvider } from './context/context';


function App() {
  const[storeData,setStoreData]=useState([])
  const [showEditModal,setEditModal]=useState(false)
  return (
   
      <Router>
      <div className='App'>
        <Navbar className='navbar navbar-expand-lg navbar-primary bg-dark'>
          <Container>
            <Navbar.Brand style={{color:'white'}}>EMS </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/tableshow">Employees</Link>
                <Link to="/add-employee" style={{marginLeft:'15px'}}>Add Employee</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
        <ContextProvider value={{storeData,setStoreData,showEditModal,setEditModal}}>
            <Route exact={true} path="/" component={Home} />
            <Route path="/table" component={TableShow} />
            <Route path="/add-employee" component={AddEmployee} />
            </ContextProvider>
        </div>
      </div>
    </Router>
   


  );
}

export default App;