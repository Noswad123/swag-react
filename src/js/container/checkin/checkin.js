import React, { Component } from "react";
import styled from "styled-components";
import {Link}from "react-router-dom"
import Navbar from "../../component/navbar";
import Styles from '../../style/styles';

const Container = styled.div`
  width: 100%;
  min-height:100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  color: black;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  color: black;
  a{
    color:${Styles.color.font1};
  }
  li{
    margin-bottom:20px;
  }
  ul{
    list-style-type:none;
  }
`;
const Title = styled.div`
  color:${Styles.color.font1};
  font-family:${Styles.font.title};
  font-weight:700;
  font-size:${Styles.size.l};
  text-transform:uppercase;
  @media (max-width: 600px) {
    font-size:50px;
  }
  @media (max-width: 340px) {
    font-size:30px;
  }
`
const LinkWrapper = styled.div`
  background-color:${Styles.color.primary};
  width:100%;
  margin-top:50px;
  ul{
    border:solid ${Styles.color.accent};
    padding:50px 300px;
  }
  display:flex;
  justify-content:center;
  align-items:center;
`
export default class Checkin extends Component {
  render() {
    return (
      <Container>
        <Navbar/>
        <Wrapper>
          <Title>
            Select a Form
          </Title>
          <LinkWrapper>
            <ul>
              <li><Link to="/checkin/hsmentee"> High School Mentee</Link></li>
              <li><Link to="/checkin/hsmentor"> High School Mentor</Link></li>
              <li><Link to="/checkin/uppermentee"> Upper classmen Mentee</Link></li>
              <li><Link to="/checkin/uppermentor"> Upper classmen Mentor</Link></li>
              <li><Link to="/checkin/ypmentee"> Young Professional Mentee</Link></li>
              <li><Link to="/checkin/ypmentor"> Young Professional Mentor</Link></li>       
            </ul>
          </LinkWrapper>
        </Wrapper>
      </Container>
    );
  }
}
