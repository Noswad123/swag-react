import React, { Component } from 'react';
import styled from 'styled-components';
import Gallery from './gallery-home';
import Cta from './cta-home';
import Header from './cta-home';

const Container=styled.div`
min-height:80vh;
margin-top: 3em;
  display: grid;
  grid-template-columns: 15% 1fr 1fr 15%;
`



export default class GetInvolved extends Component {
  render() {
    return (
      <Container>        
        <Header/>
        <Cta/>          
        <Gallery/>
      </Container>
    );
  }
}

