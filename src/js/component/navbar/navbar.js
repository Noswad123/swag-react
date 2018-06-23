import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styles from "../../style/styles";
import { connect } from "react-redux";

import LangToggle from "./lang-toggle";

const Container = styled.div`
  background-color: ${Styles.color.primary};
  color: ${Styles.color.secondary};
  height: 80px;
  width: 100%;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  box-sizing: border-box;
  box-shadow: -1px 10px 10px 0px rgba(0,0,0,0.45);    
  position:fixed;
  
  transition: all 1s cubic-bezier(0.67,-0.62, 0.86, 0.89);
  @media (max-width: 1069px) {
    height: 80px;
  }
  position:fixed;
  z-index:9999;
`;
const Logo = styled.img`
  height: 40px;
  @media (max-width: 1069px) {
    height: 30px;
  }
`;
const RightSide=styled.div`
  display:flex;
  align-items:center;
`
const Wrapper=styled.div`
  display:flex;
  flex-direction:column;
`
const Links = styled.ul`
  list-style: none;
  height:100%;
  li{
    display: inline-block;
    color:white;
    font-size:12px;
    margin-right:20px;
    padding: 5px;
    height:100%;
    border-bottom:solid ${Styles.color.primary};
  &:hover{
    border-bottom:solid ${Styles.color.accent};
    a{
      color:${Styles.color.accent};
    }
  }
  a{
    color:${Styles.color.font1};
    text-decoration:none;
  }
  @media (max-width: 1069px) {
    display:none;
  }
`;


const HideMenu = styled.div`
transform: rotate(270deg);
font-size:15px;
cursor:pointer;
`;
const ShowMenu = styled.div`
  transform:translateX(-100px);
  cursor:pointer;
  color:${Styles.color.subtitle};
  height:30px;
  width:30px;
  justify-content:center;
  align-items: center;
  background-color:${Styles.color.primary};
  opacity:.8;
  transition: all .5s;
  &:hover{
    opacity:1;
  }
  img{
    height:50px;
  }
  @media (max-width:400px){
    transform:translateX(-50px);
  }

`;

class Navbar extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      isMenu: false,
      isHidden: false
    };
  }
  hideMenu() {
    this.setState({
      isMenu: false
    });
  }
  toggleNav(bool) {
    this.setState({ isHidden: bool });
    console.log(this.state.isHidden);
  }
  
  render() {
    return (

        <NavWrapper
        show={this.state.isHidden}
        toggle={this.toggleNav.bind(this)}
        isEng = {this.props.isEng}
        menu={this.props.isMenu}
        hideMenu={this.hideMenu}
      />

    )
  }
}


class NavWrapper extends React.Component {
  render() {
    return (
      <Container style={{transform: `${this.props.show ? "translateX(100%)" : "translateX(0%)" }` }}>
        <ShowMenu style={{ display: `${this.props.show ? "flex" : "none"}` }}  onClick={() => { this.props.toggle(false); }} >
          <img src={"./img/hamburger.png"} alt="hamburger" />
        </ShowMenu>

        <Link to="/">
          <Logo src={"./img/invertswag.png"} alt="SWAG" />
        </Link>
        <RightSide>
          <Wrapper>
            <Links>
              <li>
                <Link to="/aboutus">
                  {this.props.isEng ? "About" : "Sobre Nosotros"}
                </Link>
              </li>
              <li>
                <Link to="/getinvolved">
                  {this.props.isEng ? "Get Involved" : "Involucrarse"}
                </Link>
              </li>
              <li>
                <Link to="/resources">
                  
                  {this.props.isEng ? "Resources" : "Recrusos"}
                </Link>
              </li>
              <li>
                <a href="https://medium.com/@swagtocollege"  rel="noopener noreferrer" target="_blank">
                  {this.props.isEng ? "Blog" : "Blog"}
                </a>
              </li>
              <li>
                <Link to="/donate">
                  {this.props.isEng ? "Donate" : "needs translation"}
                </Link>
              </li>      
            </Links>
        
          <LangToggle isEng={this.props.isEng}/>
          </Wrapper>
        <HideMenu
          onClick={() => {
            this.props.toggle(true);
          }}
        >
          hide
        </HideMenu>
        </RightSide>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEng: state.LangReducer.isEng
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
