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
    border-right:solid ${Styles.color.grey};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:20%;
    color:${Styles.color.font1};
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
    background: linear-gradient(90deg, ${Styles.color.blue} 0%, ${Styles.color.primary} 70%);
    width:100%;
`;
const Text = styled.div`
    width:50px;
    height:30px;
    margin-top:10px;
    color:${Styles.color.font1};
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
                <Link to="/mentee">
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        High School Student
                    </Text>
                </Link>
            </BlueDiv>
                <BlueDiv>
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        College Student
                    </Text>
                </BlueDiv>
                <BlueDiv>
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        Parent
                    </Text>
                </BlueDiv>
                <BlueDiv>
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        Community Member
                    </Text>
                </BlueDiv>
                <BlueDiv>
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        Young Professional
                    </Text>
                </BlueDiv>
                <BlueDiv>
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        School Admin
                    </Text>
                </BlueDiv>
            </Wrapper>
      </Container>
    );
  }
}
