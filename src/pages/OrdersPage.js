import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Длинное предлинное длиннючее название прихода', products: 23, date: '06 / Апр / 2017', amount: '250 000. 50' },
    { id: 2, name: 'Длинное название прихода', products: 23, date: '06 / Сен / 2017', amount: '50' },
    { id: 3, name: 'Длинное предлинное длиннючее название прихода', products: 23, date: '06 / Июн / 2017', amount: '50.25' },
    { id: 4, name: 'Длинное предлинное название прихода', products: 23, date: '06 / Фев / 2017', amount: '50.25' },
  ]);

  return (
    <Container fluid className="mt-3">
      <h2 className="text-success">
        <i className="bi bi-plus-circle"></i> Приходы / {orders.length}
      </h2>
      {orders.map((order) => (
        <Card key={order.id} className="mb-3">
          <Card.Body>
            <Row>
              <Col xs={8}>
                <h5>{order.name}</h5>
              </Col>
              <Col xs={1}>
                <i className="bi bi-list"></i> {order.products}
              </Col>
              <Col xs={2}>{order.date}</Col>
              <Col xs={1}>{order.amount} uan</Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default OrdersPage;