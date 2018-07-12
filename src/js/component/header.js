import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styles from "../style/styles";
import { connect } from "react-redux";
import logo from "../../images/swag-logo-white.png";

const Container = styled.div`
color: ${Styles.color.secondary};
height: 80px;
width: 100%;
margin: 0;
padding: 20px;
display: flex;
justify-content: space-between;
text-transform: uppercase;
align-items: center;
box-sizing: border-box; 

@media (max-width: 1069px) {
  height: 80px;
}
@media (max-width: 715px) {
  flex-direction:column;
  justify-content:center;
  height: 300px;
}
@media (max-width: 369px) {
  padding:0px;
}
z-index:8000;
`;
const Logo = styled.img`
  height: 40px;
  @media (max-width: 1069px) {
    height: 30px;
  }
`;
const RightSide=styled.div`
  display:flex;
  align-items:center;
  @media (max-width: 715px) {
    flex-direction: column;
  }
`

const Links = styled.ul`
  list-style: none;
  height:100%;
  li{
    display: inline-block;
    color:white;
    font-size:12px;
    margin-right:20px;
    padding: 5px;
    height:100%;
  &:hover{
    border-bottom:solid ${Styles.color.accent};
    a{
      color:${Styles.color.accent};
    }
  }
  a{
    color:${Styles.color.lightFont};
    text-decoration:none;
  }
}
  @media (max-width: 715px) {
    li{
      display:list-item;
    }
  }
`;

class HomeHeader extends React.Component {
  render() {
    return (
      <Container >
        <Link to="/">
          <Logo src={logo} alt="SWAG" />
        </Link>
        <RightSide>
            <Links>
              <li>
                <Link to="/aboutus">
                  {this.props.isEng ? "About" : "Sobre Nosotros"}
                </Link>
              </li>
              <li>
                <Link to="/getinvolved">
                  {this.props.isEng ? "Get Involved" : "Involucrarse"}
                </Link>
              </li>
              <li>
                <Link to="/timeline">
                  
                  {this.props.isEng ? "Timeline" : "Linea del Tiemp"}
                </Link>
              </li>
              <li>
                <a href="https://medium.com/@swagtocollege"  rel="noopener noreferrer" target="_blank">
                  {this.props.isEng ? "Blog" : "Blog"}
                </a>
              </li>
              <li>
                <Link to="/donate">
                  {this.props.isEng ? "Donate" : "needs translation"}
                </Link>
              </li>      
            </Links>
        </RightSide>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEng: state.LangReducer.isEng
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
