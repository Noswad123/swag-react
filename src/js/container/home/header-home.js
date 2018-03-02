import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';


const Container= styled.div`
grid-column-start:2;
grid-column-end: 5;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom:16px;
h1 {
color: ${Styles.color.primary};
margin-top:${Styles.size.xs};
}
p{
  text-align:center;
  font-size:20px;
}

`
export default class Header extends Component {
    render() {
      return (
        <Container>
          <h1>Welcome</h1>
          <p>
            Our vision is to close the achievement gap and ensure every underserved high school and college student has a pathway to
            reach their goals.
          </p>
        </Container> 
      )
    }
}