import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styles from "../../style/styles";
import { connect } from "react-redux";
import MobileLinks from "./mobile-links";
import LangToggle from "./lang-toggle";

const Container = styled.div`
  background-color: ${Styles.color.primary};
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
  position:fixed;
  z-index:10;
`;
const Logo = styled.img`
  height: 40px;
  @media (max-width: 1069px) {
    height: 30px;
  }
`;
const RightSide=styled.div`
  display:flex;
  flex-direction:column;
  align-items:end;
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
    border-bottom:solid ${Styles.color.primary};
  &:hover{
    border-bottom:solid ${Styles.color.accent};
    a{
      color:${Styles.color.accent};
    }
  }
  a{
    color:${Styles.color.font1};
    text-decoration:none;
  }
  @media (max-width: 1069px) {
    display:none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  width: 100%;
  background-color: ${Styles.color.primary};
  color: white;
  padding: 20px;
  box-sizing: border-box;
  a {
    color: white;
    text-decoration: none;
  }
  @media (max-width: 1069px) {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    flex-direction: column;
    justify-content: center;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      isEng: props.isEng,
      isMenu: false
      
    };
  }
  hideMenu() {
    this.setState({
      isMenu: false
    });
  }
  
  
  render() {
    return (
      <Container>
        <Link to="/">
          <Logo src={"./img/invertswag.png"} alt="SWAG" />
        </Link>
        <RightSide>
          <Links>
            <li>
              <Link to="/aboutus">
                {this.state.isEng ? "About" : "Sobre Nosotros"}
              </Link>
            </li>
            <li>
            <Link to="/getinvolved">
              {this.state.isEng ? "Get Involved" : "Involucrarse"}
            </Link>
            </li>
            <li>
              <Link to="/resources">
                
                {this.state.isEng ? "Resources" : "Recrusos"}
              </Link>
            </li>
            <li>
              <a href="https://medium.com/@swagtocollege"  rel="noopener noreferrer" target="_blank">
                {this.state.isEng ? "Blog" : "Blog"}
              </a>
            </li>
            <li>
              <Link to="/donate">
                {this.state.isEng ? "Donate" : "needs translation"}
              </Link>
            </li>      
         
          <MobileMenu
            style={{ display: `${this.state.isMenu ? "block" : "none"}` }}
          >
            <MobileLinks
              click={this.hideMenu.bind(this)}
              lang={this.state.isEng}
            />
          </MobileMenu>
        </Links>

          <LangToggle lang={this.state.isEng}/>
        </RightSide>
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
