import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../../../style/styles';
import {connect} from 'react-redux';
import PicQuote from './pic-quote';

const Container = styled.div `
    min-height:20vh;
    color: ${Styles.color.font1};
    font-size: ${Styles.size.l};
   
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color:${Styles.color.temp};
    z-index:1;
`
const Text = styled.div`
  height:200px;
  font-family:${Styles.font.header};
  display:flex;
  align-items:center;
  justify-content:center;
`

const PicRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  height:100px;
`
class SecondPart extends Component {
  render() {
    return ( 
      < Container >     
        <PicRow>
          <PicQuote img="./img/mentees.png" altText="mentee" quote="Nothing is work unless you'd rather be doing something else."/>
          <PicQuote img="./img/20543_4_orig.png" altText="mentee" quote="Nothing is work unless you'd rather be doing something else."/>
          <PicQuote img="./img/9769588_4_orig.png" altText="mentee" quote="Nothing is work unless you'd rather be doing something else."/>
        </PicRow>
        <Text>
          Mentorship for success
        </Text>
        <PicRow>
          <PicQuote img="./img/jls-3197_orig.jpg" altText="mentee" quote="Nothing is work unless you'd rather be doing something else."/>
          <PicQuote img="./img/jls-3073_orig.jpg" altText="mentee" quote="Nothing is work unless you'd rather be doing something else."/>
          <PicQuote img="./img/school-admin.jpg" altText="mentee" quote="Nothing is work unless you'd rather be doing something else."/>
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