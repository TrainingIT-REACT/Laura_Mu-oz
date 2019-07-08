import React, {Component} from 'react';
import { connect } from 'react-redux';
import Reproductor from '../Reproductor';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Albums from '../Albums';
import Songs from '../Songs';
import Selected from '../Album';
class Home extends Component{
    constructor(props) {
        super(props);
    
        // Bind de los métodos
        this.showReproductor = this.showReproductor.bind(this);
        this.closeReproductor = this.closeReproductor.bind(this);
    
        this.state = {
          open: false,
        }
      }



      showReproductor(){
        this.setState({open: true})
      }
    
      closeReproductor() {
        this.setState({open: false})
      }

    render(){
        return(
            <div className="container">
              <Router>
                <nav>
                  <NavLink to="/albums">Albums</NavLink>
                  <NavLink to="/songs">Canciones</NavLink>
                  <NavLink to="/mylist">Mi lista</NavLink>
                </nav>              
                  <Route path="/albums" component={Albums} /> 
                  <Route path="/songs" component={Songs} /> 
                  <Selected />
              </Router> 
            </div>
        );
    }
}

export default Home;