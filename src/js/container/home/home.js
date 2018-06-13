import React, {Component} from 'react';
import styled from 'styled-components';
import Gallery from './gallery-home';
import Cta from './cta-home';
import Header from './header-home';
import Styles from '../../style/styles';
import {connect} from 'react-redux'

const Container = styled.div `
min-height:80vh;
margin-top: ${Styles.size.m};
  display: flex;
  flex-direction: column;
  align-items:center;
`
const Logo = styled.img`
width:700px;
`
class Home extends Component {
  render() {
    return ( 
      < Container > 
        < Logo src = {"./img/swag-logo-blue.png"} alt = "SWAG" /> 
        < Header lang = {this.props.isEng} /> 
        < Cta lang = {this.props.isEng} /> 
        < Gallery lang = {this.props.isEng} /> 
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);