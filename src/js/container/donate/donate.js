import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Styles from "../../style/styles";
import PayPalLogo from "../../../images/paypal.png"
import Navbar from "../../component/header"

const Container = styled.div`
    min-height:90vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    background-color:${Styles.color.tertiary};
    color:${Styles.color.font1};
`;
const Title =styled.div`
font-size:${Styles.size.l};
font-family:${Styles.font.title};
font-weight:700;
text-transform:uppercase;
`
const Blurb =styled.div``
const Form =styled.div`
    background-color:${Styles.color.primary};
    width:100%;
    padding:50px;
    display: flex;
    justify-content:center;
    `
    const Wrapper =styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    border:solid ${Styles.color.accent};
    width:50%;
    padding:20px;
    height:150px;`
const Row =styled.div`
    width:90%;
    display: flex;
    justify-content:space-between;
`
const PayPal =styled.div`
img{
    height:50px;
}`

class Donate extends Component {
  render() {
    return (
      <Container>
          <Navbar/>
     <Title>Donate</Title>
     <Blurb>Your donation will go towards helping support a student pursuing higher education.</Blurb>
     <Form>
        <Wrapper>
            <Row>
                <input placeholder="First Name"/>
                <input placeholder="Last Name"/>
            </Row>

            <Row>
                <input placeholder="Email Address"/>
                <input placeholder="Cardholder Name"/>
            </Row>

            <Row>
                <input placeholder="Card Number"/>
                <input placeholder="mm/yy"/>
                <input placeholder="CVV"/>
            </Row>

            <Row>
                <input placeholder="Billing Address"/>
                <input placeholder="City State"/>
            </Row>   
        </Wrapper>  
    </Form>
    or
    <PayPal>
        <img src={PayPalLogo} alt="Pay Pal"/>
        </PayPal>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEng: state.LangReducer.isEng
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
export default connect(mapStateToProps, mapDispatchToProps)(Donate);
