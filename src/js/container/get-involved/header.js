import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import MentorMentee from "./mentor-mentee";

const Container = styled.div`
    min-height: 90vh;
  display: flex;
  justify-content: space-between;
  flex-direction:column;
  align-items:center;
  padding: 120px 50px 50px 20px;
  box-sizing:border-box;
  color:${Styles.color.lightFont};
  width:100%;
`;
const Top = styled.div`
display: flex;
  justify-content: space-between;
  flex-direction:column;
  align-items:center;`
const Title = styled.div`
font-size:${Styles.size.l};
  font-family:${Styles.font.title};
  font-weight:700;
  position:relative;
  text-transform:uppercase;
  color:${Styles.color.lightFont};
`

const Text= styled.div``
const Bottom = styled.div`
width:70%;
display:flex;
justify-content:space-between;
`
export default class Header extends Component {
  render() {
    return (
      <Container>
          <Top>
            <Title>    
                Get Involved
            </Title>
            <Text>
              Some text about involvement...
            </Text>
          </Top>
          <Bottom>
            <MentorMentee pic="./img/profile.png" 
            text="As a mentee, you will receive the help you need on your journey to college. "/>
            <MentorMentee pic="./img/profile.png" 
              text="As a mentor, you will provide the support and counsel a student needs to succeed."/>
          </Bottom>
      </Container>
    );
  }
}

