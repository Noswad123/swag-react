import React, { Component } from "react";
import styled from "styled-components";
import CoreValues from "./core-value";
import Story from "./story";
import Header from "./header";
import Mission from "./mission";
import { connect } from "react-redux";

const Container = styled.div`
  min-height: 100vh;
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
        <CoreValues lang={this.props.isEng} />
        <Mission lang={this.props.isEng}/>
        <Story />
        
        
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
