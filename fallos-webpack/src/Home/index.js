import React, {Component} from "react";
const Reproductor = React.lazy(() => import ('../Reproductor'));
const AddToList = React.lazy(() => import ('../AddToList'));


let rand = 0;
class Home extends Component{
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
          
        const randAlbum = parseInt(1 + Math.random() * (10 - 1));
        rand = parseInt(3 + Math.random() * (10 - 3));
        try {
          const res = await fetch(`/songs`);
          const allAlb = await fetch(`/albums`);
          const albSongs = await fetch(`/songs?album_id=${randAlbum}`);
          const albumRand = await fetch(`/albums?id=${randAlbum}`);
          const songs = await res.json();
          const recAlb = await albSongs.json();
          const album = await albumRand.json();
          const albums = await allAlb.json();
          this.setState((prevState) => ({
            ...prevState,
            songs: songs,
            recAlb: recAlb,
            album: album,
            albums: albums,
            loading: false,
          }));
        } catch(err) {
          console.error("Error accediendo al servidor", err);
        }
      }

      closeReproductor() {
        this.setState({open: false})
      }

      checkAlbumImg(id){
        let img = this.state.albums.find( x => x.id === id);
        if(img){
          this.setState({img: img});
        }
      }

    render(){
        if(this.state.loading === true){
            return(
                <div>
                    Loading content...
                    <div class="spinner-border spinner-border-sm" role="status">
                    </div>
                </div>
            );
        }
        
        return(
            <div id="songs">
                <h1>Recommendations</h1>
                <React.Suspense fallback="Loading songs list...">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Recommended album</h2>
                            {this.state.album.map((album) => {
                                return(
                                    <div>
                                        <h3>{album.name}</h3>
                                        <img alt="album-img" src={album.cover} width="150" height="150"/>
                                    </div>
                                )
                            })}
                            {this.state.recAlb.map((song, i) => {
                                return (
                                    <p key={i}>
                                        <AddToList song={song} onClick={(e) => { this.setState({song: song}); this.setState({open: true}); this.checkAlbumImg(song.album_id)}}/>  
                                        {song.name}
                                    </p>
                                  );
                            })}
                        </div>
                        <div className="col-md-6">
                            <h2>Recommended songs</h2>
                            {this.state.songs.map((song, i) => {
                                if(i%rand===0){
                                    return (
                                        <p key={i}>
                                            <AddToList song={song} onClick={(e) => { this.setState({song: song}); this.setState({open: true}); this.checkAlbumImg(song.album_id)}}/>  
                                            {song.name}
                                        </p>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <Reproductor open={this.state.open} img={this.state.img} song={this.state.song} close={this.closeReproductor} />
                </React.Suspense>
            </div>
        );
    }
}

export default Home;