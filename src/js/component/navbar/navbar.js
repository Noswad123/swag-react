import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styles from "../../style/styles";
import { connect } from "react-redux";
import logo from "../../../images/swag-logo-white.png";
import hamburger from"../../../images/hamburger.png";
import LangToggle from "./lang-toggle";
import CircleArrow from "../../../images/circle-arrow.png"

const Container = styled.div`
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

transition: all 1s cubic-bezier(0.67,-0.62, 0.86, 0.89);
@media (max-width: 1069px) {
  height: 80px;
}
@media (max-width: 715px) {
  flex-direction:column;
  justify-content:center;
  height: 300px;
}
@media (max-width: 369px) {
  padding:0px;
}
position:fixed;
z-index:8000;
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
  @media (max-width: 715px) {
    flex-direction: column;
  }
`
const Wrapper=styled.div`
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

transition: all 1s cubic-bezier(0.67,-0.62, 0.86, 0.89);
@media (max-width: 1069px) {
  height: 80px;
}
@media (max-width: 715px) {
  flex-direction:column;
  justify-content:center;
  height: 300px;
}
@media (max-width: 369px) {
  padding:0px;
}
position:fixed;
z-index:8000;
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
    color:${Styles.color.lightFont};
    text-decoration:none;
  }
}
  @media (max-width: 715px) {
    li{
      display:list-item;
    }
  }
`;

const CollapseMenu = styled.div`
  font-size:25px;
  cursor:pointer;
  margin-left:20px;
  color:${Styles.color.lightFont};
  &:hover{
    color:${Styles.color.accent};
  }
  @media (max-width: 715px) {
    position:absolute;
    right:20px;
    top:20px;
  }
`;
const HamburgerMenu = styled.div`
  cursor:pointer;
  color:${Styles.color.lightFont};
  height:30px;
  width:30px;
  justify-content:center;
  align-items: center;
  background-color:${Styles.color.primary};
  opacity:.8;
  position:relative;
  right:50px;
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
      isHidden: true
    };
  }
  hideMenu() {
    this.setState({
      isMenu: false
    });
  }
  toggleNav(bool) {
    this.setState({ isHidden: bool });
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
      <Container >
        <HamburgerMenu style={{ display: `${this.props.show ? "flex" : "none"}` }}  onClick={() => { this.props.toggle(false); }} >
          <img src={hamburger} alt="hamburger" />
        </HamburgerMenu>

        <Wrapper style={{transform: `${this.props.show ? "TranslateX(100%)" : "TranslateX(100%)" }` }}>
        <Link to="/">
          <Logo src={logo} alt="SWAG" />
        </Link>
        <RightSide>
          
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
                <Link to="/timeline">
                  
                  {this.props.isEng ? "Timeline" : "Linea del Tiemp"}
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
          
        <CollapseMenu
          onClick={() => {
            this.props.toggle(true);
          }}
        >
          <img src={CircleArrow} alt="circle arrow" style={{height: 40}}/>
        </CollapseMenu>
        </RightSide>
        </Wrapper>
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
