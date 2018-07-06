import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../style/styles";
import EngInvolved from "../../../data/get-involved-eng.data";
import MenteeInvolvment from "./mentee-involvement";
import arrowL from "../../../../images/arrowl.png"
import arrowR from "../../../../images/arrowr.png"

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
    color:${Styles.color.lightFont};
`
const Text = styled.div`
    text-align:center;
    color:${Styles.color.lightFont};
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
        left:-45px;
    }
`
const ArrowR = styled.div`
    color:${Styles.color.secondary};
    background-color:${Styles.color.secondary};
    img{
        height:200%;
        top:-50%;
        position:absolute;
        right:-45px;
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
    color:${Styles.color.lightFont};
 `
 const Position = styled.div`
 font-size:${Styles.size.m};
 font-family:${Styles.font.title};
    color:${Styles.color.secondary};
    padding:20px 0;
`
const Summary = styled.div`
    display:flex;
    justify-content:space-between;
    width:80%;
    margin-top:40px;
    color:${Styles.color.lightFont};
`
export default class GetInvolvementTemplate extends Component {
    constructor(props){
        super(props);
        this.state={ id:props.match.params.id}
    }
  render() {
    return (
        <Container>
            <Header>
                <Title>
                    {EngInvolved[(this.state.id>0 && this.state.id<6)?this.state.id:0].level}
                </Title>
                <Text>
                    {EngInvolved[(this.state.id>0 && this.state.id<6)?this.state.id:0].blurb}
                </Text>
            </Header>
            <Sections>
            {
                EngInvolved[(this.state.id>0 && this.state.id<6)?this.state.id:0].options.map((element)=>{
                    return(
                        <Section className="section" key={element.title}>
                            <Wrapper className="wrapper">
                                <ArrowL className="arrowL">
                                    <img src={arrowL} alt="left"/>
                                </ArrowL>
                                    <Position>
                                    {element.title}
                                    </Position>
                                <ArrowR className="arrowR">
                                    <img src={arrowR} alt="right"/>
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
