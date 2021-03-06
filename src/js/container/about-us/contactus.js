import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import { connect } from "react-redux";
import Navbar from "../../component/navbar"

const Container=styled.div`
min-height:90vh;
background-color:${Styles.color.secondary};
display: flex;
flex-direction:column;
width:100%;
`
const Wrapper=styled.div`
display: flex;
flex-direction:column;
align-items:center;
width:100%;

`
const Title=styled.div`
    color:${Styles.color.font1};
    text-transform: uppercase;
  font-family:${Styles.font.title};
  font-size:${Styles.size.l};
  font-weight:700;
  @media (max-width: 420px) {
        font-size:60px;
    }  
    @media (max-width: 330px) {
        font-size:45px;
    }  
`
const ContentWrapper=styled.div`
    width:100%;   
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:50px;
`
const Row=styled.div`
    width:50%;
    display:flex;
    padding:0 20px;
    box-sizing:border-box;
    color:${Styles.color.font2};
   justify-content:space-between;
   align-items:center;
   @media (max-width: 1140px) {
        width:60%;
    }
    @media (max-width: 880px) {
        width:75%;
    }
   @media (max-width: 700px) {
        flex-direction:column;
    }
`

const Contact=styled.div`
    margin-bottom:30px;
    display:flex;
    flex-direction:column;
    align-items:center;

`
const Header=styled.div`
color:${Styles.color.font1};
font-size:20px;
font-family:${Styles.font.title};`
const Name=styled.div`
margin-top:15px;`
const Logo=styled.div`
height:120px;
width:120px;
display:flex;
justify-content:center;
align-items:center;
border-radius:100%;
background-color:${Styles.color.accent};
img{
    height:80px;
}`

const Email=styled.div``
class ContactUs extends Component{
    render(){
        return(
            <Container>
                <Navbar/>
                <Wrapper>
                <Title>{(this.props.isEng)?"Contact Us":"needs translate"}</Title>
                <ContentWrapper>
                    <Row>
                    <Contact>
                        <Logo>
                            <img src={"./img/inbox-icon.png"} alt="general inquiries"/>
                            </Logo>
                        <Header >   ​General Inquiries</Header>
                        <Name> Raj Salhotra</Name>
                        <Email>raj.salhotra@swagtocollege.org</Email>
                    </Contact>
                    <Contact>
                        <Logo>
                            <img src={"./img/library-icon.png"} alt="HS Program"/>
                        </Logo>
                        <Header> High School Program</Header>
                        <Name>​​Jessica Telles</Name>
                        <Email>jessica.telles@swagtocollege.org</Email>
                    </Contact>
                    </Row>
                    <Row>
                    <Contact>
                        <Logo>
                            <img src={"./img/student-hat-icon.png"} alt="Upper Classmen"/>
                        </Logo>
                        <Header> Upperclassmen Program</Header>
                        <Name>​​Nicole Fraga</Name>
                        <Email>nicole.fraga@swagtocollege.org</Email>
                    </Contact>
                    <Contact>
                        <Logo>
                            <img src={"./img/network-icon.png"} alt="yp"/>
                        </Logo>
                        <Header> Young Professional Program</Header>
                        <Name>Maddie Coles</Name>
                        <Email>maddie.coles@swagtocollege.org</Email>
                    </Contact>
                    </Row>
                </ContentWrapper>
                </Wrapper>
            </Container>
        )
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
  export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);