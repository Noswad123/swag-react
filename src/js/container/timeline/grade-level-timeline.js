import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'

const Container = styled.div`
 
  display:flex;
  justify-content:center;
  width:80%;
`

const GradeLevel = styled.div`
  margin:20px;
  color:${Styles.color.accent};
  border-bottom:solid ${Styles.color.accent} 2px;
  cursor: pointer;
  &:hover{
    color:${Styles.color.contrast};
  border-bottom:solid ${Styles.color.contrast} 2px;
  }
  @media (max-width: 500px) {
    margin:10px;
  }
  @media (max-width: 500px) {
    display:none;
  }
`
const GradeLevelMenu = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
 
  
  span{
    display:none;
    color:${Styles.color.accent};
    border-bottom:solid ${Styles.color.accent} 2px;
    &:hover{
      cursor:pointer;
      color:${Styles.color.contrast};
      border-bottom:solid ${Styles.color.contrast} 2px;
      & ~ div{
        display:initial;
      }
    }
  }
  
  &:hover{
    cursor:pointer;
    span{
      color:${Styles.color.contrast};
    border-bottom:solid ${Styles.color.contrast} 2px;
    }
    
   div{
      display:initial;
    }
  }
  @media (max-width: 500px) {
    
    flex-direction:column;
    align-items:center;
    span{
      display:initial;
    }
  }
 
`

export default class GradeLevels extends Component {
  render() {
      return (
        <Container>
          <GradeLevelMenu>
            <span>Select Grade Level</span>
            <GradeLevel onClick={()=>this.props.changeGrade(0)}>{this.props.isEng ?"Freshman":"Año Primero"} </GradeLevel>
            <GradeLevel onClick={()=>this.props.changeGrade(1)}> {this.props.isEng ?"Sophomore":"Año segundo"} </GradeLevel>
            <GradeLevel onClick={()=>this.props.changeGrade(2)}> {this.props.isEng ?"Junior":"Año tercero"}</GradeLevel>
            <GradeLevel onClick={()=>this.props.changeGrade(3)}> {this.props.isEng ?"Senior":"Año final"}</GradeLevel>
            <GradeLevel  onClick={()=>this.props.changeGrade(4)} > {this.props.isEng ?"Parent":"Padre"}</GradeLevel>
          </GradeLevelMenu>
          
          
        </Container>
      )
    }
}

