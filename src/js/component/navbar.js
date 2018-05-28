import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styles from "../style/styles";
import { connect } from "react-redux";

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
`;
const Logo = styled.img`
  height: 40px;
  @media (max-width: 1069px) {
    height: 30px;
  }
`;
const Links = styled.ul`
list-style: none;
height:100%;
li{
  display: inline-block;
  color:white;
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
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .toggle {
    display: none;
  }

  @media (max-width: 1069px) {
    .social {
      display: none;
    }
    .toggle {
      display: block;
      cursor: pointer;
    }
  }
`;

const SwitchWrap = styled.div`
  background-color: ${Styles.color.tertiary};
  cursor: pointer;
  text-align: center;
  width: 120px;
  box-sizing: border-box;
  filter: brightness(80%);
  transition: all 1s;
  &:hover {
    filter: brightness(100%);
  }
  border-radius: 10px;
  position: relative;
  padding: 5px 20px;
`;

const Switch = styled.div`
  background-color: black;
  cursor: pointer;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
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
const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin: 20px;
  }
`;

const Close = styled.div`
  float: right;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggleLang = this.toggleLang.bind(this);
    this.state = {
      isEng: props.isEng,
      switchPos: { transform: "translateX(100px)" },
      isMenu: false
    };
  }

  toggleLang() {
    var opp = !this.state.isEng;
    this.props.onUpdateLang();
    this.setState({
      isEng: opp,
      switchPos: this.state.isEng
        ? { transform: "translateX(-10px)" }
        : { transform: "translateX(100px)" }
    });
  }
  hideMenu() {
    this.setState({
      isMenu: false
    });
  }
  showMenu() {
    this.setState({
      isMenu: true
    });
  }
  render() {
    return (
      <Container>
        <Link to="/">
          <Logo src={"./img/invertswag.png"} alt="SWAG" />
        </Link>
        <Links>
          <li>
            <Link to="/timeline">
              {this.state.isEng ? "Timeline" : "Linea del Tiempo"}
            </Link>
          </li>
          <li>
            <Link to="/getinvolved">
              {this.state.isEng ? "Get Involved" : "Involucrarse"}
            </Link>
          </li>
          <li>
            <Link to="/resources">
              {" "}
              {this.state.isEng ? "Resources" : "Recrusos"}
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              {this.state.isEng ? "About Us" : "Sobre Nosotros"}
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

        <Icons>
          <Toggle
            toggleLang={this.toggleLang}
            switch={this.state.switchPos}
            lang={this.state.isEng ? "English" : "Spanish"}
          />

          <MenuToggle click={this.showMenu.bind(this)} />
        </Icons>
      </Container>
    );
  }
}
class MobileLinks extends Component {
  render() {
    return (
      <Mobile onClick={this.props.click}>
        <Close>X</Close>
        <Link to="/">{this.props.lang ? "Home" : "Need Translation"}</Link>
        <Link to="/timeline">
          {this.props.lang ? "Timeline" : "Linea del Tiempo"}
        </Link>
        <Link to="/getinvolved">
          {this.props.lang ? "Get Involved" : "Involucrarse"}
        </Link>
        <Link to="/resources">
          {" "}
          {this.props.lang ? "Resources" : "Recrusos"}
        </Link>
        <Link to="/aboutus">
          {this.props.lang ? "About Us" : "Sobre Nosotros"}
        </Link>
      </Mobile>
    );
  }
}

class MenuToggle extends Component {
  render() {
    return (
      <img
        onClick={this.props.click}
        style={{ height: "50px" }}
        className="toggle"
        src={"./img/hamburger.png"}
        alt="hamburger"
      />
    );
  }
}
class Toggle extends Component {
  render() {
    return (
      <div>
        <SwitchWrap onClick={() => this.props.toggleLang()}>
          {this.props.lang}
          <Switch style={this.props.switch} />
        </SwitchWrap>
      </div>
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
