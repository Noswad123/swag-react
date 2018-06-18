import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Container=styled.div`
min-height:80vh;
display: flex;
flex-direction:column;
align-items:center;
a{
    margin-top:100px;
}
`
const Title=styled.h1`
    color:${Styles.color.primary}
    
`
const ContactWrapper=styled.div`
display:flex;
flex-direction:column;
`
const Contact=styled.div`
margin-bottom:30px;
`
const Header=styled.div``
const Name=styled.div``
const Phone=styled.div``
const Email=styled.div``
class ContactUs extends Component{
    render(){
        return(
            <Container>
                <Link to="/aboutus">{(this.props.isEng)?"back":"regresa"}</Link>
                <Title>{(this.props.isEng)?"Contact Us":"needs translate"}</Title>
                <ContactWrapper>
                    <Contact>
                        <Header >   ​For general inquiries</Header>
                        <Name> Raj Salhotra</Name>
                        <Email>Email: raj.salhotra@swagtocollege.org</Email>
                        <Phone>phone: 713-320-0303</Phone>
                    </Contact>
                    <Contact>
                        <Header> High School Program</Header>
                        <Name>​​Graciela Lopez</Name>
                        <Email>Email: graciela.lopez@swagtocollege.org</Email>
                    </Contact>
                    <Contact>
                        <Header> Upperclassmen Program</Header>
                        <Name>​​Jennifer Dzul</Name>
                        <Email>Email: jennifer.dzul@swagtocollege.org</Email>
                    </Contact>
                    <Contact>
                        <Header> Young Professional Program</Header>
                        <Name>Maddie Coles</Name>
                        <Email>​Email: maddie.coles@swagtocollege.org</Email>
                    </Contact>
                </ContactWrapper>
            </Container>
        )
    }
}

const mapStateToProps= state=>{
    return{
        isEng:state.isEng
      }
};
  
function mapDispatchToProps(dispatch){
    return{
      onUpdateLang:()=>{
        const action={type:"UPDATE_LANG",payload:false};
        dispatch(action);
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);