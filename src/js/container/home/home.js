import React, {Component} from 'react';
import styled from 'styled-components';
import Paralax from '../../component/paralax';
import SecondPart from './second-part';
import AboveFold from './above-fold/above-fold';
import Styles from '../../style/styles';
import {connect} from 'react-redux'
import Statistics from './statistics';
import {isIOS} from 'react-device-detect'

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
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return ( 
      < Container > 
        <AboveFold lang = {this.props.isEng}/>
        <Statistics />
       { isIOS? "" :<Paralax background="./img/jls-3073_orig.jpg"/>}
        <SecondPart/>
        { isIOS? "" :<Paralax background="./img/homebottom.jpg"/>}
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