import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectAlbum } from '../actions/music';

class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectAlbum: false,
          album:{}
        }
    }
    async componentDidMount() {
      try {
        const albums = await fetch('/albums');
        const songs = await fetch('/songs');
        const jsonAlbums = await albums.json();
        const jsonSongs = await songs.json();
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          albums: jsonAlbums,
          songs: jsonSongs
        }));
      } catch(err) {
        console.error("Error accediendo al servidor", err);
      }
    }
  
    renderAlbums = ({id, name, artist, cover}) => <div key={id}><h3>{name}</h3><h4>{artist}</h4><img width="150" height="150" src={cover}/> </div>

    render () {
      if(this.state.albums){
        return (
          <div  style={{display: "flex"}}>
            {this.state.albums.map(this.renderAlbums)}
          </div>
        );
      }
      return null;
    }
  }
  
  export default Albums;
  