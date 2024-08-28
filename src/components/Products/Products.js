import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const [selectedType, setSelectedType] = useState('');
  const products = useSelector(state => state.products);
  const productTypes = [...new Set(products.map(p => p.type))];

  const filteredProducts = selectedType
    ? products.filter(p => p.type === selectedType)
    : products;

  return (
    <div className="products">
      <h2>Продукты / {filteredProducts.length}</h2>
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Все типы</option>
        {productTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      {filteredProducts.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Тип: {product.type}</p>
          <p>Гарантия: {new Date(product.guaranteeStart).toLocaleDateString()} - {new Date(product.guaranteeEnd).toLocaleDateString()}</p>
          <p>Цена: {product.price} UAH / {product.price / 27} USD</p>
          <p>Приход: {product.order.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;