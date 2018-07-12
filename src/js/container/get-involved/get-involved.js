import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Header from "./header";
import Bottom from "./bottom";
import Navbar from "../../component/header"

const Container = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction:column;
  align-items:center;
  width:100%;
`;

class GetInvolved extends Component {

  render() {
    return (
      <Container>
        <Navbar/>
        <Header/>
        <Bottom/>
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
export default connect(mapStateToProps, mapDispatchToProps)(GetInvolved);
