import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import Upload from '../../../../components/Upload';
import FileList from '../../../../components/FileList';

import { Container, Info, ServiceInfo, Content, ContentForm } from './styles';

import api from '../../../../services/api';
import history from '../../../../services/history';

function ConcludeService({ location }) {
  const { service } = location.state;
  const formRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  function submitFile(files) {
    const filesToUpload = files.map((file) => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setUploadedFiles([...uploadedFiles, ...filesToUpload]);
  }

  function removeFile(file) {
    const files = uploadedFiles.filter((uploadedFile) => uploadedFile !== file);

    setUploadedFiles(files);
  }

  async function uploadFiles(album_id) {
    const promises = uploadedFiles.map(async (file) => {
      const data = new FormData();
      data.append('file', file.file);
      data.append('album_id', album_id);

      await api.post('files', data);
    });

    await Promise.all(promises);
  }

  async function handleSubmit() {
    if (!uploadedFiles.length) {
      toast.error('Por favor, inclua as fotos do serviço!');
      return;
    }

    const album = await api.post('/albums', {
      name: `service-${service.id}`,
    });

    const { id: album_id } = album.data;

    await uploadFiles(album_id);

    await api.post(`/services/${service.id}/conclude`, { album_id });

    history.push('/provider/services');
  }

  return (
    <Container>
      <h1>Concluir Serviço</h1>
      <Content>
        <ContentForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <span>Incluir Fotos</span>
            <Upload onUpload={submitFile} />

            {!!uploadedFiles.length && (
              <FileList files={uploadedFiles} removeFile={removeFile} />
            )}

            <button type="submit">Concluir Serviço</button>
          </Form>
        </ContentForm>
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

export default ConcludeService;

ConcludeService.propTypes = {
  location: PropTypes.element.isRequired,
};
