import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 300px;
  padding: 50px;
  margin-top:100px;
`;
const SubPanel = styled.div`
  background-color: ${Styles.color.primary};
  border-radius: 0 2% 2% 2%;
  padding: 16px 32px;
  width: 128px;
  min-height: 200px;
`;
const TabStyle = styled.button`
  background-color: ${Styles.color.secondary};
  color: #09335d;
  border-radius: 10px 10px 0 0;
  border-color: ${Styles.color.font2};
  border-bottom: none;
`;
const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  button {
    background-color: ${Styles.color.secondary};
    color: ${Styles.color.font2};
    border: solid ${Styles.color.font2};
    border-radius: 8px;
    min-height: 32px;
    width: 160px;
    margin: 5px;
    font-family: ${Styles.font.text};
    &:hover {
      background-color: ${Styles.color.tertiary};
      color: ${Styles.color.accent};
      border-color: ${Styles.color.accent};
    }
  }
`;
export default class SidePanel extends Component {
  constructor() {
    super();
    this.state = {
      tabArray: [true, false]
    };
  }
  toggleActive() {
    var tabOne = this.state.tabArray[0];
    var tabTwo = this.state.tabArray[1];
    this.setState({ tabArray: [!tabOne, !tabTwo] });
  }
  render() {
    return (
      <Container>
        <Tab
          toggle={this.toggleActive.bind(this)}
          isActive={this.state.tabArray[0]}
          name={this.props.lang ? "Learn More" : "Aprenda Mas"}
        />
        <Tab
          toggle={this.toggleActive.bind(this)}
          isActive={this.state.tabArray[1]}
          name={this.props.lang ? "CheckIn" : "registrarse"}
        />
        <SubPanel>
          <LearnMore
            lang={this.props.lang}
            change={this.props.change}
            isActive={this.state.tabArray[0]}
          />
          <CheckIn lang={this.props.lang} isActive={this.state.tabArray[1]} />
        </SubPanel>
      </Container>
    );
  }
}
class LearnMore extends Component {
  changeOptions() {
    if (this.props.isActive) {
      return { display: "flex" };
    } else {
      return { display: "none" };
    }
  }
  render() {
    return (
      <Option style={this.changeOptions()}>
        <button onClick={() => this.props.change(0)}>
          {this.props.lang
            ? "High School Student"
            : "Estudiantes de secundaria"}{" "}
        </button>
        <button onClick={() => this.props.change(1)}>
          {this.props.lang ? "College Student " : "Estudiantes universitarios"}
        </button>
        <button onClick={() => this.props.change(2)}>
          {this.props.lang ? "Young Professional" : "jovenes profesionales"}{" "}
        </button>
        <button onClick={() => this.props.change(3)}>
          {this.props.lang ? "Parents" : "Los Padres"}{" "}
        </button>
        <button onClick={() => this.props.change(4)}>
          {this.props.lang ? "School Administration" : "administracion escolar"}{" "}
        </button>
        <button onClick={() => this.props.change(5)}>
          {this.props.lang ? "Community Member" : "lideres comunitarios"}{" "}
        </button>
      </Option>
    );
  }
}

class CheckIn extends Component {
  changeOptions() {
    if (this.props.isActive) {
      return { display: "flex" };
    } else {
      return { display: "none" };
    }
  }
  render() {
    return (
      <Option style={this.changeOptions()}>
        <Link to="/checkin">
          <button>
            {this.props.lang ? "Checkin Form" : "Need translation"}{" "}
          </button>
        </Link>
      </Option>
    );
  }
}

class Tab extends Component {
  active() {
    if (this.props.isActive === true) {
      let activeTab = {
        color: "white",
        backgroundColor: "#09335D"
      };
      return activeTab;
    }
  }

  render() {
    return (
      <TabStyle style={this.active()} onClick={this.props.toggle}>
        {" "}
        {this.props.name}
      </TabStyle>
    );
  }
}
