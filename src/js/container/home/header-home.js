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
`

const Title=styled.div`
font-size:${Styles.size.l};
color: ${Styles.color.font2};
margin-top:${Styles.size.xs};
font-family:${Styles.font.header};`

const Text=styled.p`
font-size:${Styles.size.s};
color: ${Styles.color.font2};
margin-top:${Styles.size.xs};
text-align:center;
font-family:${Styles.font.text};
`
export default class Header extends Component {
    render() {
      return (
        <Container>
          <Title>Welcome</Title>
          <Text>
            Our vision is to close the achievement gap and ensure every underserved high school and college student has a pathway to
            reach their goals.
          </Text>
        </Container> 
      )
    }
}