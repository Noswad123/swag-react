import React, { Component } from "react";
import styled from "styled-components";
import Styles from "../../style/styles";
import EngResources from "../../data/resources-eng.data";
import EspResources from "../../data/resources-esp.data";
import ContentResources from "./content-resources";
import ResourceMenu from "./resource-menu/resource-menu"
import { connect } from "react-redux";

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction:column;
  align-items:center;
  padding: 30px;
`;

const Title=styled.div`
  font-size:${Styles.size.l};
  font-family:${Styles.font.title};
  color:${Styles.color.font1};
  font-weight:700;
  text-transform:uppercase;
`
const Wrapper=styled.div`
  display:flex;
  justify-content:space-between;
`

class Resources extends Component {
  constructor() {
    super();
    this.state = {
      resourceIndex: 0
    };
  }

  changeIndex(input) {
    this.setState({ resourceIndex: input });
  }
  render() {
    return (
      <Container>
        <Title>Resources</Title>
        <Wrapper>
          <ResourceMenu changeIndex={this.changeIndex.bind(this)}/>
          <ContentResources
            resource={
              this.props.isEng
                ? EngResources[this.state.resourceIndex].links
                : EspResources[this.state.resourceIndex].links
            }
          />
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
export default connect(mapStateToProps, mapDispatchToProps)(Resources);
