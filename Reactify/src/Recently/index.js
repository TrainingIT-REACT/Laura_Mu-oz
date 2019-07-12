import React from 'react';
import {connect} from 'react-redux';
import "@babel/polyfill";

const Recently = ({list}) => {
    return(
        <div>
            <h1>Recently played</h1>
            <ul>
                {list.map(({song}, i) => {
                    return <li key={i}>{song.song.name}</li>
                })}
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        list: state.myList.list
    };
};

export default connect(
    mapStateToProps
)(Recently);