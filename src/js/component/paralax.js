
import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../style/styles';
import {connect} from 'react-redux'

const Container = styled.div `
  min-height:80vh;
  width:100%;
  color:${Styles.color.font1};
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  z-index:2;

  position:relative;
  
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center;
  background-attachment: fixed;
`
class Paralax extends Component {
  render() {
    return ( 
      < Container style={{backgroundImage:`url(${this.props.background})`}}/>
    );
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