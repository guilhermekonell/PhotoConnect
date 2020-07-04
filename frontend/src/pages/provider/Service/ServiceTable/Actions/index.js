/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

import {
  MdCheck,
  MdDoneAll,
  MdCancel,
  MdVisibility,
  MdMoreHoriz,
  MdCameraAlt,
} from 'react-icons/md';

import api from '../../../../../services/api';
import history from '../../../../../services/history';

import { Container, Content } from './styles';

function Actions({ service, solicitations, pendings, completeds }) {
  async function approve() {
    await api.post(`/services/${service.id}/approve`);
    window.location.reload();
  }

  function conclude() {
    history.push({
      pathname: '/provider/services/conclude',
      state: { service },
    });
  }

  function view() {
    history.push({
      pathname: '/provider/services/view',
      state: { service },
    });
  }

  async function cancel() {
    await api.post(`/services/${service.id}/cancel`);
    window.location.reload();
  }

  return (
    <Container>
      <Popup
        trigger={
          <button type="button">
            <MdMoreHoriz size={22} />
          </button>
        }
        position="bottom center"
      >
        <Content>
          {!completeds ? (
            <button type="button" onClick={() => view()}>
              <MdVisibility color="#7159c1" size={22} />
              Visualizar
            </button>
          ) : (
            <></>
          )}

          {solicitations || pendings ? (
            <button
              type="button"
              onClick={() => {
                if (
                  // eslint-disable-next-line no-alert
                  window.confirm(
                    'Você tem certeza que deseja cancelar esta solicitação?'
                  )
                )
                  cancel();
              }}
            >
              <MdCancel color="#d32f2f" size={22} />
              Cancelar
            </button>
          ) : (
            <></>
          )}

          {solicitations ? (
            <button type="button" onClick={() => approve()}>
              <MdCheck color="#388e3c" size={22} />
              Aprovar
            </button>
          ) : (
            <></>
          )}

          {pendings ? (
            <button type="button" onClick={() => conclude()}>
              <MdDoneAll color="#388e3c" size={22} />
              Concluir
            </button>
          ) : (
            <></>
          )}

          {completeds ? (
            <button type="button" onClick={() => view()}>
              <MdCameraAlt color="#7159c1" size={22} />
              Visualizar
            </button>
          ) : (
            <></>
          )}
        </Content>
      </Popup>
    </Container>
  );
}

export default Actions;

Actions.propsTypes = {
  solicitations: PropTypes.bool,
  pendings: PropTypes.bool,
  completeds: PropTypes.bool,
};

Actions.defaultProps = {
  solicitations: false,
  pendings: false,
  completeds: false,
};
