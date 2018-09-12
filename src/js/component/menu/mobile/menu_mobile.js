import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../../js/style/styles";
import onClickOutside from 'react-onclickoutside'
import DynamicContent from "./dynamic-content";

const Container = styled.div`
  margin-top: ${Styles.size.xxl};
  color: ${Styles.color.primary};
  font-size: 15px;
  position: fixed;
  top: 20%;
  left: 85px;
  z-index:9000;
  
`;
const Header = styled.span`
  transform-origin: 50%;
  display:flex;
  align-items:end;
  flex-direction:column;
  justify-content:center;
  position: absolute;
  right: 10px;
  top: 20%;
`;

const QuickMenu = styled.div`
  background-color: ${Styles.color.accent};
  width: 250px;
  height: 120px;
  position: absolute;
  top: -200px;
  left: -300px;
  transition: all 1s; 
  border: white solid;
  >div{
    display:none;
  }
  &:hover {
    left:-90px;
    height:300px;
    >span{
      display:none;
    }
    >div{
      display:flex;
    }
  }
`;
const Letter = styled.span``
class MobileMenu extends Component {
  expandMenu(){
    var menu = document.getElementById("menu");
    menu.style.display="flex";
  }

  handleClickOutside() {
    
      var menu = document.getElementById("menu");
    menu.style.display="none";
    
  }
  render() {
    return (
      <Container clickedOther={this.props.clicked} onClick={()=>this.expandMenu()}>
        <QuickMenu>
          <DynamicContent/> 
        
          <Header>
            <Letter>M</Letter>
            <Letter>E</Letter>
            <Letter>N</Letter>
            <Letter>U</Letter>
          </Header>
        </QuickMenu>
      </Container>
    );
  }
}

export default onClickOutside(MobileMenu);
