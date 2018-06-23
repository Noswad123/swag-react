import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
import DynamicContent from "./dynamic-content";
const Container = styled.div`
  display:flex;
  color: ${Styles.color.font1};
  flex-direction: column;
  align-items: center;
    
`;
const DropDown = styled.span`
padding:5px;
z-index:1;
&:hover{
    >ul{
      display:inline
    }
    span{
        color:${Styles.color.blue};
        cursor:pointer
    }
    }
`
const Menu=styled.ul`
    padding:25px 25px 25px 30px;
    display:none;
    list-style:none;
    position:absolute;
    background-color:${Styles.color.primary};
   left:0px;
   top:10px;
  
    li{
        &:hover{
            background-color:${Styles.color.blue};
            cursor:pointer;
        }
    }
`

class DropDownMenu extends Component {
    render() {
        return (
            <Container>
                   <DropDown> I am a {this.props.involvement}
                        <Menu>
                            <li onClick={()=>{this.props.changeInvolvement("HS Mentee")}}> HS Mentee</li>
                            <li onClick={()=>{this.props.changeInvolvement("College Mentee")}}>College Mentee</li>
                            <li onClick={()=>{this.props.changeInvolvement("College Mentor")}}>College Mentor</li>
                            <li onClick={()=>{this.props.changeInvolvement("Young Professional")}}>Young Professional</li>
                            <li onClick={()=>{this.props.changeInvolvement("Parent")}}>Parent</li>
                            <li onClick={()=>{this.props.changeInvolvement("School Administrator")}}>School Administrator</li>
                            <li onClick={()=>{this.props.changeInvolvement("Community Member")}}>Community Member</li>
                            <li onClick={()=>{this.props.changeInvolvement("Other")}}>Other</li>
                        </Menu>
                    </DropDown>
                    <DynamicContent involvement={this.props.involvement}/>
            </Container>
        )
    }
}
export  default DropDownMenu;