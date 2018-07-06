import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const Blurb = styled.div`
border:white solid;
padding:30px;
width:250px;`
const Pic = styled.img`
width:50px;
`
class MentorMentee extends Component {

  render() {
    return (
        <Container>
            <Pic src={this.props.pic}/>
            <Blurb>
                {this.props.text}
            </Blurb>
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
export default connect(mapStateToProps, mapDispatchToProps)(MentorMentee);
