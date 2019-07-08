import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
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
                <div>
                    <div className="back" onClick={this.props.close}>
                        <div className="repModal">    
                            <img src={this.props.img} width="150" height="150"/><br/>
                            <audio src={this.props.audio} type={"audio/mpeg"} preload="auto" controls autoPlay></audio>
                        </div>
                    </div>
                </div>,
                modalNode
            );
        }
    }
}

export default Reproductor;