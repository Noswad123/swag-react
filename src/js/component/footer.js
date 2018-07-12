import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../style/styles";
import { connect } from "react-redux";
import Twitter from "../../images/twitter.png"
import Medium from "../../images/medium.png"
import Facebook from "../../images/facebook.ico"
import Linkedin from "../../images/linkedin.png"
import Instagram from "../../images/instagram.png"

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  padding: 20px;
  overflow: hidden;
  background-color: ${Styles.color.primary};
  color: white;
  z-index:5;
`;

const SocialStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  a {
    color: white;
  }
`;
const Icon = styled.img`
  height: 30px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEng: props.isEng
    };
  }
  render(props) {
    return (
      <Container>
        <Social />
      </Container>
    );
  }
}
class Social extends Component {
  render() {
    return (
      <SocialStyle className="social">
        <a
          href="https://www.facebook.com/SWAGToCollege/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={Facebook} />
        </a>
        <a
          href="https://www.instagram.com/swagtocollege/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={Instagram} />
        </a>
        <a
          href="https://twitter.com/swagtocollege"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={Twitter} />
        </a>
        <a
          href="https://medium.com/@swagtocollege"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={Medium} />
        </a>
        <a
          href="https://www.linkedin.com/company/10801368/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={Linkedin} />
        </a>
      </SocialStyle>
    );
  }
}
const mapStateToProps = state => {
  return {
    isEng: state.isEng
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateLang: () => {
      const action = { type: "UPDATE_LANG", payload: false };
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
