
import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import {connect} from 'react-redux'

const Container = styled.div `
  width:100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  background-color:${Styles.color.primary};
  color:${Styles.color.font1};
  padding:10px 40px;
  box-sizing:border-box;
  min-height:250px;
  div:nth-child(odd) {
    background-color:${Styles.color.tertiary};
}

div:nth-child(even) {
    background-color:${Styles.color.accent};
}
  
`
const Statistic=styled.div`
    width:150px;
    
`
class Statistics extends Component {
  render() {
    return ( 
      < Container > 
        <Statistic>
            675 high school students from over 71 different high schools including
        </Statistic>
        <Statistic>
            120 high school graduates persevering through college
        </Statistic>
        <Statistic>
            605 college mentors from over 132 colleges and universities
        </Statistic>
        <Statistic>
            60 Young Professionals at 39 companies and graduate school
        </Statistic>
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
export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
