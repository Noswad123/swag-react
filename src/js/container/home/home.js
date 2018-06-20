import React, {Component} from 'react';
import styled from 'styled-components';
import ThirdPart from './third-part';
import SecondPart from './second-part';
import FirstPart from './first-part/first-part';
import Styles from '../../style/styles';
import {connect} from 'react-redux'

const Container = styled.div `
  width:100%;
  min-height:60vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  color:${Styles.color.font1};
  postion:absolute;
`
const Text = styled.div`
color:black;
background-color:#7A9BBA;
font-size:20px;
width:100%;
height:100px;
`
class Home extends Component {
  render() {
    return ( 
      < Container > 
        <FirstPart lang = {this.props.isEng}/>
        <Text>
          Statistics
          </Text>
        <ThirdPart/>
        <SecondPart/>
        
    </Container>);
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