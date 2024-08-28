import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const TopMenu = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const socket = io('http://localhost:3000'); // Replace with your server URL

    socket.on('activeSessions', (count) => {
      setActiveSessions(count);
    });

    return () => {
      clearInterval(timer);
      socket.disconnect();
    };
  }, []);

  const formatDate = (date) => {
    return date.toLocaleString('ru-RU', {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="top-menu">
      <div className="date-time">{formatDate(currentTime)}</div>
      <div className="active-sessions">Активные сессии: {activeSessions}</div>
    </div>
  );
};

export default TopMenu;