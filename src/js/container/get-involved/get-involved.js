import React, { Component } from 'react';
import styled from 'styled-components';
import Content from './content-involved';
import Involved from '../../data/get-involved.data';
import Styles from '../../style/styles';
import SidePanel from'./sidePanel-involved';

const Container = styled.div`
min-height:80vh;
display: flex;
    justify-content:space-between;
    padding:20px 50px 0px 20px;
`

export default class GetInvolved extends Component {
constructor(){
  super();
  this.state={
    how:Involved,
    index:1
  }
  this.changeContent=this.changeContent.bind(this)
}
changeContent(i){

  this.setState({
    index:i
  })
}

  render() {

    return (
      <Container>          
             <SidePanel change={this.changeContent} options={this.state.how}/>       
          <Content data={this.state.how[this.state.index]}/>         
      </Container>
    );
  }
}