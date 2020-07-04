import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import ServiceTable from './ServiceTable';

import { Container } from './styles';

import api from '../../../services/api';

function Service() {
  const [requesteds, setRequesteds] = useState([]);
  const [pendings, setPendings] = useState([]);
  const [completeds, setCompleteds] = useState([]);

  function formatDates(response) {
    function formatDate(service) {
      return {
        ...service,
        start_event_formatted: service.start_event
          ? format(parseISO(service.start_event), 'hh:MM dd/MM/yyyy', {
              locale: pt,
            })
          : null,
        end_event_formatted: service.end_event
          ? format(parseISO(service.end_event), 'hh:MM dd/MM/yyyy', {
              locale: pt,
            })
          : null,
      };
    }

    const requested = response.data.requested.map((service) =>
      formatDate(service)
    );

    const pending = response.data.pending.map((service) => formatDate(service));

    const completed = response.data.completed.map((service) =>
      formatDate(service)
    );

    return { requested, pending, completed };
  }

  async function loadServices() {
    const response = await api.get('/services/provider');

    const data = formatDates(response);

    setRequesteds(data.requested);
    setPendings(data.pending);
    setCompleteds(data.completed);
  }

  useEffect(() => {
    loadServices();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h1>Solicitações</h1>
      <ServiceTable services={requesteds} solicitations />
      <h1>Pendentes</h1>
      <ServiceTable services={pendings} pendings />
      <h1>Concluídos</h1>
      <ServiceTable services={completeds} completeds />
    </Container>
  );
}

export default Service;
