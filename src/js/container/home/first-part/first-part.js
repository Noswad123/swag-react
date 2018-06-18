import React, {Component} from 'react';
import styled from 'styled-components';
import Cta from './cta-home';
import Mission from './mission';
import Styles from '../../../style/styles';
import {connect} from 'react-redux'

const Container = styled.div `
  min-height:70vh;
  width:100%;
  margin-top:80px;
  color:${Styles.color.font1};
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  opacity:0%;
  z-index:0;

  position:relative;
  width:98vw;

  background:url(./img/background.jpg);
  background-size:contain;
  repeat:no-repeat;
  background-attachment: fixed;
  position:relative;
  margin-bottom:50px;
`

const Logo = styled.img`
  width:700px;
  z-index:10;`
class FirstPart extends Component {
  render() {
    return ( 
      < Container >        
           < Logo src = {"./img/swag-logo-blue.png"} alt = "SWAG" /> 
          < Mission lang = {this.props.lang} /> 
          < Cta lang = {this.props.lang} />     
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
export default connect(mapStateToProps, mapDispatchToProps)(FirstPart);