import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";

const Container = styled.div`
    display:flex;
    align-items: center;
    flex-direction:column;
    justify-content:center;
    width:100%;
    background-color:${Styles.color.primary};
    color:${Styles.color.font1};
    font-size:20px;
    padding:20px;
    p{
        width:70%;
    }
    z-index:1;
    @media (max-width: 600px) {
        p{
            width:90%;
        }
      }
      @media (max-width: 400px) {
        p{
            font-size:15px;
      }
    }

`;
const Title = styled.div`
  font-size: ${Styles.size.l};
  font-family: ${Styles.font.title};
  text-transform: uppercase;
`;
export default class Story extends Component {
    render() {
      return (
        <Container>
            <Title> {this.props.isEng ? "Our Story" : "Nuestro historia"}</Title>
            <p>
              {this.props.isEng
                ? "In February 2015, Raj Salhotra, one of our co-founders, went out for lunch. He noticed the cashier seemed to be in high-school, so Raj asked him about his goals. He told Raj that he was a 12th grade student and aspired to attend college but felt it was too expensive. Raj explained the resources available to him, the Pell Grant and the FAFSA.  This student had real dreams, but the lack of information could have left those goals unfulfilled.  Raj shared this interaction with Jamal, and they devised a plan to assist low-income and first generation students matriculate to college."
                : "Need translation"}
            </p>
            <p>
              {this.props.isEng
                ? "Raj and Jamal immediately realized they could not do this alone. They recruited several college students from Houston Independent School District (HISD), YES Prep, and KIPP to serve as the initial mentors. Today, many of those same students form the core SWAG To College Leadership Team, and their perspectives, experiences, and beliefs are invaluable to helping SWAG To College succeed. Quite simply, without our college student Leadership Team members, SWAG To College could not serve students effectively. "
                : "Need translation"}
            </p>          
        </Container>
        );
    }
}
