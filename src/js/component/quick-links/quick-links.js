import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
import { connect } from "react-redux";

import Options from "../../data/quick-link.data";
import DropDown from "./dropdown";
import Links from "./links";

const Container = styled.div`
  margin-top: ${Styles.size.xxl};
  color: black;
  font-size: 15px;
  position: fixed;
  top: 20%;
  left: -20px;
`;
const Header = styled.span`
  transform-origin: 50%;
  transform: rotate(90deg);
  position: absolute;
  right: -20px;
  top: 30%;
`;

const QuickMenu = styled.div`
  background-color: ${Styles.color.primary};
  color: ${Styles.color.font1};
  width: 300px;
  height: 120px;
  position: absolute;
  top: -200px;
  left: -250px;
  transition: all 1s; 

  &:hover {
    left: 20px;
    height:400px;
    >span{
      display:none;
    }
    
  }
`;

class QuickLinks extends Component {
  constructor(props){
    super(props);
    this.state = {placeholder:0};
  }
  change(index){
      this.setState({placeholder:index});
  }
  render() {
    return (
      <Container>
        <QuickMenu>
          <DropDown Selected={Options[this.state.placeholder]} change={this.change} options={Options}/>
          <Links links={Options[this.state.placeholder].links}/>     
          <Header>Quick Links</Header>
        </QuickMenu>
      </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(QuickLinks);
