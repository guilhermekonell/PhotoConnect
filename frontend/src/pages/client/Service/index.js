/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import api from '../../../services/api';

function Service() {
  const [portfolios, setPortfolios] = useState([]);

  async function loadPortfolios() {
    const response = await api.get('/portfolios');

    setPortfolios(response.data);
  }

  useEffect(() => {
    loadPortfolios();
  }, []);

  return <Container />;
}

export default Service;
