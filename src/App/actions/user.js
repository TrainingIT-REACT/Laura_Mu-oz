import types from './types';

export const updateName = (name) => ({
  type: types.UPDATE_USER,
  name
});

export const loged = (logedUser) =>({
  type: types.LOGED,
  logedUser
});
