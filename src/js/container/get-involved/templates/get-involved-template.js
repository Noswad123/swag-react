import styled from "styled-components";
import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../style/styles";

const Container = styled.div`
    min-height: 90vh;
  display: flex;
  flex-direction:column;
  align-items:center;
  padding: 100px 0;
  box-sizing:border-box;
  color:${Styles.color.secondary};
  width:100%;
  background-color:${Styles.color.teal};
`;
const Header = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Title = styled.div`
    font-size:${Styles.size.l};
    font-family:${Styles.font.title};
    font-weight:700;
    display:flex;
    justify-content:center;
    width:100%;
    text-transform:uppercase;
    color:${Styles.color.font1};
`
const Text = styled.div`
    text-align:center;
    color:${Styles.color.font1};
`
const Sections = styled.div`
    width:100%;
`
const Section = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    background-color:${Styles.color.accent};
    color:${Styles.color.teal};
`
const ArrowL = styled.div`
    color:${Styles.color.secondary};
`
const ArrowR = styled.div`
    color:${Styles.color.secondary};
 `
export default class MenteeInvolvement extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Title>
                High School Student
            </Title>
            <Text>
                As a mentee, you will receive a college mentor who will check in with you weekly through text, phone, or email. Your mentor will walk you through our timelines that begin in 9th grade and continue until you graduate from high school and start college. Your mentor will help make your college dreams possible!                </Text>
            </Header>
        <Sections>
            <Section>
                <ArrowL>
                {"<"}
                </ArrowL>
                Campus Representative
                <ArrowR>
                {">"}
                </ArrowR>
            </Section>
        </Sections>
      </Container>
    );
  }
}
