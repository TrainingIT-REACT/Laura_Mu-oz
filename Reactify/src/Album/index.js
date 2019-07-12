import React, { Component } from 'react';
import Reproductor from '../Reproductor';
import "@babel/polyfill";

import AddToList from '../AddToList';

class Album extends Component {
    constructor(props){
        super(props);

        this.renderSongs = this.renderSongs.bind(this);
        this.closeReproductor = this.closeReproductor.bind(this);
        this.state = {
            albumSongs: [],
            selected: this.props.selected,
            open: false,
            loading: true
        }
    }

    async componentDidMount() {
        try {
          const res = await fetch(`http://localhost:3001/songs?album_id=${this.props.album.id}`);
          const json = await res.json();
          this.setState((prevState) => ({
            ...prevState,
            albumSongs: json,
            loading: false
          }));
        } catch(err) {
          console.error("Error accediendo al servidor", err);
        }
    }
      renderSongs = (name) => <p>{name} </p>


      closeReproductor() {
        this.setState({open: false})
      }

    render(){
        if(this.state.loading === true){
            return null;
        }else{
            return(
                <div id="songs">
                    <h1>{this.props.album.name}</h1>
                    <img alt="album-img" src={this.props.album.cover} width="150" height="150"/><br/>
                    {this.state.albumSongs.map((song, i) =>{ 
                        return (
                        <div key={song.id}>
                            <p>
                                <AddToList song={song} onClick={(e) => { this.setState({song: song}); this.setState({open: true});}}/> 
                                {song.name} 
                            </p>
                        </div>
                        )
                    })}
                    <Reproductor open={this.state.open} img={this.props.album} song={this.state.song} close={this.closeReproductor} />
                </div>
            );
        }
    }
}

export default Album;