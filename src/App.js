
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TableShow from './components/TableShow';

import Login from './components/Login';
import Registration from './components/Registration';
import { Container, Nav, Navbar, Table } from 'react-bootstrap';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee'



function App() {
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
    
            <Route exact={true} path="/" component={Home} />
            <Route path="/tableshow" component={TableShow} />
            <Route path="/add-employee" component={AddEmployee} />
        
        </div>
      </div>
    </Router>

  );
}

export default App;
