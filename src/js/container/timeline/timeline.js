import React, { Component } from 'react';
import styled from 'styled-components';
import EngTimelines from '../../data/timeline-eng.data';
import EspTimelines from '../../data/timeline-esp.data';
import SidePanel from './sidePanel-timeline';
import Main from './main-timeline';
import {connect} from 'react-redux'

const Container = styled.div`
  min-height:80vh;
  display: flex;
`
class Timeline extends Component {
  constructor(){
    super();
    this.state={
      grade:0,
      changeGrade:function(newGrade){
        this.setState({grade:newGrade});
        
      }
    }
  }
  render() {
    return (
      <Container>
        <SidePanel lang={this.props.isEng} timeline={this.props.isEng?EngTimelines[this.state.grade]:EspTimelines[this.state.grade]} changeGrade={this.state.changeGrade.bind(this)}/>
        <Main timeline={this.props.isEng?EngTimelines[this.state.grade]:EspTimelines[this.state.grade]}/>

      </Container>
    );
  }
}



const mapStateToProps= state=>{
  return{
      isEng:state.isEng
    }
  };


function mapDispatchToProps(dispatch){
  return{
    onUpdateLang:()=>{
      const action={type:"UPDATE_LANG",payload:false};
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);