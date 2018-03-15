import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
const Container=styled.div`
width:100%;
box-sizing:border-box;
height:100px;
padding:20px;
overflow:hidden;
background-color:#09335D;
color:white`


 class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      isEng:props.isEng
    }
  }
  render(props) {
    return (
        <Container>
        {(this.props.isEng===true)?"English":"Spanish"}
        
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
export default connect(mapStateToProps,mapDispatchToProps)(Footer);