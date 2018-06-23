import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  box-sizing: border-box;
  text-align:center;
  z-index:1;
`;
const Text = styled.div`
  font-family=${Styles.font.text};
`
export default class Mission extends Component {
  render() {
    return (
      <Container>
        <Text>
          {
            this.props.isEng
            ? "Our mission is to provide near-peer mentorship for underserved high school and college students to help them matriculate to college, graduate from college, and enter the workforce."
            : "Need translation"
          }
        </Text>
      </Container>
    )
  }
}