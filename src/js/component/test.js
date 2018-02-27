import React, { Component } from 'react';
import styled from 'styled-components';
import Checkin from './checkin-form'

const Container=styled.div`
`


export default class Test extends Component {
  render() {
    return (
        <Container>
        <Checkin/>
        
      </Container>
    );
  }
}