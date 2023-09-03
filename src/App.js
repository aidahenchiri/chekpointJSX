import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import Name from './Compnent/Name';
import Description from './Compnent/Description';
import Url from './Compnent/Url';
import Price from './Compnent/Price';
import "./App.css";

const App = () => {
  const FirstName = prompt ("enter your name");

  return (

    <div>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">New</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Man</Nav.Link>
            <Nav.Link href="#features">Women</Nav.Link>
            </Nav>
            <Nav>

            <Nav.Link href="#pricing" eventKey={2}>{FirstName?<p> hello {FirstName} </p>  :<p></p>
  }</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     <div className="wrapper">
      <br>
      </br>
       <Card className='card'>

 <div className="card--19">

 <div className="card__header card__header--19">

 <div className="card__watermark" data-watermark="Air"></div>
 <img src="https://i.ibb.co/q7RKcZk/nike.png" alt="Nike" class="card__logo card__will-animate"/>
        <Card.Title className="card__title card__will-animate"> <Price /> </Card.Title>
        <Card.Title className="card__title card__will-animate"> <Name /> </Card.Title>

        <Card.Text className="card__subtitle card__will-animate">  <Description /> </Card.Text>
        <Url   className="card__image card__will-animate"/>

        </div>
        <Card.Body className="card__body">
      
        <div className="card__wish-list card__wish-list--19 card__will-animate">Wish List</div>
        <span className="card__category card__will-animate">Men's running shoe</span>
  
      
      </Card.Body>
      </div>     
      </Card>
<br></br>
<div  className='photo'>
  {FirstName?<p> <img src="https://images.vexels.com/media/users/3/250018/isolated/preview/cca64ce43bdf0738ff9881e79ff2a40b-hello-lettering-label.png" alt="nike"/> </p> :<p></p>  }
</div>
</div>

</div>

  )
}

export default App