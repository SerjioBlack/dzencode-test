import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../redux/ordersSlice';
import OrderDetails from './OrderDetails';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();

  const handleOrderClick = (order) => {
    setSelectedOrder(order.id === selectedOrder?.id ? null : order);
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm('Вы уверены, что хотите удалить этот приход?')) {
      dispatch(deleteOrder(orderId));
      setSelectedOrder(null);
    }
  };

  return (
    <div className="orders">
      <h2>Приходы / {orders.length}</h2>
      {orders.map(order => (
        <div key={order.id} className="order-item">
          <div onClick={() => handleOrderClick(order)}>
            <h3>{order.name}</h3>
            <p>Продуктов: {order.products.length}</p>
            <p>Создан: {new Date(order.createdAt).toLocaleString()}</p>
            <p>Сумма: {order.totalAmount} UAH / {order.totalAmount / 27} USD</p>
          </div>
          <button onClick={() => handleDeleteOrder(order.id)}>Удалить</button>
        </div>
      ))}
      {selectedOrder && <OrderDetails order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </div>
  );
};

export default Orders;