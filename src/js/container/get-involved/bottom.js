import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import { Link} from 'react-router-dom';

const Container = styled.div`
    min-height: 90vh;
  display: flex;
  justify-content: space-between;
  flex-direction:column;
  align-items:center;
  padding: 80px 50px 50px 20px;
  box-sizing:border-box;
  color:${Styles.color.font1};
  width:100%;
`
const Header = styled.div`
    font-size:${Styles.size.l};
    font-family:${Styles.font.title};
    font-weight:700;
    display:flex;
    justify-content:center;
    width:100%;
    text-transform:uppercase;
`
const BlueDiv=styled.div`
    border-right:solid ${Styles.color.secondary} 20px;
    border-top:solid ${Styles.color.secondary} 20px;
    border-bottom:solid ${Styles.color.secondary} 20px;
    
    width:20%;
    color:${Styles.color.font2};
    height:250px;
    a{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        height:100%;
        width:100%;
        
        &:hover{
            cursor:pointer;
        }
    }
    &:hover{
        background-color:${Styles.color.accent};
        
    }
`
const Pic=styled.img`
    width:50px;
`
const Wrapper=styled.div`
    display: flex;
    justify-content:space-around;
    align-items:center;
    background: linear-gradient(90deg, #97DFFC 0%, ${Styles.color.primary} 80%);
    width:100%;
    border-top: solid${Styles.color.font1};
    border-bottom: solid${Styles.color.font1};
    
    div:nth-last-child(1)
    {
        border-right:none;
    }
`;
const Text = styled.div`
    width:50px;
    height:30px;
    margin-top:10px;
    color:${Styles.color.font1};
  font-family:${Styles.font.title};
  font-weight:700;
`;

export default class Bottom extends Component {
    render() {
        return (
            <Container>
                <Header>
                    Join Us
                </Header>
                <Wrapper>
                    <BlueDiv>
                        <Link to="/getinvolved/hsstudent">
                            <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                            <Text>
                                High School Student
                            </Text>
                        </Link>
                    </BlueDiv>
                    <BlueDiv>
                        <Link to="/getinvolved/collegestudent">
                            <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                            <Text>
                                College Student
                            </Text>
                        </Link>
                    </BlueDiv>
                    <BlueDiv>
                        <Link to="/getinvolved/parent">
                            <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                            <Text>
                                Parent
                            </Text>
                        </Link>
                    </BlueDiv>
                    <BlueDiv>
                        <Link to="/getinvolved/communitymember">
                            <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                            <Text>
                                Community Member
                            </Text>
                        </Link>
                    </BlueDiv>
                    <BlueDiv>
                        <Link to="/getinvolved/yp">
                            <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                            <Text>
                                Young Professional
                            </Text>
                        </Link>
                    </BlueDiv>
                    <BlueDiv>
                        <Link to="/getinvolved/schooladmin">
                            <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                            <Text>
                                School Admin
                            </Text>
                        </Link>
                    </BlueDiv>
                </Wrapper>
            </Container>
        );
    }
}
