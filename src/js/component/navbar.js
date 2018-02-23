import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`
background-color: #09335D;
    height: 50px;
    margin: 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 40px;
  }
`
const Links=styled.ul`
list-style: none;
li{
  display: inline-block;
  color:white;
  margin-right:20px;
  padding: 8px;
  border:solid #09335D;
  &:hover{
    border:solid white;
  }
  a{
    color:white;
    text-decoration:none;
  }
}
`

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <img src={"./img/invertswag.png"} alt="SWAG"/>
        <Links>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link  to="/timeline">Timeline</Link>
          </li>
          <li>
            <Link  to="/blog"> Blog</Link>
          </li>
          <li>
            <Link  to="/resources"> Resources</Link>
            </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/getinvolved">Get Involved</Link>      
          </li>
        </Links>
      </Container>
    );
  }
}

