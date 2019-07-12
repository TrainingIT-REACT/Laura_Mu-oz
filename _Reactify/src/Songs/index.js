import React, {Component} from "react";
import "@babel/polyfill";
const Reproductor = React.lazy(() => import ('../Reproductor'));
const AddToList = React.lazy(() => import ('../AddToList'));
class Songs extends Component{
    constructor(props) {
        super(props);
    
        this.checkAlbumImg = this.checkAlbumImg.bind(this);
        this.closeReproductor = this.closeReproductor.bind(this);
        this.state = {
          loading: true,
          songs: [],
          open: false,
        }
      }

      async componentDidMount() {
        try {
          const res = await fetch('http://localhost:3001/songs');
          const alb = await fetch('http://localhost:3001/albums');
          const json = await res.json();
          const jalb = await alb.json();
          this.setState((prevState) => ({
            ...prevState,
            loading: false,
            songs: json,
            albums: jalb
          }));
        } catch(err) {
          console.error("Error accediendo al servidor", err);
        }
      }

      checkAlbumImg(id){
        let img = this.state.albums.find( x => x.id === id);
        if(img){
          this.setState({img: img});
        }
      }

      closeReproductor() {
        this.setState({open: false})
      }

    render(){
        return(
            <div id="songs">
            <React.Suspense fallback="Loading songs list...">
              <div className="row">
                <div className="col-md-12 text-center"><h1>Songs</h1></div>
                <div className="col-md-4">
                  {this.state.songs.map((song, i) =>{ 
                    if(i < 17 ){
                      return (
                        <p key={i}>
                            <AddToList song={song} onClick={(e) => { this.setState({song: song}); this.setState({open: true}); this.checkAlbumImg(song.album_id)}}/>  
                            {song.name}
                          </p>
                      );
                    }
                  })}
                </div>
                <div className="col-md-4">
                  {this.state.songs.map((song, i) =>{ 
                    if(i>=17 && i < 34){
                      return (
                          <p key={i}>
                            <AddToList song={song} onClick={(e) => { this.setState({song: song}); this.setState({open: true}); this.checkAlbumImg(song.album_id)}}/>  
                            {song.name}
                          </p>
                      );
                    }
                  })}
                </div>
                <div className="col-md-4">
                  {this.state.songs.map((song, i) =>{ 
                    if(i>=34){
                      return (
                        <p key={i}>
                            <AddToList song={song} onClick={(e) => { this.setState({song: song}); this.setState({open: true}); this.checkAlbumImg(song.album_id)}}/>  
                            {song.name}
                          </p>
                      );
                    }
                  })}
                </div>
                    <Reproductor open={this.state.open} img={this.state.img} song={this.state.song} close={this.closeReproductor} />
              </div>
              </React.Suspense>
            </div>
        );
    }
}

export default Songs;