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
`
const Text = styled.div`
  height:30%;
  font-family:${Styles.font.header};
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: ${Styles.size.l};
  text-transform:uppercase;
`

const PicRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  height:30%;
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
`
class SecondPart extends Component {
  render() {
    return ( 
      < Container >     
        <PicRow>
          <Pic src={"./img/mentees.png"} altText="mentee" quote=""/>
          <Quote>
              Nothing is work unless you'd rather be doing something else.
          </Quote>
          <Pic src={"./img/20543_4_orig.png"} altText="mentee"/>
          <Quote>
              Nothing is work unless you'd rather be doing something else.
          </Quote>
          <Pic src={"./img/9769588_4_orig.png"} altText="mentee"/>
          <Quote>
              Nothing is work unless you'd rather be doing something else.
          </Quote>
        </PicRow>
        <Text>
          Mentorship for success
        </Text>
        <PicRow>
          <Pic src={"./img/jls-3197_orig.jpg"} altText="mentee" />
          
          <Quote>
              Nothing is work unless you'd rather be doing something else.
          </Quote>
          <Pic src={"./img/jls-3073_orig.jpg"} altText="mentee" />
          <Quote>
              Nothing is work unless you'd rather be doing something else.
          </Quote>
          <Pic src={"./img/school-admin.jpg"} altText="mentee"/>
          <Quote>
              Nothing is work unless you'd rather be doing something else.
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