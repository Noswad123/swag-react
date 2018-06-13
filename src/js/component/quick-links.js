import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../js/style/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: ${Styles.size.xxl};
  color: black;
  font-size: 15px;
  position: fixed;
  top: 20%;
  left: -20px;
`;
const Header = styled.span`
  transform-origin: 50%;
  transform: rotate(90deg);
  position: absolute;
  right: -20px;
  top: 30%;
`;

const QuickMenu = styled.div`
  background-color: ${Styles.color.primary};
  color: ${Styles.color.font1};
  width: 300px;
  height: 120px;
  position: absolute;
  top: -200px;
  left: -250px;
  transition: all 1s;
 
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
  &:hover {
    left: 20px;
    height:400px;
    >span{
      display:none;
    }
    
  }
`;
const Options = styled.div`
display:flex;
flex-direction: column;
align-items: center;
div{
  display:flex;
  flex-direction: column;
  align-items: center;
  &:hover{
    >ul{
      display:inline
    }
  }
}
ul{
    display:none;
}
`;
class QuickLinks extends Component {
  render() {
    return (
      <Container>
        <QuickMenu>
          <Options>
            <div> Main
          <ul>
            <li> HS Mentee</li>
            <li>College Mentee</li>
            <li>College Mentor</li>
            <li>Young Professional</li>
          </ul>
          </div>
            </Options>
          <ul>
            <li>Sign Up Forms</li>
            <li>
              <Link to="/checkin">Checkin form</Link>
            </li>
          </ul>
          <Header>Quick Links</Header>
        </QuickMenu>
      </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(QuickLinks);
