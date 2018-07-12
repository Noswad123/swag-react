import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
import { Link} from 'react-router-dom';

const Container = styled.div`
  color: ${Styles.color.font1};
  height: 100%
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
        margin-bottom:30px
    }
`
export default class DynamicContent extends Component {
    render() {
        return (
            <Container>
                <LinkList style={{display:`${(this.props.involvement==="HS Mentee")?"flex":"none"}`}}>
                    <Link to="/checkin">Checkin Form</Link>
                    <Link to="/timeline">Timeline</Link> 
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="College Mentee")?"flex":"none"}`}}>
                        <Link to="/checkin">Checkin Form</Link>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="College Mentor")?"flex":"none"}`}}>
                    <Link to="/checkin">Checkin Form</Link>
                    <Link to="/timeline">Timeline</Link>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="Young Professional")?"flex":"none"}`}}>
                    <Link to="/checkin">Checkin Form</Link>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="Parent")?"flex":"none"}`}}>
                    <Link to="/timeline">Timeline</Link>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="School Admin")?"flex":"none"}`}}>
                    <Link to="/aboutus">Get to know us Better</Link>
                    <Link to="/getinvolved">Learn more</Link>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="Community Member")?"flex":"none"}`}}>
                    <Link to="/aboutus">Get to know us Better</Link>
                    <Link to="/getinvolved">Learn more</Link>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="Other")?"flex":"none"}`}}>
                    <Link to="/aboutus">Get to know us Better</Link>
                    <Link to="/getinvolved">Learn more</Link>
                </LinkList>
            </Container>
        )
    }
}