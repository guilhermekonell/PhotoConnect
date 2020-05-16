import React from 'react';
import api from '../../services/api';

// import { Container } from './styles';

function Dashboard() {
  api.get('/portfolios');
  return <h1>Dashboard</h1>;
}

export default Dashboard;
