import styled from "styled-components";
import React, { Component } from "react";
import Styles from "../../style/styles";
import Options from "./options-content";

const Container = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-column-end: 6;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:100px;
`;

const Title = styled.div`
  color: ${Styles.color.primary};
  font-size: 35px;
  font-weight: 700;
`;
const Picture = styled.img`
  max-width: 800px;
`;

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Title> {this.props.data.level}</Title>
        <Picture src={this.props.data.imgUrl} alt="Pictur" />
        <p>{this.props.data.blurb}</p>
        {this.props.data.options.map((item, index) => {
          return <Options key={index} data={item} />;
        })}
      </Container>
    );
  }
}
