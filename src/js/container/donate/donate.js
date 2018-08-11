import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Styles from "../../style/styles";
import PayPalLogo from "../../../images/paypal.png"
import GoFundMeLogo from "../../../images/gofundme.png"
import Navbar from "../../component/navbar"

const Container = styled.div`
    min-height:90vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    background-color:${Styles.color.secondary};
    color:${Styles.color.font1};
    padding:50px;
`;
const Title =styled.div`
font-size:${Styles.size.l};
font-family:${Styles.font.title};
font-weight:700;
text-transform:uppercase;
`
const Text =styled.div`
  margin:20px;
  font-family:${Styles.font.text};
  font-size:30px;
`
const Wrapper =styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  border:solid ${Styles.color.accent};
  width:35%;
  padding:20px;
`
const FundingDiv=styled.div`
img{
  height:50px;
}
margin-bottom:30px;
`
const PayPal =FundingDiv.extend`
`

const GoFundMe =FundingDiv.extend`
`

class Donate extends Component {
  render() {
    return (
      <Container>
          <Navbar/>
     <Title>Donate</Title>
     <Text>Your donation will go towards helping support a student pursuing higher education.</Text>
     <Wrapper>
        <GoFundMe>
            <a href=" https://www.gofundme.com/swagtocollege18 " rel="noopener noreferrer" target="_blank"><img src={GoFundMeLogo} alt="go fund me"/></a>
        </GoFundMe>  
    
    <Text>
        or
    </Text>
    <PayPal>
        <a href="https://www.paypal.com/fundraiser/charity/1832625" target="_blank" rel="noopener noreferrer"><img src={PayPalLogo} alt="Pay Pal"/></a>
        </PayPal>
        </Wrapper>
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
