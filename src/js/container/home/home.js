import React, {Component} from 'react';
import styled from 'styled-components';
import Paralax from '../../component/paralax';
import SecondPart from './second-part/second-part';
import AboveFold from './above-fold/above-fold';
import Styles from '../../style/styles';
import {connect} from 'react-redux'
import Statistics from './statistics';

const Container = styled.div `
  width:100%;
  min-height:80vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  color:${Styles.color.font1};
  postion:absolute;
`
class Home extends Component {
  render() {
    return ( 
      < Container > 
        <AboveFold lang = {this.props.isEng}/>
        <Statistics />
        <Paralax background="./img/jls-3073_orig.jpg"/>
        <SecondPart/>
        <Paralax background="./img/intern.jpg"/>
    </Container>);
  }
}

const mapStateToProps = state => {
  return {isEng: state.LangReducer.isEng}
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