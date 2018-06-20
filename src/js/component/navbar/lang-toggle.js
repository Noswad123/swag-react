import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import { connect } from "react-redux";
const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  width:100%;
  .hamburger {
    display: none;
  }
  padding-bottom:20px;
 font-size:12px;
  @media (max-width: 1069px) {
    .social {
      display: none;
    }
    .hamburger {
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
  padding: 2px 15px;
`;

const Switch = styled.div`
  background-color: black;
  cursor: pointer;
  border-radius: 100%;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 0px;
  left: 0;
  transition: all 1s;
`;
class LangToggle extends Component {
    constructor(props) {
        super(props);
        this.toggleLang = this.toggleLang.bind(this);
        this.state = {
          isEng: props.isEng,
          isMenu: false,
          switchPos: { transform: "translateX(100px)" }
          
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
      showMenu() {
        this.setState({
          isMenu: true
        });
    }
    render(){
        return(    
            <Container>
                <Toggle
                toggleLang={this.toggleLang}
                switch={this.state.switchPos}
                lang={this.state.isEng ? "English" : "Spanish"}
                />
                <HamburgerMenu click={this.showMenu.bind(this)} />
            </Container>
        )  
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
  class HamburgerMenu extends Component {
    render() {
      return (
        <img
          onClick={this.props.click}
          style={{ height: "50px" }}
          className="hamburger"
          src={"./img/hamburger.png"}
          alt="hamburger"
        />
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

  export default connect(mapStateToProps, mapDispatchToProps)(LangToggle);