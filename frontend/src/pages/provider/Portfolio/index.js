import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Upload from '../../../components/Upload';
import FileList from '../../../components/FileList';

import { Container } from './styles';

import api from '../../../services/api';

function Portfolio() {
  const profile = useSelector((state) => state.user.profile);
  const formRef = useRef(null);
  const [portfolio, setPortfolio] = useState({});
  const [files, setFiles] = useState([]);

  async function loadPortfolio() {
    const response = await api.get(`/portfolios/${profile.id}`);

    setPortfolio(response.data);
    setFiles(response.data.album.files);
  }

  useEffect(() => {
    loadPortfolio();
    // eslint-disable-next-line
  }, []);

  async function submitFile(images) {
    const promises = images.map(async (file) => {
      const data = new FormData();
      data.append('file', file);
      data.append('album_id', portfolio.album.id);

      const newFile = await api.post('files', data);
      setFiles([...files, newFile.data]);
    });

    await Promise.all(promises);
  }

  async function removeFile(outFile) {
    await api.delete(`/files/${outFile.id}`);

    const newFiles = files.filter((file) => file !== outFile);

    setFiles(newFiles);
  }

  async function handleSubmit({ event_type, description }) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        event_type: Yup.string().required('O Tipo do evento é obrigatório'),
        description: Yup.string().required('A descricão é obrigatória'),
      });

      await schema.validate({ event_type, description }, { abortEarly: false });

      await api.put(`/portfolios/${portfolio.id}`, { event_type, description });

      toast.success('Portfolio Atualizado com sucesso');
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
      <Form ref={formRef} onSubmit={handleSubmit} initialData={portfolio}>
        <h1>Portfolio</h1>
        <Input name="event_type" type="text" placeholder="Tipo de Evento" />
        <TextArea
          name="description"
          type="text"
          placeholder="Descricao"
          rows="5"
        />

        <Upload onUpload={submitFile} />
        {!!files.length && <FileList files={files} removeFile={removeFile} />}

        <button type="submit">Atualizar Portfolio</button>
      </Form>
    </Container>
  );
}

export default Portfolio;
