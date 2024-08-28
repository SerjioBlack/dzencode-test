import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">INVENTORY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/orders">Приходы</Nav.Link>
                <Nav.Link as={Link} to="/products">Продукты</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;