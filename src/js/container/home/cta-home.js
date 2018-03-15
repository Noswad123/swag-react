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
`
const Option=styled.div`
color: ${Styles.color.font1};
      display: flex;
      justify-content: space-around;
      align-items: center;
    background-color:${Styles.color.primary};
      width: 30%;
      border-radius:60%;
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
        <h3>{(this.props.lang)?"View Timeline":"Need translation"}</h3>
        
        <div >  <Link to="/timeline">{(this.props.lang)?"Have a plan for every month for each year":"Need translation"} </Link></div>
      </Option>

      <Option>
        <h3>{(this.props.lang)?"Become a Mentor":"Need translation"} </h3>
        <div >  <Link to="/getinvolved">{(this.props.lang)?"Help someone achieve their goals":"Need translation"} </Link></div>
      </Option>

    </Container>

      )
    }
}