import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';
import Table from '../../../../components/Table';

function ServiceTable({ services, ...rest }) {
  return (
    <Table noResults={!services.length}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Foto</th>
          <th>Nome cliente</th>
          <th>Tipo evento</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr>
            <td>{service.id}</td>
            <td>
              <main>
                <img
                  src={
                    service.client.avatar?.url ||
                    'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
                  }
                  alt={service.client.name}
                />
              </main>
            </td>
            <td>{service.client.name}</td>
            <td>{service.event_type}</td>
            <td>{service.start_event_formatted}</td>
            <td>
              <Actions service={service} {...rest} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ServiceTable;

ServiceTable.propTypes = {
  services: PropTypes.arrayOf(Object).isRequired,
};
