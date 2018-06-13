import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width:80%;
  margin-bottom: 30px;
  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    height: 250px;
    justify-content: center;
    margin: ${Styles.size.s};
    img {
      width: 100%;
      margin: 20px;
    }
    button {
      color: ${Styles.color.primary};
      background-color: ${Styles.color.secondary};
      padding: 5px;
      height: 3em;
      width: 15em;
      border-radius: 5px;
      border: none;
      transition: all 1s;
      font-size: 15px;
    }
    button:hover {
      color: ${Styles.color.accent};
      font-size: 20px;
    }
  }
  @media (max-width: 900px) {
    .items {
      width: 30vw;
    }
  }
  @media (max-width: 700px) {
    .items {
      width: 80vw;
    }
  }
`;
export default class Gallery extends Component {
  render() {
    return (
      <Container>
        <div className="items">
          <img src={"./img/mentees.png"} alt="Picture12" />
          <button>
            {this.props.lang
              ? "Opportunities for High School Students"
              : "Opportunidades para los estudiantes de secundaria"}
          </button>
        </div>
        <div className="items">
          <img src={"./img/20543_4_orig.png"} alt="Picture2" />
          <button>
            {this.props.lang
              ? "Opportunities for College Students"
              : "Opportunidades para los estudiantes universitarios"}
          </button>
        </div>
        <div className="items">
          <img src={"./img/9769588_4_orig.png"} alt="Picture4" />
          <button>
            {this.props.lang
              ? "Opportunities for Young Professionals"
              : "Opportunidades para los jovenes profesionales"}
          </button>
        </div>
        <div className="items">
          <img src={"./img/jls-3197_orig.jpg"} alt="Picture1" />
          <button>
            {this.props.lang
              ? "Opportunities for Community Leaders"
              : "Opportunidades para los líderes comunitarios"}
          </button>
        </div>
        <div className="items">
          <img src={"./img/jls-3073_orig.jpg"} alt="Picture3" />
          <button>
            {this.props.lang
              ? "Opportunities for Parents ​and Guardians"
              : "Opportunidades para los padres"}
          </button>
        </div>
        <div className="items">
          <img src={"./img/school-admin.jpg"} alt="Picture4" />
          <button>
            {this.props.lang
              ? "Opportunities for School Administration"
              : "Opportunidades para la administración escolar"}
          </button>
        </div>
      </Container>
    );
  }
}
