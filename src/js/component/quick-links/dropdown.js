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
padding:5px 5px 5px 0;
z-index:9800;
span{
    color:${Styles.color.blue};
    cursor:pointer
}
>div{
    font-size:20px;
}
&:hover{
        >ul{
        display:inline
        
        }
        span{
            color:${Styles.color.accent};
        }
    }
`
const Menu=styled.ul`
    padding:20px 0;
    display:none;
    list-style:none;
    position:absolute;
    background-color:${Styles.color.primary};
    box-sizing:border-box;
   left:20px;
   top:15px;
   z-index:9700;
    li{
        padding:5px 10px;
        text-align:center;
        width:100%;
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
                   <DropDown> <div>I am a <span>{this.props.involvement}</span></div>
                        <Menu>
                            <li onClick={()=>{this.props.changeInvolvement("HS Mentee")}}> HS Mentee</li>
                            <li onClick={()=>{this.props.changeInvolvement("College Mentee")}}>College Mentee</li>
                            <li onClick={()=>{this.props.changeInvolvement("College Mentor")}}>College Mentor</li>
                            <li onClick={()=>{this.props.changeInvolvement("Young Professional")}}>Young Professional</li>
                            <li onClick={()=>{this.props.changeInvolvement("Parent")}}>Parent</li>
                            <li onClick={()=>{this.props.changeInvolvement("School Administrator")}}>School Administrator</li>
                            <li onClick={()=>{this.props.changeInvolvement("Community Member")}}>Community Member</li>
                            <li onClick={()=>{this.props.changeInvolvement("Other")}}>Visitor</li>
                        </Menu>
                    </DropDown>
                    <DynamicContent involvement={this.props.involvement}/>
            </Container>
        )
    }
}
export  default DropDownMenu;