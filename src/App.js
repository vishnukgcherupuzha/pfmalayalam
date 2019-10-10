import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Navbars from './components/Navbars'
import Home from './components/Home'
import Guidance from './components/Guidance'
import Froms from './components/Froms'
import Videos from './components/Videos'
import Default from './components/Default'
import Footer from './components/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <React.Fragment>
      <Navbars/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/guidance" component={Guidance}/>
        <Route path="/forms" component={Froms}/>
        <Route path="/videos" component={Videos}/>
        <Route component={Default}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
