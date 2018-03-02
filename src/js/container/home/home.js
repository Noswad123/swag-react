import React, { Component } from 'react';
import styled from 'styled-components';
import Gallery from './gallery-home';
import Cta from './cta-home';
import Header from './header-home';
import Styles from '../../style/styles';

const Container=styled.div`
min-height:80vh;
margin-top: ${Styles.size.m};
  display: grid;
  grid-template-columns: 10% 1fr 1fr 1fr 10%;
`



export default class Home extends Component {
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

