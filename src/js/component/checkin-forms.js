import React, { Component } from "react";
import styled from "styled-components";
import Checkins from "../data/checkin.data";

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  color: black;
  margin: 30px;
  padding: 50px;
`;

export default class Checkin extends Component {
  render() {
    return (
      <Container>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSej1oFprythRVlmYMeDvyWY9qp28lIgQNDPUlZD89FNrnlnQw/viewform?embedded=true"
          width="760"
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </Container>
    );
  }
}
