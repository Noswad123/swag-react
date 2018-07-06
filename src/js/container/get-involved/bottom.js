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
  color:${Styles.color.lightFont};
  width:100%;
`;
const Header = styled.div`
    font-size:${Styles.size.l};
    font-family:${Styles.font.title};
    font-weight:700;
    display:flex;
    justify-content:center;
    width:100%;
    text-transform:uppercase;
`;
const BlueDiv=styled.div`
    border-right:solid ${Styles.color.secondary} 20px;
    border-top:solid ${Styles.color.secondary} 20px;
    border-bottom:solid ${Styles.color.secondary} 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:20%;
    color:${Styles.color.lightFont};
    height:250px;
    a{
        text-decoration:none;
    }
    &:hover{
        background-color:${Styles.color.accent};
        cursor:pointer;
    }
`;
const Pic=styled.img`
    width:50px;`;
const Wrapper=styled.div`
    display: flex;
    justify-content:space-around;
    align-items:center;
    background: linear-gradient(90deg, ${Styles.color.primary} 0%, ${Styles.color.contrast} 80%);
    width:100%;
    border-top: solid${Styles.color.lightFont};
    border-bottom: solid${Styles.color.lightFont};
    
    div:nth-last-child(1)
    {
        border-right:none;
    }
`;
const Text = styled.div`
    width:50px;
    height:30px;
    margin-top:10px;
    color:${Styles.color.lightFont};
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
                <Link to="/getinvolved/0">
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        High School Student
                    </Text>
                </Link>
            </BlueDiv>
                <BlueDiv>
                    <Link to="/getinvolved/1">
                        <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                        <Text>
                            College Student
                        </Text>
                    </Link>
                </BlueDiv>
                <BlueDiv>
                    <Link to="/getinvolved/3">
                        <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                        <Text>
                            Parent
                        </Text>
                    </Link>
                </BlueDiv>
                <BlueDiv>
                    <Link to="/getinvolved/5">
                        <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                        <Text>
                            Community Member
                        </Text>
                    </Link>
                </BlueDiv>
                <BlueDiv>
                    <Link to="/getinvolved/2">
                        <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                        <Text>
                            Young Professional
                        </Text>
                    </Link>
                </BlueDiv>
                <BlueDiv>
                    <Link to="/getinvolved/4">
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
