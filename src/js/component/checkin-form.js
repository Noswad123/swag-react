import React, { Component } from "react";
import styled from "styled-components";
import Checkins from "../data/checkin.data";

const Container = styled.div`
  width: 80vw;

  background-color: pink;
  color: black;
  margin: 30px;
`;

export default class Checkin extends Component {
  constructor() {
    super();
    this.state = {
      x: 4,
      form: Checkins[0]
    };
  }
  makeForm(question, index) {
    switch (question.type) {
      case "input":
        return <div key={index}>{question.question}</div>;
      case "Selection Other":
        return <div key={index}>{question.question}</div>;
      case "Selection":
        return <div key={index}>{question.question}</div>;
      case "Multiple":
        return <div key={index}>{question.question}</div>;
      case "Selection Explanation":
        return <div key={index}>{question.question}</div>;
      case "Response":
        return <div key={index}>{question.question}</div>;
      default:
        return;
    }
  }
  render() {
    return (
      <Container>
        <div>{this.state.form.title}</div>
        <p>{this.state.form.instructions}</p>

        <div style={{ minHeight: 500 }}>
          {this.state.form.questions.map((question, index) => {
            return this.makeForm(question, index);
          })}
        </div>
      </Container>
    );
  }
}
