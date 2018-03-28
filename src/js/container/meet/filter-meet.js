import styled from "styled-components";
import React, { Component } from "react";
import Styles from "../../style/styles";

const Container = styled.li`
  height: 32px;
  display: inline-block;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 0;
  &:hover {
    border-bottom: solid ${Styles.color.tertiary};
    color: ${Styles.color.tertiary};
    cursor: pointer;
  }
`;

export default class FilterOption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  update() {
    if (this.props.filterName === this.props.current) {
      return { borderBottom: "solid #266FF0" };
    }
  }
  render() {
    return (
      <Container
        onClick={() => this.props.changeFilter(this.props.filterName)}
        style={this.update()}
      >
        {this.props.filterName}
      </Container>
    );
  }
}
