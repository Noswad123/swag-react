import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import {connect} from 'react-redux';

const Container = styled.div `
    min-height:50vw;
    color: ${Styles.color.font1};
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    background-color:${Styles.color.primary};
    z-index:1;
    @media (max-width: 990px) {
      justify-content:center;
    }
    
`
const Text = styled.div`
  height:30%;
  font-family:${Styles.font.header};
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: ${Styles.size.l};
  text-transform:uppercase;
  @media (max-width: 910px) {
    font-size:80px;
  }
  @media (max-width: 850px) {
    font-size:60px;
  }
  @media (max-width: 630px) {
    font-size:40px;
  }
`

const PicRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  height:30%;
  @media (max-width: 990px) {
    display:none;
  }
`
const Pic=styled.img`
  
width:15vw;
height:15vw;
`
const Quote =styled.div`
   border: white solid;
   width:15vw;
   height:15vw;
   display:flex;
  justify-content: space-around;
  align-items:center;
  padding:10px;
    box-sizing:border-box;
    
    @media (max-width: 1060px) {
      font-size:15px;
    }
    @media (max-width: 990px) {
      display:none;
    }
`
class SecondPart extends Component {
  render() {
    return ( 
      < Container >     
        <PicRow>
          <Pic src={"./img/squarehs.jpg"} altText="hs" />
          <Quote>
          “This program makes it so easy to find someone who is willing to give you free advice, motivation, and support.” - Nadia 2020
          </Quote>
          <Pic src={"./img/squarecollege.jpg"} altText="college"/>
          <Quote>
          “Swag to college has truly helped me feel more motivated and supported.” - Acsa 
          </Quote>
          <Pic src={"./img/computer-mentee.jpg"} altText="computer"/>
          <Quote>
          “SWAG helps younger students interact with older students that have gone through the same things.” -Rosmany
          </Quote>
        </PicRow>
        <Text>
          Mentorship for success
        </Text>
        <PicRow>
          <Pic src={"./img/community-members.jpg"} altText="community members" />
          
          <Quote>
          “My mentor wanted to know about any concerns I had which allowed me to feel heard.” -Jessica
          </Quote>
          <Pic src={"./img/squareparent.jpeg"} altText="parent" />
          <Quote>
          “SWAG has a great mission statement. This is an amazing service that I’m glad I got a chance to be in.” -Kailey
          </Quote>
          <Pic src={"./img/swarthmouth-mentee.jpg"} altText="mentee"/>
          <Quote>
            “SWAG gives students a chance to make an impact in their community.”          
          </Quote>
        </PicRow>
    </ Container >);
  }
}

const mapStateToProps = state => {
  return {isEng: state.isEng}
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateLang: () => {
      const action = {
        type: "UPDATE_LANG",
        payload: false
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SecondPart);