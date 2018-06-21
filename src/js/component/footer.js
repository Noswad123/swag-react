import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  padding: 20px;
  overflow: hidden;
  background-color: #09335d;
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
        Follow Us:
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
          <Icon src={"./img/facebook.ico"} />
        </a>
        <a
          href="https://www.instagram.com/swagtocollege/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={"./img/instagram.png"} />
        </a>
        <a
          href="https://twitter.com/swagtocollege"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={"./img/twitter.png"} />
        </a>
        <a
          href="https://medium.com/@swagtocollege"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={"./img/medium.png"} />
        </a>
        <a
          href="https://www.linkedin.com/company/10801368/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Icon src={"./img/linkedin.png"} />
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
