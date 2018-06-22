import React, { Component } from "react";
import styled from "styled-components";
import CoreValues from "./core-value";
import Story from "./story";
import Header from "./header";
import { connect } from "react-redux";
import Paralax from "../../component/paralax";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
`;

class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Story /> 
        <CoreValues lang={this.props.isEng} />
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
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
