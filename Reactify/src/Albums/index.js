import React, {Component} from "react";
import "@babel/polyfill";
const Album = React.lazy(() => import('../Album'));


class Albums extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          loading: true,
          albums: [],
          selected: false,
          selectAlbum: {},
        }
      }

      async componentDidMount() {
        try {
          const res = await fetch('http://localhost:3001/albums');
          const json = await res.json();
          this.setState((prevState) => ({
            ...prevState,
            loading: false,
            albums: json
          }));
        } catch(err) {
          console.error("Error accediendo al servidor", err);
        }
      }

    render(){
        if(this.state.selected === false){
            return(
              <div className="row">
                <div className="col-md-12 text-center"><h1>Albums</h1></div>
                <div className="col-md-4 text-center">
                  {this.state.albums.map((album, i) =>{ 
                    if(i < 4 ){
                      return (
                        <div key={album.id} onClick={() => {this.setState({selected: true}); this.setState({selectAlbum: album})}} id={album.id}>
                          <h2>{album.name}</h2>
                          <img alt="album-img" width="150" height="150" src={album.cover} alt={album.name} />
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="col-md-4 text-center">
                  {this.state.albums.map((album, i) =>{ 
                    if(i >= 4 && i <= 6 ){
                      return (
                        <div key={album.id} onClick={() => {this.setState({selected: true}); this.setState({selectAlbum: album})}} id={album.id}>
                          <h2>{album.name}</h2>
                          <img alt="album-img" width="150" height="150" src={album.cover} alt={album.name} />
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="col-md-4 text-center">
                  {this.state.albums.map((album, i) =>{ 
                    if(i > 6 ){
                      return (
                        <div key={album.id} onClick={() => {this.setState({selected: true}); this.setState({selectAlbum: album})}} id={album.id}>
                          <h2>{album.name}</h2>
                          <img alt="album-img" width="150" height="150" src={album.cover} alt={album.name} />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
        }else{
            return(
              <React.Suspense fallback="Album loading...">
                <div id="albumSelected">
                  <Album album={this.state.selectAlbum} selected={this.state.selected} />
                  <button onClick={() => {this.setState({selected: false})}}>Volver</button>
                </div>
              </React.Suspense>
            );
        }
    }
}

export default Albums;