
import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../style/styles';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import logo from "../../images/swag-logo-white.png"
const Container = styled.div `
  min-height:20vh;
  width:90%;
  color:${Styles.color.lightFont};
  background-color:${Styles.color.primary};
  display: flex;
  align-items:center;
  justify-content:space-between;
  position:relative;
`
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
  display:flex;
  flex-direction:column;
 height:50px;
`
const Links = styled.ul`
  list-style: none;
  height:100%;
  li{
    display: inline-block;
    color:white;
    font-size:20px;
    margin-right:20px;
    padding: 5px;
    height:100%;
   
  &:hover{
    
    a{
      color:${Styles.color.accent};
      border-bottom:solid ${Styles.color.accent};
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



class HeaderParalax extends Component {
  render() {
    return ( 
      < Container style={{
        background:`url(${this.props.background})`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
        }}> 
        <Link to="/">
          <Logo src={logo} alt="SWAG" />
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
          </Wrapper>
        </RightSide>
    </ Container >);
  }
}

const mapStateToProps = state => {
  return {isEng: state.LangReducer.isEng}
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateLang: () => {
      const action = {
        type: "UPDATE_LANG",
        payload: false
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderParalax);