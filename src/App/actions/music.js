import types from './types';

export const playSong = (actualSong) => ({
  type: types.PLAY_SONG,
  actualSong
});

export const selectAlbum = (selectAlbum) => ({
  type: types.SELECT_ALBUM,
  selectAlbum
});

export const addMylist = (song) => ({
  type: types.ADD_MYLIST,
  song
});

export const removeMylist = (song) => ({
  type: types.REMOVE_MYLIST,
  song
});