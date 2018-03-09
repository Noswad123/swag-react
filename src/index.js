import React from 'react';
import ReactDOM from 'react-dom';
//import base from './base';
import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import styled from "styled-components";
import Styles from "./js/style/styles";
import registerServiceWorker from './registerServiceWorker';


import Test from './js/component/test';
import Navbar from './js/component/navbar';
import Footer from './js/component/footer';
import AboutUs from './js/container/about-us/about-us';
import Blog from './js/container/blog/blog';
import GetInvolved from './js/container/get-involved/get-involved';
import Home from './js/container/home/home';
import Resources from './js/container/resources/resources';
import Timeline from './js/container/timeline/timeline';

import Meet from './js/container/meet/meet';
import ContactUs from './js/container/about-us/contactus'



const Container=styled.div` 
background-color:${Styles.color.secondary};
  `
ReactDOM.render(
<BrowserRouter>
<Container style={{width:"100%"}}>
  <Navbar/>
      <Route exact path="/aboutus" component={AboutUs}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/getinvolved" component={GetInvolved}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/resources" component={Resources}/>
      <Route exact path="/timeline" component={Timeline}/>
      <Route exact path="/test" component={Test}/>
      <Route exact path="/meet" component={Meet}/>
      <Route exact path="/contactus" component={ContactUs}/>
  <Footer/>
</Container>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
