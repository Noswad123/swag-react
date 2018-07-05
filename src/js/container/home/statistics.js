
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
          College Matriculation Rate: 88% National Average: 60%
        </Statistic>
        <Statistic>
          College Persistence Rate: 74% National Average: 40%
        </Statistic>
        <Statistic>
          SAT Score: 1106 (out of 1600); National Average: 1083 (out of 1600)
        </Statistic>
        <Statistic>
          GPA: 3.48 (out of 4.00): National Average: 3.00 (out of 4.00)
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
