import React from 'react';
import { connect } from 'react-redux';

const Selected = ({list}) => {
    return(
        <div>
            {list.map((selectAlbum) => {
                return <h1>{selectAlbum.name}</h1>
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        list: state.music.selectAlbum
    };
}

export default connect(
    mapStateToProps
)(Selected);