import React, { Component } from "react";
import styled from "styled-components";
import FormsArray from "../../data/signup-form.data";
import Navbar from"../../component/navbar";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  color: black;
  padding-top: 50px;
`;

export default class SignUPForms extends Component {
  formatRoute(route){
    var formIndex=FormsArray.findIndex((element)=>{
      return element.form===route;
    })
    return(formIndex===-1)?0:formIndex
  }
  constructor(props){
    super(props);
    this.state={ formIndex:this.formatRoute(props.match.params.route)}
  }
  render() {
    return (
      <Container>
        <Navbar/>
        <iframe
        title="mentee checkin"
        src={FormsArray[this.state.formIndex].link}
        style={{width:"90vw"}}
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </Container>
    );
  }
}
