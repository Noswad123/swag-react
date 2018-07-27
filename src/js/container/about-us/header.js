import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import { Link } from "react-router-dom";
import Mission from "./mission";

const Container = styled.div`
  width:100%;
`;
const Wrapper = styled.div`
  min-height:90vh;
  width: 100%;
  z-index:0;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${Styles.color.font1};
  a {
    color: ${Styles.color.accent};
    &:hover{
      color:${Styles.color.contrast};
    }
  }
  //background:url(./img/meet-the-team_orig.jpg);
  background-size:contain;
  background-repeat:no-repeat;
  background-attachment: fixed;
  background-position:center;
  position:relative;
  padding:50px 0 0 0;
`;
const Title = styled.div`
  font-size:80px;
  font-family:${Styles.font.title};
  font-weight:700;
  @media (max-width: 470px) {
    font-size:60px;
  }
  @media (max-width: 370px) {
    font-size:40px;
  }
`;
const LinkWrapper = styled.div`
  a {
    margin-right: 20px;
  }
  @media (max-width: 370px) {
    font-size:15px;
  }
`;
const Text = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-transform: uppercase;
  font-family:${Styles.font.title};
  padding:20px;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
          <Wrapper>
            <Text>
              <Title>
                {this.props.isEng ? "Who We Are" : "Quien Somos"}
              </Title>
              <LinkWrapper>
                <Link to="/meet">
                  {this.props.isEng ? "Meet the team" : "Conozca el equipo"}
                </Link>
                <Link to="/contactus">
                  {this.props.isEng ? "Contact us" : "Contáctenos"}
                </Link>
              </LinkWrapper>
            </Text>
            <Mission isEng={this.props.isEng}/>
            <div></div>
          </Wrapper>
      </Container>
    );
  }
}
