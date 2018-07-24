import React, { Component } from "react";
import styled from "styled-components";
import CoreValues from "./core-value";
import Story from "./story";
import Header from "./header";
import { connect } from "react-redux";
import Styles from "../../style/styles";
import Navbar from "../../component/navbar"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:${Styles.color.secondary};
`;

class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Header isEng={this.props.isEng}/>
        <Story isEng={this.props.isEng}/> 
        <CoreValues isEng={this.props.isEng} />
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
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
