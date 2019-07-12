import React, { createRef } from 'react';
import { connect } from 'react-redux';
import {updateUsername} from '../actions/user';
import {clearList} from '../actions/myList';
import store from '../store';
import "@babel/polyfill";


const Login = ({updateUsername, clearList}) =>{
    const input = createRef();
    const log = createRef();
    console.log(store.getState());
    const onSubmit = (e) => {
        e.preventDefault();
        updateUsername(input.current.value);
        log.current.style.display = "none";
    }

        if(store.getState().user.name === ""){
            if(window.location.pathname !== '/recently'){
                return(
                    <div>
                        <h1>Login page </h1>
                        <form ref={log} onSubmit={onSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="text" ref={input} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
                );
            }else{
                return(
                    <div>
                        <h1>Login page </h1>
                        <form ref={log} onSubmit={onSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="text" ref={input} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button>Login</button>
                        </form>
                        <div style={{marginTop: "8px"}} className="alert alert-danger">You should be loged to watch out your recents songs</div>
                    </div>
                );
            }
        }else{
            return(
                <div>
                    <h3 ref={input}>¡Bienvenido {store.getState().user.name}!</h3>
                        <button onClick={() => {updateUsername(""); clearList()}}>Logout</button>
                </div>
            );
        }
}

const mapDispatchToProps = (dispatch) => ({
    updateUsername: (name) => dispatch(updateUsername(name)),
    clearList: () => dispatch(clearList())
  });

export default connect(
    () => ({}),
    mapDispatchToProps,
  )(Login);