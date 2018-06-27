import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
import { connect } from "react-redux";
import DropDown from "./dropdown";

const Container = styled.div`
  margin-top: ${Styles.size.xxl};
  color: ${Styles.color.font1};
  font-size: 15px;
  position: fixed;
  top: 20%;
  left: 85px;
  z-index:9000;
  
`;
const Header = styled.span`
  transform-origin: 50%;
  display:flex;
  align-items:end;
  flex-direction:column;
  justify-content:center;
  position: absolute;
  right: 10px;
  top: 20%;
  
  
`;

const QuickMenu = styled.div`
  background-color: ${Styles.color.primary};
  width: 250px;
  height: 120px;
  position: absolute;
  top: -200px;
  left: -300px;
  transition: all 1s; 
  border: white solid;
  >div{
    display:none;
  }
  &:hover {
    left:-90px;
    height:300px;
    >span{
      display:none;
    }
    >div{
      display:flex;
    }
  }
`;
const Letter = styled.span``
class QuickLinks extends Component {
  render() {
    return (
      <Container>
        <QuickMenu>
          <DropDown involvement={this.props.involvement} changeInvolvement={this.props.changeInvolvement}/>    
          <Header>
            <Letter>M</Letter>
            <Letter>E</Letter>
            <Letter>N</Letter>
            <Letter>U</Letter>
          </Header>
        </QuickMenu>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEng: state.LangReducer.isEng,
    involvement:state.InvolvementReducer.involvement
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateLang: () => {
      const action = { type: "UPDATE_LANG", payload: false };
      dispatch(action);
    },
    changeInvolvement: (involvement) => {
      const action = { type: "CHANGE_INVOLVEMENT", payload: involvement };
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(QuickLinks);
