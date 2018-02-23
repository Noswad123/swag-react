import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import Navbar from './js/component/navbar';
import Footer from './js/component/footer';
import AboutUs from './js/pages/about-us';
import Blog from './js/pages/blog';
import GetInvolved from './js/pages/get-involved';
import Home from './js/pages/home';
import Resources from './js/pages/resources';
import Timeline from './js/pages/timeline';
import registerServiceWorker from './registerServiceWorker';
import styled from "styled-components";


const Container=styled.div` 
  `
ReactDOM.render(
<BrowserRouter>
<Container>
  <Navbar/>
      <Route exact path="/aboutus" component={AboutUs}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/getinvolved" component={GetInvolved}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/resources" component={Resources}/>
      <Route exact path="/timeline" component={Timeline}/>
  <Footer/>
</Container>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
