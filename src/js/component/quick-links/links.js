import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../js/style/styles";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
ul {
    list-style-type: none;
    cursor: pointer;
    li:hover,
    a:hover {
      color: ${Styles.color.accent};
    }
}
a {
    color: ${Styles.color.font1};
    text-decoration: none;
  }
`;

class Links extends Component {
    render() {
        return (
            <Container>                   
                <ul>
                {
                        this.props.links.map(element=>{
                            return <li>{element.text}</li>;
                        })
                    }
                </ul>
            </Container>
        )
    }
}
export  default Links;