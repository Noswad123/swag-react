
import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import {connect} from 'react-redux'
import GradCap from "../../../images/grad-cap.png"
import Pencil from "../../../images/pencil-icon.png"
import Chart from "../../../images/chart-icon.png"
import Person from "../../../images/person-icon.png"

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
  
`
const Statistic=styled.div`
  width:25%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:20px;
  font-family:${Styles.font.title};
`
const Icon=styled.img`
  width:100px;
`
class Statistics extends Component {
  render() {
    return ( 
      < Container > 
        <Statistic>
          <Icon src={GradCap}/>
          College Matriculation Rate:
          <br/>
          SWAG Average: 88%
           <br/>
           National Average: 60%
        </Statistic>
        <Statistic>
        <Icon src={Pencil}/>
          College Retention Rate:
          <br/>
          SWAG Average: 74% 
          <br/>
          National Average: 40%
        </Statistic>
        <Statistic>
        <Icon src={Chart}/>
          85% of SWAG Students qualify for Free/Reduced Lunch
        </Statistic>
        <Statistic>
        <Icon src={Person}/>
          First Generation Students Make Up 78% of Our Community
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
