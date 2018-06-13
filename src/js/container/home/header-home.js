import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";

const Container = styled.div`
 
  max-width:50%;
  margin-bottom: 16px;
  margin-top: ${Styles.size.m};
`;


const Text = styled.p`
  font-size: ${Styles.size.s};
  color: ${Styles.color.font2};
  
  text-align: center;
  font-family: ${Styles.font.text};
  margin-top: ${Styles.size.xs};
`;
export default class Header extends Component {
  render() {
    return (
      <Container>
        <Text>
          {this.props.lang
            ? "Our vision is to close the achievement gap and ensure every underserved high school and college student has a pathway to reach their goals."
            : "Nuestro vision es cierrar la brecha del rendimiento y asegurar cada estudiante de la escuela secundario desatendido y del colegio tiene una manera para obtener sus metas"}
        </Text>
      </Container>
    );
  }
}
