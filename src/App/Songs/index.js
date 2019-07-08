import React, {Component} from 'react';
import { connect } from 'react-redux';
import Reproductor from '../Reproductor';


class Songs extends Component {
    constructor(props) {
        super(props);
        this.closeReproductor = this.closeReproductor.bind(this);
        this.state = {
          song:"",
          open: false,
          img: ""
        }
    }
    async componentDidMount() {
      try {
        const songs = await fetch('/songs');
        const jsonSongs = await songs.json();
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          songs: jsonSongs
        }));
      } catch(err) {
        console.error("Error accediendo al servidor", err);
      }
    }

    closeReproductor() {
        this.setState({open: false})
      }
  
    render () {
      if(this.state.songs){
        return (
          <div id="cont" style={{margin: "40px"}}>
            {this.state.songs.map(song =>{ 
                return (
                    <div key={song.id}>
                       <p><i className="fa fa-play"  onClick={(e) => { this.setState({song: song.audio}); this.setState({open: true}); this.setState({img: song.img})}}></i> {song.name}</p>
                    </div>
                    )
            })}
            <Reproductor open={this.state.open} img={this.state.img} audio={this.state.song} close={this.closeReproductor} />
          </div>
        );
      }
      return null;
    }
  }
  
  export default Songs;