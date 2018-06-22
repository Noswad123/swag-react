import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";

const Container = styled.div`
    min-height: 90vh;
  display: flex;
  justify-content: space-between;
  flex-direction:column;
  align-items:center;
  padding: 80px 50px 50px 20px;
  box-sizing:border-box;
  color:${Styles.color.secondary};
  width:100%;
`;
const Header = styled.div`
font-size:${Styles.size.l};
  font-family:${Styles.font.title};
  font-weight:700;
  display:flex;
  justify-content:space-between;
  width:70%;
  align-items:center;
`
const BlueDiv=styled.div`
background-color:${Styles.color.temp};
padding:50px;`;
const Pic=styled.img`
width:50px;`;
const Wrapper=styled.div`
display: flex;
justify-content:space-between;
align-items:center;
width:100%;`;
const Text = styled.div`
width:20px;
height:30px;`;

export default class Bottom extends Component {
  render() {
    return (
      <Container>
          <Header>
              <div>
            Join Us
            </div>
            <div>
                Checkin
            </div>
          </Header>
          <Wrapper>
                <BlueDiv>
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        Mentee
                    </Text>
                </BlueDiv>
                <BlueDiv>
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        Mentor
                    </Text>
                </BlueDiv>
                <BlueDiv>
                    <Pic src={"./img/profile2.jpg"} alt="pic1"/>
                    <Text>
                        Mentee
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
