import React, { Component } from 'react';
import styled from 'styled-components';
import Gallery from './gallery-home';
import Cta from './cta-home';
import Header from './header-home';
import Styles from '../../style/styles';
import {connect} from 'react-redux'

const Container=styled.div`
min-height:80vh;
margin-top: ${Styles.size.m};
  display: grid;
  grid-template-columns: 10% 1fr 1fr 1fr 10%;
`

class Home extends Component {
  render() {
    return (
      <Container>        
        <Header lang={this.props.isEng}/>
        <Cta lang={this.props.isEng}/>          
        <Gallery lang={this.props.isEng}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);