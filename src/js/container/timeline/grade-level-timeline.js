import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'

const Container = styled.div`
  padding: 50px;
  display:flex;
  width:80%;
  justify-content:center;
  @media (max-width: 920px) {
    display:none;
  }
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
`

export default class GradeLevels extends Component {
  render() {
      return (
        <Container>
          <GradeLevel onClick={()=>this.props.changeGrade(0)}>{this.props.lang?"Freshman":"Año Primero"} </GradeLevel>
          <GradeLevel onClick={()=>this.props.changeGrade(1)}> {this.props.lang?"Sophomore":"Año segundo"} </GradeLevel>
          <GradeLevel onClick={()=>this.props.changeGrade(2)}> {this.props.lang?"Junior":"Año tercero"}</GradeLevel>
          <GradeLevel onClick={()=>this.props.changeGrade(3)}> {this.props.lang?"Senior":"Año final"}</GradeLevel>
          <GradeLevel  onClick={()=>this.props.changeGrade(4)} > {this.props.lang?"Parent":"Padre"}</GradeLevel>
        </Container>
      )
    }
}

