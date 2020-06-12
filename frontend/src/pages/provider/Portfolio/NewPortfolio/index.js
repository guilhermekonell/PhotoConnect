import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { updateProfileProvider } from '../../../../store/modules/user/actions';

import Input from '../../../../components/Input';
import TextArea from '../../../../components/TextArea';
import Upload from '../../../../components/Upload';
import FileList from '../../../../components/FileList';

import { Container } from './styles';

import api from '../../../../services/api';

function NewPortfolio() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
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

  async function handleSubmit({ event_type, description }) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        event_type: Yup.string().required('O Tipo do evento é obrigatório'),
        description: Yup.string().required('A descricão é obrigatória'),
      });

      await schema.validate({ event_type, description }, { abortEarly: false });

      const album = await api.post('/albums', {
        name: `portfolio-user-${profile.id}`,
      });

      const { id: album_id } = album.data;

      await uploadFiles(album_id);

      await api.post('/portfolios', {
        event_type,
        description,
        album_id,
      });
      dispatch(updateProfileProvider());
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = {};

        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });

        formRef.current.setErrors(errors);
      }
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastro de portfolio</h1>
        <Input name="event_type" type="text" placeholder="Tipo de Evento" />
        <TextArea
          name="description"
          type="text"
          placeholder="Descricao"
          rows="5"
        />

        <Upload onUpload={submitFile} />
        {!!uploadedFiles.length && (
          <FileList files={uploadedFiles} removeFile={removeFile} />
        )}

        <button type="submit">Cadastrar Portfolio</button>
      </Form>
    </Container>
  );
}

export default NewPortfolio;
