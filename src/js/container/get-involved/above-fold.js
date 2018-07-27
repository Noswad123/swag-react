import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import MentorMentee from "./mentor-mentee";

const Container = styled.div`
    min-height: 90vh;
  display: flex;
  flex-direction:column;
  align-items:center;
  padding: 20px 50px 50px 20px;
  box-sizing:border-box;
  color:${Styles.color.font1};
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
  color:${Styles.color.font1};
  @media (max-width: 550px) {
    font-size:60px;
  }
  @media (max-width: 400px) {
    font-size:40px;
  }
`

const Text= styled.div`
width:70%;
text-align:center;
font-size:25px;`
const Bottom = styled.div`
width:80%;
display:flex;
justify-content:space-between;
margin-top:50px;
@media (max-width: 700px) {
  flex-direction:column;
  align-items:center;
}
`
export default class AboveFold extends Component {
  render() {
    return (
      <Container>
          <Top>
            <Title>    
                Get Involved
            </Title>
            <Text>
            We all know someone, whether ourselves, a friend, or a daughter who wants to pursue higher education, but doesn’t know where to start. We believe everyone deserves equal access to the information needed to apply and succeed in college. At Swag, we pair students with mentors that will guide them through the application process. Join us today to be a part of our growing community. 

            </Text>
          </Top>
          <Bottom>
            <MentorMentee pic="./img/menteesays.jpg" 
            text="As a mentee, you will receive the help you need on your journey to college. "/>
            <MentorMentee pic="./img/mentorsays.jpg" 
              text="As a mentor, you will provide the support and counsel a student needs to succeed."/>
          </Bottom>
      </Container>
    );
  }
}

