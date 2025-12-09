import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import data from './data.js';



function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
    
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
            <button className='btn btn-primary'>주문하기</button>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
            <button className='btn btn-primary'>주문하기</button>
          </div>
          <div className='col-md-4'>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>상품명</h4>  
            <p>상품설명</p>
            <button className='btn btn-primary'>주문하기</button>
          </div>
        </div>
      </div>

    </div>
  );  
}

export default App
