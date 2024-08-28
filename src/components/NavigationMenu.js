import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <Link to="/orders">Приходы</Link>
      <Link to="/products">Продукты</Link>
    </nav>
  );
};

export default NavigationMenu;