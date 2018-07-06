import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styles from "../../style/styles";
import { connect } from "react-redux";

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color:${Styles.color.lightFont};
  a {
    margin: 20px;
  }
`;

const Close = styled.div`
  float: right;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
class MobileLinks extends Component {
    render() {
      return (
        
        <Mobile onClick={this.props.click}>
          <Close>X</Close>
          <Link to="/">{this.props.lang ? "Home" : "Need Translation"}</Link>
          <Link to="/timeline">
            {this.props.lang ? "Timeline" : "Linea del Tiempo"}
          </Link>
          <Link to="/getinvolved">
            {this.props.lang ? "Get Involved" : "Involucrarse"}
          </Link>
          <Link to="/resources">
            {" "}
            {this.props.lang ? "Resources" : "Recrusos"}
          </Link>
          <Link to="/aboutus">
            {this.props.lang ? "About Us" : "Sobre Nosotros"}
          </Link>
        </Mobile>
        
      );
    }
  }
  const mapStateToProps = state => {
    return {
      isEng: state.isEng
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
  export default connect(mapStateToProps, mapDispatchToProps)(MobileLinks)