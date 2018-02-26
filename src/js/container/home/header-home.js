import React, { Component } from 'react';
import styled from 'styled-components';


const Container= styled.div`
grid-column-start:2;
grid-column-end: 4;
display: flex;
flex-direction: column;
align-items: center;
h1 {
color: #09335D;
}
p{
  text-align:center;
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