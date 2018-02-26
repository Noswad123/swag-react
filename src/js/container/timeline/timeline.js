import React, { Component } from 'react';
import styled from 'styled-components';
import Timelines from '../../data/timeline.data';
import SidePanel from './sidePanel-timeline';
import Main from './main-timeline';

const Container = styled.div`
  min-height:80vh;
  display: flex;
`
export default class Timeline extends Component {
  constructor(){
    super();
    this.state={
      timeline:Timelines[0],
      changeGrade:function(grade){
        this.setState({timeline:Timelines[grade]});
        
      }
    }
  }
  render() {
    return (
      <Container>
        <SidePanel timeline={this.state.timeline} changeGrade={this.state.changeGrade.bind(this)}/>
        <Main timeline={this.state.timeline}/>

      </Container>
    );
  }
}



