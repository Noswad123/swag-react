import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-between;
  padding: 50px;
  width: 60%;
  box-sizing: border-box;
  text-align:center;
`;
const Title = styled.div``
export default class Mission extends Component {
  render() {
    return (
      <Container>
        <Title>
            {this.props.lang ? "Mission Statement" : "estado de la misión"}
        </Title>
        <p>
          {
            this.props.lang
            ? "Our mission is to provide near-peer mentorship for underserved high school and college students to help them matriculate to college, graduate from college, and enter the workforce."
            : "Need translation"
          }
        </p>
      </Container>
    )
  }
}