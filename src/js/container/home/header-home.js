import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";

const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: ${Styles.size.l};
  color: ${Styles.color.primary};
  margin-top: ${Styles.size.xs};
  font-family: ${Styles.font.text};
`;

const Text = styled.p`
  font-size: ${Styles.size.s};
  color: ${Styles.color.font2};
  margin-top: ${Styles.size.xs};
  text-align: center;
  font-family: ${Styles.font.text};
`;
export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.lang ? "Welcome" : "Bienvenidos"}</Title>
        <Text>
          {this.props.lang
            ? "Our vision is to close the achievement gap and ensure every underserved high school and college student has a pathway to reach their goals."
            : "Nuestro vision es cierrar la brecha del rendimiento y asegurar cada estudiante de la escuela secundario desatendido y del colegio tiene una manera para obtener sus metas"}
        </Text>
      </Container>
    );
  }
}
