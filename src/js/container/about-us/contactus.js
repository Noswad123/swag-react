import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import { connect } from "react-redux";

const Container=styled.div`
min-height:90vh;
background-color:${Styles.color.accent};
display: flex;
flex-direction:column;
align-items:center;
width:100%;
a{
    margin-top:100px;
}
`
const Title=styled.div`
    margin-top:100px;
    color:${Styles.color.lightFont};
    text-transform: uppercase;
  font-family:${Styles.font.title};
  font-size:${Styles.size.l};
    
`
const ContactWrapper=styled.div`
    width:100%;   
    display:flex;
    flex-direction:column;
    margin-top:100px;
`
const Row=styled.div`
    width:100%;
    display:flex;
    justify-content:space-Between;
    padding:0 20px;
    box-sizing:border-box;
    color:${Styles.color.darkFont};
`
const Contact=styled.div`
    margin-bottom:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Header=styled.div``
const Name=styled.div``
const Logo=styled.div`
height:100px;
width:100px;
border-radius:100%;
background-color:${Styles.color.lightFont};`

const Email=styled.div``
class ContactUs extends Component{
    render(){
        return(
            <Container>
                <Title>{(this.props.isEng)?"Contact Us":"needs translate"}</Title>
                <ContactWrapper>
                    <Row>
                    <Contact>
                        <Logo/>
                        <Header >   ​General Inquiries</Header>
                        <Name> Raj Salhotra</Name>
                        <Email>raj.salhotra@swagtocollege.org</Email>
                    </Contact>
                    <Contact>
                    <Logo/>
                        <Header> High School Program</Header>
                        <Name>​​Graciela Lopez</Name>
                        <Email>graciela.lopez@swagtocollege.org</Email>
                    </Contact>
                    
                    <Contact>
                    <Logo/>
                        <Header> Upperclassmen Program</Header>
                        <Name>​​Jennifer Dzul</Name>
                        <Email>jennifer.dzul@swagtocollege.org</Email>
                    </Contact>
                    <Contact>
                    <Logo/>
                        <Header> Young Professional Program</Header>
                        <Name>Maddie Coles</Name>
                        <Email>maddie.coles@swagtocollege.org</Email>
                    </Contact>
                    </Row>
                </ContactWrapper>
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