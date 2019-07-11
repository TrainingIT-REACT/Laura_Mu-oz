import types from './types';

export const updateUsername = name => ({
    type: types.UPDATE_USERNAME,
    name
});

