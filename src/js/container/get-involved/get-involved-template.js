import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import EngInvolved from "../../data/get-involved-eng.data";
import arrowL from "../../../images/arrowl.png"
import arrowR from "../../../images/arrowr.png"
import Navbar from "../../component/navbar"
import {Link} from "react-router-dom"

const Container = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    padding: 0px 5px;
    box-sizing:border-box;
    color:${Styles.color.secondary};
    width:100%;
    background-color:${Styles.color.teal};
`;
const Header = styled.div`
    width:80%;
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
    a{
        color:${Styles.color.accent};
    }
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
    color:${Styles.color.font1};
`
export default class GetInvolvementTemplate extends Component {
    formatRoute(route){
        var formIndex=EngInvolved.findIndex((element)=>{
          return element.route===route;
        })
        return(formIndex===-1)?0:formIndex
      }
    constructor(props){
        super(props);
        this.state={ route:this.formatRoute(props.match.params.route)}
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
  render() {
    return (
        <Container>
            <Navbar/>
            <Header>
                <Title>
                    {EngInvolved[this.state.route].level}
                </Title>
                <Text>
                    {EngInvolved[this.state.route].blurb}
                </Text>
            </Header>
            <Sections>
            {
                EngInvolved[this.state.route].options.map((element)=>{
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
                                <SignUp>
                                   <Link to={`/signup/${element.form}`}> SignUp</Link>
                                </SignUp>
                        </Section>
                    )
                })
            }
            </Sections>
            
        </Container>
    );
    }
}
