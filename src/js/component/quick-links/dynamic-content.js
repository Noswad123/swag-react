import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
import { Link} from 'react-router-dom';

const Container = styled.div`
  color: ${Styles.color.font1};
`;

const LinkList =styled.ul`
margin-top:300px;
a{
    color:${Styles.color.font1};
    text-decoration:none;
}
`
export default class DynamicContent extends Component {
    render() {
        return (
            <Container>
                <LinkList style={{display:`${(this.props.involvement==="HS Mentee")?"initial":"none"}`}}>
                    <li>
                        <Link to="/checkin">Checkin Form</Link>
                    </li>
                    <li>  
                        <Link to="/timeline">Timeline</Link>
                    </li>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="College Mentee")?"initial":"none"}`}}>
                    <li>
                        <Link to="/checkin">Checkin Form</Link>
                    </li>
                
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="College Mentor")?"initial":"none"}`}}>
                <li>
                        <Link to="/checkin">Checkin Form</Link>
                    </li>
                    <li>  
                        <Link to="/timeline">Timeline</Link>
                    </li>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="Young Professional")?"initial":"none"}`}}>
                <li>
                        <Link to="/checkin">Checkin Form</Link>
                    </li>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="Parent")?"initial":"none"}`}}>
                <li>  
                        <Link to="/timeline">Timeline</Link>
                    </li>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="School Admin")?"initial":"none"}`}}>
                <li>
                        <Link to="/aboutus">Get to know us Better</Link>
                    </li>
                    <li>
                        <Link to="/getinvolved">Learn more</Link>
                    </li>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="Community Member")?"initial":"none"}`}}>
                    <li>
                        <Link to="/aboutus">Get to know us Better</Link>
                    </li>
                    <li>
                        <Link to="/getinvolved">Learn more</Link>
                    </li>
                </LinkList>
                <LinkList style={{display:`${(this.props.involvement==="Other")?"initial":"none"}`}}>
                    <li>
                        <Link to="/aboutus">Get to know us Better</Link>
                    </li>
                    <li>
                        <Link to="/getinvolved">Learn more</Link>
                    </li>
                </LinkList>
                
            </Container>
        )
    }
}