import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../../../style/styles';
import {connect} from 'react-redux';

const Container = styled.div `
    min-height:50vw;
    color: ${Styles.color.font2};
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    background-color:${Styles.color.accent};
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
          You cannot change the circumstances, the seasons, or the wind, but you can change yourself. That is something you have.
          </Quote>
          <Pic src={"./img/squarecollege.jpg"} altText="college"/>
          <Quote>
            Every Action in our lives touches on some chord that will vibrate in eternity
          </Quote>
          <Pic src={"./img/squareyp.png"} altText="yp"/>
          <Quote>
            When you do the common things in life in an uncommon way, you will command the attention of the world.
          </Quote>
        </PicRow>
        <Text>
          Mentorship for success
        </Text>
        <PicRow>
          <Pic src={"./img/community-members.jpg"} altText="community members" />
          
          <Quote>
            You must be the change you wish to see in the world.
          </Quote>
          <Pic src={"./img/squareparent.jpeg"} altText="parent" />
          <Quote>
            Learn from yesterday, live for today, hope for tomorrow.
          </Quote>
          <Pic src={"./img/jim.jpg"} altText="mentee"/>
          <Quote>
            In any moment of decision, the best thing you can do is the right thing. The worst thing you can do is nothing.
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