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
    color:${Styles.color.accent};
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
export default class signup extends Component {
  render() {
    return (
      <Container>
        <Navbar/>
        <Wrapper>
          <Title>
            Select a Form
          </Title>
            <ul>
            <li><Link to="/signup/hsrep"> High School Campus Rep</Link></li>
              <li><Link to="/signup/hsmentee"> High School Mentee</Link></li>
              <li><Link to="/signup/hsmentor"> High School Mentor</Link></li>
              <li><Link to="/signup/uppermentee"> Upper classmen Mentee</Link></li>
              <li><Link to="/signup/uppermentor"> Upper classmen Mentor</Link></li>
              <li><Link to="/signup/ypmentee"> Young Professional Mentee</Link></li>
              <li><Link to="/signup/ypmentor"> Young Professional Mentor</Link></li>
              <li><Link to="/signup/communitymember">Community Member</Link></li>
              <li><Link to="/signup/schooladmin"> School Admin</Link></li>       
            </ul>
          
        </Wrapper>
      </Container>
    );
  }
}
