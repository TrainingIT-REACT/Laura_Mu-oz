import React from 'react';
import {connect} from 'react-redux';

import {addToList} from './actions/myList';
import store from './store';
const AddToList = ({onClick, song, addToList, list}) => {
    const addSong = song =>{
        if(store.getState().user.loged === true){
            let isOn = list.find(x => x.song.song === song.song);
            if(isOn === undefined){
                addToList(song);
            }
        }
    }

    return(
        <i className="fa fa-play" style={{marginRight: "5px"}}  onClick={() =>{ addSong(song); onClick();}}></i>
    )
};

const mapDispatchToProps = (dispatch) => {
    return{
        addToList: (song) => dispatch(addToList(song))
    };
};

const mapStateToProps = (state, song) => {
    return{
        list: state.myList.list,
        song
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddToList);