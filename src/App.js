import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Mizaru from './klipartz1.png'
import Kikazaru from './klipartz2.png'
import Iwazaru from './klipartz3.png'

function App() {
  return (
    <div className="App">
     {/*Navbar*/}
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Empty link 1</Nav.Link>
            <Nav.Link href="#action2">Empty link 2</Nav.Link>
            <NavDropdown title="DropDown menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pretend to search something but there's nothing to find here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/*The Heading*/}
    <h1>
    The three wise monkeys
    </h1>
  
    {/*3 cards inline*/}

    <div className='Cards'>
    <Card border="warning" data-bs-theme="dark" className='Card'>
      <Card.Img variant="top" src={Mizaru} />
      <Card.Body>
        <Card.Title>Mizaru <br/> (見ざる) </Card.Title>
        <Card.Text>
        who sees no evil, covering his eyes.
        </Card.Text>
        <Button variant="light">Buy Sunglasses</Button>
      </Card.Body>
    </Card>
    <Card border="info" data-bs-theme="dark" className='Card'>
      <Card.Img variant="top" src={Kikazaru} />
      <Card.Body>
        <Card.Title>Kikazaru <br/> (聞かざる)</Card.Title>
        <Card.Text>
        who hears no evil, covering his ears
        </Card.Text>
        <Button variant="light">Buy Headphones</Button>
      </Card.Body>
    </Card>
    <Card border="danger" data-bs-theme="dark" className='Card' >
      <Card.Img variant="top" src={Iwazaru} />
      <Card.Body>
        <Card.Title>Iwazaru <br/> (言わざる)</Card.Title>
        <Card.Text>
        who speaks no evil, covering his mouth
        </Card.Text>
        <Button variant="light">Get Lipfillers</Button>
      </Card.Body>
    </Card>
 

    </div>
    
    {/*Quote card*/}

    <Card  bg="dark" data-bs-theme="dark" >
      <Card.Header>Quote of the day</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            « Mieux vaut tard que jamais »{' '}
          </p>
          <footer className="blockquote-footer">
          Grandville, Cent Proverbes, 1845 <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

    <br/>
   

    </div>
  );
}

export default App;
