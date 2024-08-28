import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Gigabyte Technology X58-USB3 (Sockel 1366) 6 X58-USB3', status: 'свободен', startDate: '06 / 04 / 2017', endDate: '06 / 08 / 2025', price: '250 000. 50', group: 'Длинное предлинное длиннючее название группы', order: 'Длинное предлинное длиннючее название прихода' },
    { id: 2, name: 'Gigabyte Technology X58-USB3 (Sockel 1366) 6 X58-USB3', status: 'В ремонте', startDate: '06 / 04 / 2017', endDate: '06 / 08 / 2025', price: '250 000. 50', group: 'Длинное предлинное длиннючее название группы', order: 'Длинное предлинное длиннючее название прихода' },
    { id: 3, name: 'Gigabyte Technology X58-USB3 (Sockel 1366) 6 X58-USB3', status: 'свободен', startDate: '06 / 04 / 2017', endDate: '06 / 08 / 2025', price: '250 000. 50', group: 'Христорождественский Александр', order: 'Длинное предлинное длиннючее название прихода' },
    { id: 4, name: 'Gigabyte Technology X58-USB3 (Sockel 1366) 6 X58-USB3', status: 'В ремонте', startDate: '06 / 04 / 2017', endDate: '06 / 08 / 2025', price: '250 000. 50', group: 'Длинное предлинное длиннючее название группы', order: 'Длинное предлинное длиннючее название прихода' },
  ]);

  return (
    <Container fluid className="mt-3">
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Продукты / {products.length}</h2>
        </Col>
        <Col xs="auto">
          <Form.Select>
            <option>Тип: Moni i</option>
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Form.Select>
            <option>Спецификация: Moni i</option>
          </Form.Select>
        </Col>
      </Row>
      {products.map((product) => (
        <Card key={product.id} className="mb-3">
          <Card.Body>
            <Row>
              <Col xs={1}>
                <i className="bi bi-display"></i>
              </Col>
              <Col xs={3}>
                <h5>{product.name}</h5>
                <p>SN:12 3456789</p>
              </Col>
              <Col xs={1}>
                <span className={`badge ${product.status === 'свободен' ? 'bg-success' : 'bg-warning'}`}>
                  {product.status}
                </span>
              </Col>
              <Col xs={2}>
                <p>с {product.startDate}</p>
                <p>по {product.endDate}</p>
              </Col>
              <Col xs={1}>{product.price} uan</Col>
              <Col xs={2}>{product.group}</Col>
              <Col xs={2}>{product.order}</Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ProductsPage;