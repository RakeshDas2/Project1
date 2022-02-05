
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import Home from './components/Home';
import Table from './components/Table';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar bg="light" expand="xxl">
          <Container>
            <Navbar.Brand>EMS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/table">Employees</Link>
                <Link to="/add-employee">Add Employee</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route exact={true} path="/" component={Home} />
            <Route path="/table" component={Table} />
            <Route path="/add-employee" component={AddEmployee} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
