import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput';
import InputMask from './InputMask';

import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereco de e-mail" />

        <hr />

        <span>Endereco:</span>

        <Input name="street" placeholder="Rua" />
        <Input name="street_number" placeholder="Número" />
        <Input name="complement" placeholder="Complemento" />
        <Input name="neighborhood" placeholder="Bairro" />
        <Input name="city" placeholder="Cidade" />
        <Input name="state" placeholder="Estado" />
        <Input name="zip_code" placeholder="CEP" />
        <InputMask
          name="phone_number"
          mask="(99) 9 9999-9999"
          placeholder="Telefone"
        />
        <hr />

        <span>Senha:</span>
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmacão de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do PhotoConnect
      </button>
    </Container>
  );
}

export default Profile;
