import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
import { Link} from 'react-router-dom';
import LangToggle from "./lang-toggle";

const Container = styled.div`
    color: ${Styles.color.font1};
    height:100%;
 
    display:flex;
    justify-content: center;
    align-items:center;
`;

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