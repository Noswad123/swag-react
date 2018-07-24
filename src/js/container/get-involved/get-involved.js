import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import AboveFold from "./above-fold";
import Bottom from "./bottom";
import Navbar from "../../component/navbar"

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
        <AboveFold/>
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
