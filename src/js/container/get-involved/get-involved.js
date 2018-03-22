import React, { Component } from 'react';
import styled from 'styled-components';
import Content from './content-involved';
import EngInvolved from '../../data/get-involved-eng.data';
import EspInvolved from '../../data/get-involved-esp.data';
import Styles from '../../style/styles';
import SidePanel from'./sidePanel-involved';
import {connect} from 'react-redux';

const Container = styled.div`
min-height:80vh;
display: flex;
    justify-content:space-between;
    padding:20px 50px 0px 20px;
`

class GetInvolved extends Component {
constructor(){
  super();
  this.state={
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
             <SidePanel change={this.changeContent} options={this.props.isEng?EngInvolved:EspInvolved} lang={this.props.isEng}/>       
          <Content data={this.props.isEng?EngInvolved[this.state.index]:EspInvolved[this.state.index]} lang={this.props.isEng}/>         
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
export default connect(mapStateToProps, mapDispatchToProps)(GetInvolved);