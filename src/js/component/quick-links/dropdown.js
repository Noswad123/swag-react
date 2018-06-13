import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
//import { connect } from "react-redux";


const Container = styled.div`
  display:flex;
  color: ${Styles.color.font1};
  flex-direction: column;
  align-items: center;
  &:hover{
    >ul{
      display:inline
    }
}
    ul{
        display:none;
    }
`;
const Header = styled.span``
const Menu=styled.ul``

class DropDown extends Component {
    render() {
        return (
            <Container>
                   <Header> {this.props.Selected.name}</Header>
                    <Menu>
                        
                        <li> HS Mentee</li>
                        <li>College Mentee</li>
                        <li>College Mentor</li>
                        <li>Young Professional</li>
                    </Menu>
            </Container>
        )
    }
}
export  default DropDown;