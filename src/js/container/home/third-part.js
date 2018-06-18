
import React, {Component} from 'react';
import styled from 'styled-components';
//import Gallery from './gallery-home';

import Styles from '../../style/styles';
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

  background:url(./img/community-members.jpg);
  background-size:contain;
  repeat:no-repeat;
  background-attachment: fixed;
  position:relative;
`
class ThirdPart extends Component {
  render() {
    return ( 
      < Container > 
        
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
export default connect(mapStateToProps, mapDispatchToProps)(ThirdPart);