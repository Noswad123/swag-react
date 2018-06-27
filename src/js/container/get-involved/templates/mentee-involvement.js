import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../style/styles";
import EngInvolved from "../../../data/get-involved-eng.data";

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
    .section:nth-child(odd){
        .arrowL{
            display:none;
        }
    }
    .section:nth-child(even){
        .arrowR{
            display:none;
        }
    }
`
const Section = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:20px;
    padding:40px;
    color:${Styles.color.teal};
    box-sizing:border-box;
`
const ArrowL = styled.div`
    color:${Styles.color.secondary};
    img{
        height:200%;
        top:-50%;
        position:absolute;
        left:-25px;
    }
`
const ArrowR = styled.div`
    color:${Styles.color.secondary};
    background-color:${Styles.color.secondary};
    img{
        height:200%;
        top:-50%;
        position:absolute;
        right:-25px;
    }
`
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    position:relative;
    background-color:${Styles.color.accent};
`
const SignUp = styled.div`
    font-size:${Styles.size.m};
    font-family:${Styles.font.title};
    display:flex;
    justify-content:center;
    width:100%;
    text-transform:uppercase;
    color:${Styles.color.font1};
 `
 const Position = styled.div`
 font-size:${Styles.size.m};
 font-family:${Styles.font.title};
    color:${Styles.color.secondary};
`
const Summary = styled.div`
    display:flex;
    justify-content:space-between;
    width:80%;
    margin-top:40px;
    color:${Styles.color.font1};
`
export default class MenteeInvolvement extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Title>
                {EngInvolved[0].level}
            </Title>
            <Text>
                {EngInvolved[0].blurb}
            </Text>
            </Header>
        <Sections>
            {
                EngInvolved[0].options.map((element)=>{
                        return(
                            <Section className="section" key={element.title}>
                                <Wrapper className="wrapper">
                                    <ArrowL className="arrowL">
                                    <img src={"./img/arrowl.png"} alt="left arrow"/>
                                    </ArrowL>
                                        <Position>
                                        {element.title}
                                        </Position>
                                    <ArrowR className="arrowR">
                                        <img src={"./img/arrowr.png"} alt="right arrow"/>
                                    </ArrowR>
                                </Wrapper>
                                    <Summary>
                                        {element.summary}
                                    </Summary>
                            </Section>
                        )
                })
            }
        </Sections>
        <SignUp>
            SignUp
        </SignUp>
      </Container>
    );
  }
}
