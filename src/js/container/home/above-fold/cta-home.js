import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../../style/styles'
import { Link} from 'react-router-dom';
const Container=styled.div`
  display: flex;
  justify-content: space-between;
  width:70%;
  @media (max-width: 743px) {
    flex-direction:column;
    align-items:center;
  }
  z-index:10;
`
const Option=styled.div`
  color: ${Styles.color.font1};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height:180px;
  h3{
    text-align:center;
  }
  &:hover{
      h3{
          display: none;
      }
      div{
          display: flex;
          padding: 10px;
          align-items: center;
          text-align: center;
          a{
            text-decoration: none;
            color:${Styles.color.accentFont};
          }
      }
  }
  div{
      color:${Styles.color.font1};
      display: none;
      
    background-color:${Styles.color.accent};
    height: 100%;
    width:100%;
    border-radius:60%;
  }
  @media (max-width: 743px) {
    margin:20px;
  }
`
export default class GetInvolved extends Component {
    render() {
      return (
        <Container>
          <Option>
            <h3>{(this.props.lang)?"Become a Mentee/Mentor":"Merece un aprendiz o Mentor"}</h3>
            <div >
              <Link to="/getinvolved"> {(this.props.lang)?"Get help with the college process":"Obtenga ayudar con el proceso del colegio"}</Link>
            </div>
          </Option>

          <Option>
            <h3>{(this.props.lang)?"View Timeline":"Mira a la linea de tiempo"}</h3>
            <div >  <Link to="/timeline">{(this.props.lang)?"Have a plan for every month for each year":"Haga un plan por cada mes del ano"} </Link></div>
          </Option>
        </Container>
      )
    }
}