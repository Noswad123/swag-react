import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../../style/styles";
import EngResources from "../../../data/resources-eng.data";
import EspResources from "../../../data/resources-esp.data";
import OptionResources from "./option-resources";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 500px;
    margin-right: 50px;
    display: flex;
    flex-direction:column;
    align-items:center;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Styles.color.primary};
  border-radius: 10px;
  padding: 20px 10px;
  margin-top:100px;
`;
const Timeline=styled.div`
  a{
    text-decoration:none;
    color:${Styles.color.font2};
  }
  background-color:${Styles.color.secondary};
    box-sizing:border-box;
    border-style: solid;
    border-color: ${Styles.color.font2};
    padding:10px 5px 5px 5px;
    font-size:13px;
    text-align:center;
    height: 40px;
    width:170px;
    border-radius:10px;
    &:hover{
        background-color:${Styles.color.tertiary};
        color:${Styles.color.accent};
        border-color: ${Styles.color.accent};
    }
`
class ResourceMenu extends Component {
  render() {
    return (
        <Container>
          <Wrapper>
            <Timeline>
              <Link to="/timeline">Timeline</Link>
            </Timeline>
            {this.props.isEng
              ? EngResources.map((element, index) => {
                  return (
                    <OptionResources
                      key={index}
                      linkIndex={index}
                      changeIndex={this.props.changeIndex}
                      name={element.section}
                      blurb={element.blurb}
                    />
                  );
                })
              : EspResources.map((element, index) => {
                  return (
                    <OptionResources
                      key={index}
                      linkIndex={index}
                      changeIndex={this.props.changeIndex}
                      name={element.section}
                      blurb={element.blurb}
                    />
                  );
                })}
          </Wrapper>
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
export default connect(mapStateToProps, mapDispatchToProps)(ResourceMenu);
