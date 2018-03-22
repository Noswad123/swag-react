import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'
import { Link} from 'react-router-dom';
const Container=styled.div`
display: flex;
      justify-content: space-between;
      grid-column-start:2;
      grid-column-end: 5;
      grid-row-start: 2;
      @media (max-width: 743px) {
        flex-direction:column;
        align-items:center;
      }
`
const Option=styled.div`
color: ${Styles.color.font1};
      display: flex;
      justify-content: space-around;
      align-items: center;
    background-color:${Styles.color.primary};
      width: 200px;
      height:100px;
      border-radius:60%;
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
                color:${Styles.color.font2};
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
        <h3>{(this.props.lang)?"Become a Mentee":"Merece un aprendiz"}</h3>
        <div >
         <Link to="/getinvolved"> {(this.props.lang)?"Get help with the college process":"Obtenga ayudar con el proceso del colegio"}</Link>
        </div>
      </Option>

      <Option>
        <h3>{(this.props.lang)?"View Timeline":"Mira a la linea de tiempo"}</h3>
        
        <div >  <Link to="/timeline">{(this.props.lang)?"Have a plan for every month for each year":"Haga un plan por cada mes del ano"} </Link></div>
      </Option>

      <Option>
        <h3>{(this.props.lang)?"Become a Mentor":"Merece un Mentor"} </h3>
        <div >  <Link to="/getinvolved">{(this.props.lang)?"Help someone achieve their goals":"Ayuda a alguien alcanzas sus metas"} </Link></div>
      </Option>

    </Container>

      )
    }
}