import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Container = styled.div`
   min-height:30vh;
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
  justify-content:space-between;
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

const Text = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`;
const Background =styled.img`
  height:300px;
`
class Header extends Component {
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
