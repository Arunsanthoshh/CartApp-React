import Container from 'react-bootstrap/Container';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Products } from './products';
import { Orders } from './orders';
import { Cart } from './cart';
import { DynamicProduct } from './dynamicProduct';

function App() {
  const NavbarBrandStyle = {
    color: '#0047AB',
    fontSize: '1.5em'
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand style={NavbarBrandStyle} href="#home">CapgeminiCart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/pricing">Orders</Nav.Link>
              <Nav.Link href="/cart">Your Cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <section>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/newProduct" element={<DynamicProduct />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
