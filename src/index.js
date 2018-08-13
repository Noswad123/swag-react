import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./js/redux/store";

import styled from "styled-components";
import Styles from "./js/style/styles";

import Footer from "./js/component/footer";
import Checkin from "./js/container/checkin/checkin";
import CheckinForms from "./js/container/checkin/checkin-forms";
import Menu from "./js/component/menu/menu";

import AboutUs from "./js/container/about-us/about-us";
import GetInvolved from "./js/container/get-involved/get-involved";
import Home from "./js/container/home/home";
import Resources from "./js/container/resources/resources";
import Timeline from "./js/container/timeline/timeline";
import Meet from "./js/container/meet/meet";
import ContactUs from "./js/container/about-us/contactus";
import GetInvolvementTemplate from "./js/container/get-involved/get-involved-template";
import donate from "./js/container/donate/donate";
import SignUp from "./js/container/signup/signup"
import SignUpForms from "./js/container/signup/signup-forms"


const Container = styled.div`
  background-color:${Styles.color.secondary};
  font-family:${Styles.font.text};
  width:100%;
`;
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Menu/>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/getinvolved" component={GetInvolved} />
        <Route exact path="/getinvolved/:route" component={GetInvolvementTemplate} />
        <Route exact path="/donate" component={donate} />

        <Route exact path="/resources" component={Resources} />
        <Route exact path="/timeline" component={Timeline} />
        <Route exact path="/meet" component={Meet} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/checkin" component={Checkin} />
        <Route exact path="/checkin/:route" component={CheckinForms} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signup/:route" component={SignUpForms} />
        <Footer />
      </Container>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
