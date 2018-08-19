import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
import { Link} from 'react-router-dom';
import LangToggle from "./lang-toggle";
import logo from "../../../images/swag-logo-white.png";

const Container = styled.div`
    color: ${Styles.color.font1};
    height:100%;
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
`;
const SWAGLogo =styled.img`

height:30px;
@media (max-width: 720px) {
    display:initial;
    bottom:30%;
}
`
const LinkList =styled.div`
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width:100%
    text-decoration:none;
    color:${Styles.color.primary};
   
    a{
        color:${Styles.color.primary};
        text-decoration:none;
        font-size:15px;
        margin-bottom:10px;
        border-bottom:solid ${Styles.color.accent};
        &:hover{
            color:${Styles.color.contrast};
            border-bottom:solid ${Styles.color.contrast};
        }
    }
`
export default class DynamicContent extends Component {
    render() {
        return (
            <Container>
                <Link to="/"><SWAGLogo src={logo}/></Link>
                <LinkList >
                
                    <Link to="/aboutus">About</Link>
                    <Link to="/getinvolved">Get Involved</Link>
                    <Link to="/timeline">Timeline</Link> 
                    <a href="https://medium.com/@swagtocollege"  rel="noopener noreferrer" target="_blank">Blog</a>
                    <Link to="/donate">Donate</Link>

                    <Link to="/checkin">Checkin Form</Link>
                    <LangToggle/>                
                </LinkList>
            </Container>
        )
    }
}