import Controller from '@ember/controller';
import Song from 'rarwe/models/song';
import { action } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',
  isAddButtonDisabled: empty('newSongTitle'),

  addSong: action(function () {
    this.set('isAddingSong', true);
  }),

  cancelAddSong: action(function () {
    this.set('isAddingSong', false);
  }),

  saveSong: action(function (event) {
    // Create a new song
    event.preventDefault();
    let newSong = Song.create({ title: this.newSongTitle });
    this.model.songs.pushObject(newSong);
    this.set('newSongTitle', '');
  }),
});
