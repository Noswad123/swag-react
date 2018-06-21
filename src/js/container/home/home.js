import React, {Component} from 'react';
import styled from 'styled-components';
import Paralax from '../../component/paralax';
import SecondPart from './second-part/second-part';
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
  color:${Styles.color.font1};
  background-color:${Styles.color.primary};
  font-size:20px;
  width:100%;
  height:100px;
  display:flex;
  justify-content:center;
  align-items:center;
`
class Home extends Component {
  render() {
    return ( 
      < Container > 
        <FirstPart lang = {this.props.isEng}/>
        <Text>
          Statistics
          </Text>
        <Paralax background="./img/community-members.jpg"/>
        <SecondPart/>
        <Paralax background="./img/meet-the-team_orig.jpg"/>
        
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