import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Styles from "../../style/styles";
import PayPalLogo from "../../../images/paypal.png"
import GoFundMeLogo from "../../../images/gofundme.png"
import Navbar from "../../component/navbar"

const Container = styled.div`
    min-height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    background-color:${Styles.color.secondary};
    color:${Styles.color.font1};
  
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
  font-size:25px;
`
const Wrapper =styled.div`
  display: flex;
  align-items:center;
  justify-content:space-around;
  width:100%;
  height:200px;
  padding:20px;
  background-color:${Styles.color.primary};
  margin-bottom:50px;
`
const FundingDiv=styled.div`

  
`
const Circle=styled.div`
  height:100px;
  width:100px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:${Styles.color.accent};
  border-radius:100%;
  `
const PayPal =FundingDiv.extend`
  img{
    height:75px;
  }
`
const GoFundMe =FundingDiv.extend`
  img{
    height:50px;
  }
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
    <Circle>
      <PayPal>
          <a href="https://www.paypal.com/fundraiser/charity/1832625" target="_blank" rel="noopener noreferrer"><img src={PayPalLogo} alt="Pay Pal"/></a>
      </PayPal>
    </Circle>
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
