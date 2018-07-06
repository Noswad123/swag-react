import React, {Component} from 'react';
import styled from 'styled-components';
import Cta from './cta-home';
import Mission from './mission';
import Styles from '../../../style/styles';
import {connect} from 'react-redux'

const Container = styled.div `
  width:100%;
  z-index:0;
  color:${Styles.color.lightFont};
`
const ParalaxWrap = styled.div`
  background:url(./img/maddie.jpg);
  background-size:contain;
  background-repeat:no-repeat;
  background-attachment: fixed;
  background-position:center;
  position:relative;
  min-height:80vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  width:100%;
  padding:100px 0 100px 0;
  margin-bottom:
`

const Logo = styled.img`
  width:700px;
  z-index:10;
`

class AboveFold extends Component {
  render() {
    return ( 
      < Container > 
        <ParalaxWrap>       
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