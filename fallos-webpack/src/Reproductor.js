import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';



const modalNode = document.getElementById('reproductor');

class Reproductor extends Component {
    constructor(props){
        super(props);

        this.el = document.createElement('div');
    }

    componentDidMount(){
        modalNode.appendChild(this.el);
    }

    componentWillUnmount(){
        modalNode.removeChild(this.el);
    }
    render(){
        if(this.props.open !== true){
            return null;
        }else{
            return ReactDOM.createPortal(
                <React.Suspense fallback="Mediaplayer loading...">
                <div>
                    <div className="back" onClick={this.props.close}>
                        <div className="repModal">    
                            <img className="albImg" alt="album-img" src={this.props.img.cover} style={{marginBottom: "8px"}} />
                            <h2>{this.props.song.name}</h2>
                            <p>{this.props.img.artist}</p>
                            <audio src={this.props.song.audio} type={"audio/mpeg"}  controls autoPlay></audio>
                        </div>
                    </div>
                </div>
                </React.Suspense>,
                modalNode
            );
        }
    }
}

export default Reproductor;