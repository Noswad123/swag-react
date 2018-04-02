import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../js/style/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: ${Styles.size.xxl};
  color: black;
  font-size: 15px;
  position: fixed;
  top: 20%;
  left: -20px;
`;
const Already = styled.div`
  transform-origin: 50%;
  transform: rotate(90deg);
  position: absolute;
  right: -20px;
  top: 30%;
`;
const QuickMenu = styled.div`
  background-color: green;
  width: 300px;
  height: 120px;
  position: absolute;
  top: -200px;
  left: -250px;
  transition: all 1s;
  &:hover {
    left: 20px;
  }
`;
class Existing extends Component {
  render() {
    return (
      <Container>
        <QuickMenu>
          <ul>
            <li>Sign Up Forms</li>
            <li>
              <Link to="/checkin">Checkin form</Link>
            </li>
          </ul>
          <Already>Quick Links</Already>
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
export default connect(mapStateToProps, mapDispatchToProps)(Existing);
