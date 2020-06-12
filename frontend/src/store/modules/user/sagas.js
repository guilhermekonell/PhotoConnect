import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const {
      name,
      email,
      avatar_id,
      phone_number,
      street,
      street_number,
      complement,
      state,
      city,
      neighborhood,
      zip_code,
      ...rest
    } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      phone_number,
      street,
      street_number,
      complement,
      state,
      city,
      neighborhood,
      zip_code,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export function updateProvider() {
  toast.success('O Portfolio foi cadastrado com sucesso');
  history.push('/dashboard');
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_PROFILE_PROVIDER', updateProvider),
]);
