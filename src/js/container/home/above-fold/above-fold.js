import React, {Component} from 'react';
import styled from 'styled-components';
import Cta from './cta-home';
import Mission from './mission';
import Styles from '../../../style/styles';
import {connect} from 'react-redux'
import HomeHeader from '../../../component/header';

const Container = styled.div `
  width:100%;
  z-index:0;
  color:${Styles.color.font1};
`
const ParalaxWrap = styled.div`
  background:url(./img/homepage.png);
  background-size:cover;
  background-repeat:no-repeat;
  background-attachment: fixed;
  background-position:center;
  position:relative;
  
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  width:100%;
  padding:0px 0 100px 0;
`

const Logo = styled.img`
  width:700px;
  z-index:10;
  margin-top:100px;
`
const Cover=styled.div`
position:absolute;
width:100%;
height:100%;
opacity:.2;
background-color:${Styles.color.primary};`
class AboveFold extends Component {
  render() {
    return ( 
      < Container > 
        <ParalaxWrap>  
          <Cover/>
          <HomeHeader/>     
          < Logo src = {"./img/swag-logo-white.png"} alt = "SWAG" /> 
          < Mission lang = {this.props.lang} /> 
          < Cta lang = {this.props.lang} /> 
        </ParalaxWrap>    
    </ Container >);
  }
}

const mapStateToProps = state => {
  return {isEng: state.isEng}
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateLang: () => {
      const action = {
        type: "UPDATE_LANG",
        payload: false
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AboveFold);