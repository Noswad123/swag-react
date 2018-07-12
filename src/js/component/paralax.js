
import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../style/styles';
import {connect} from 'react-redux'

const Container = styled.div `
  min-height:70vh;
  width:100%;
  color:${Styles.color.font1};
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  z-index:2;

  position:relative;
  width:98vw;
`
class Paralax extends Component {
  render() {
    return ( 
      < Container style={{
        background:`url(${this.props.background})`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
        }}> 
        
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
export default connect(mapStateToProps, mapDispatchToProps)(Paralax);