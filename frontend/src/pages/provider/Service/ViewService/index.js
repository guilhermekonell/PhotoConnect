import React from 'react';
import PropTypes from 'prop-types';

import FileList from '../../../../components/FileList';

import {
  Container,
  Info,
  ServiceInfo,
  Content,
  ContentFiles,
  NoResults,
} from './styles';

function ViewService({ location }) {
  const { service } = location.state;

  return (
    <Container>
      <h1>Visualizar Serviço</h1>
      <Content>
        {service.album?.files ? (
          <ContentFiles>
            <FileList files={service.album.files} />
          </ContentFiles>
        ) : (
          <NoResults>
            <strong>Ainda não há fotos para mostrar</strong>
          </NoResults>
        )}

        <ServiceInfo>
          <Info>
            <strong>Solicitante</strong>
            <img
              src={
                service.client.avatar?.url ||
                'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
              }
              alt={service.client.name}
            />
            <span>
              <strong>Nome: </strong>
              {service.client.name}
            </span>
            <span>
              <strong>Email: </strong>
              {service.client.email}
            </span>
            <span>
              <strong>Telefone: </strong>
              {service.client.phone_number}
            </span>
          </Info>
          <Info>
            <strong>Evento</strong>
            <span>
              <strong>Tipo de evento: </strong>
              {service.event_type}
            </span>
            <span>
              <strong>Descrição: </strong>
              {service.description}
            </span>
            <strong>Data</strong>
            <span>
              <strong>Início: </strong>
              {service.start_event_formatted}
            </span>
            <span>
              <strong>Fim: </strong>
              {service.end_event_formatted}
            </span>
            <strong>Local</strong>
            <span>
              <strong>Rua: </strong>
              {`${service.street} - nº ${service.street_number}`}
            </span>
            <span>
              <strong>Bairro: </strong>
              {service.neighborhood}
            </span>
            <span>
              <strong>Cidade: </strong>
              {`${service.city} - ${service.state}`}
            </span>
          </Info>
        </ServiceInfo>
      </Content>
    </Container>
  );
}

export default ViewService;

ViewService.propTypes = {
  location: PropTypes.element.isRequired,
};
