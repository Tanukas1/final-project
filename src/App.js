import {Box} from '@material-ui/core';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header'; 
import Home from './components/home/Home'; 
import DetailView from './components/details/DetailView'; 
import CreatePost from './components/create/CreatePost'; 
import Update from './components/details/Update'; 
import './App.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
      <Box >
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/details' component={DetailView}/>
          <Route exact path='/create' component={CreatePost} />
          <Route exact path='/update' component={Update} />
        </Switch>
      </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;