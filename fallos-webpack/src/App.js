import React from "react";
import { Provider } from "react-redux";
import "./index.css";

import store from './store';
const Nav = React.lazy(() => import('./Nav'));
class App extends React.Component{

    render(){
      return(
        <Provider store={store} >
          <React.Suspense fallback="Loading">
            <Nav/>
          </React.Suspense>
        </Provider>
      );
    }
}


export default App;