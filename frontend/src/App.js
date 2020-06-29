import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import { Provider} from 'react-redux';
import store from './store';


import Navbar from './components/Navbar';
import Footer from  './components/Footer';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Activity from './components/flow/Activity';
import DashBoard from './components/flow/AdminDash';
import Clients from './components/flow/Clients';

import './App.css'


class App extends Component {
   render() {
     return (
      <Provider store={store}>
       <Router>
          
         <div className="App">
           <Navbar />
           <Route  exact path="/" component={ Landing } /> 
              <div className="container">
                 <Route exact path="/login" component={ Login } />
                 <Route exact path="/register" component={ Register } />
                 <Route exact path="/activity" component={Activity}/>
                 <Route exact path="/dashboard" component={DashBoard} />
                 <Route exact path="/clients" component={Clients} />
              </div>
           <Footer />
         </div>
       </Router>
      </Provider>
     )
   }
}

export default App;

