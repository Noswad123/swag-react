import React, { Component } from 'react';
import styled from 'styled-components';
import EngTimelines from '../../data/timeline-eng.data';
import EspTimelines from '../../data/timeline-esp.data';
import Main from './main-timeline';
import {connect} from 'react-redux'
import Navbar from "../../component/navbar"

const Container = styled.div`
  min-height:80vh;
  display: flex;
  flex-direction:column;
`
const Wrapper = styled.div`
  display: flex;
  width:100%;
  flex-direction:column;
  align-items:center;
`
class Timeline extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
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
        <Navbar/>
        <Wrapper>
          <Main isEng={this.props.isEng} timeline={this.props.isEng?EngTimelines[this.state.grade]:EspTimelines[this.state.grade]} changeGrade={this.state.changeGrade.bind(this)}/>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps= state=>{
  return{
      isEng:state.LangReducer.isEng
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