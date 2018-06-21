import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Container = styled.div`
   min-height:100vh;
   width:100%;
   display:flex;
   flex-direction: column;
  align-items: center;
  
`;
const Wrapper = styled.div`
    z-index:0;
    position:fixed;
  display: flex;
  width: 100%;
  margin-top:20px;
  flex-direction: column;
  align-items: center;
  height:100%;
  color: ${Styles.color.secondary};
  
  a {
    color: ${Styles.color.tertiary};
  }
  justify-content: space-between;
`;
const Title = styled.div`
    font-size:${Styles.size.l};
    font-family:${Styles.font.title};
`;
const LinkWrapper = styled.div`
  a {
    margin-right: 20px;
  }
`;

const Mission = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-between;
  padding: 50px;
  width: 60%;
  box-sizing: border-box;
  text-align:center;
`;
const Title2 = styled.div`
font-size:${Styles.size.m};
`;
const Background =styled.img`
    height:300px;
    
`
class Header extends Component {
  render() {
    return (
      <Container>
          <Wrapper>
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
          <Mission>
          <Title2>
            {this.props.isEng ? "Mission Statement" : "estado de la misión"}
          </Title2>
         
            <p>
              {this.props.isEng
                ? "Our mission is to provide near-peer mentorship for underserved high school and college students to help them matriculate to college, graduate from college, and enter the workforce."
                : "Need translation"}
            </p>
          
        </Mission>
        <Background src={"./img/meet-the-team_orig.jpg"}/>     
          </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEng: state.isEng
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateLang: () => {
      const action = { type: "UPDATE_LANG", payload: false };
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
