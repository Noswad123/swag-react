import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import {connect} from 'react-redux'

const Container = styled.div `
    min-height:20vh;
    color: ${Styles.color.font1};
    font-size: ${Styles.size.l};
 
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color:#7A9BBA;
    img{
        width:250px;
    }
    z-index:1;
`

const Text2 = styled.div``
const PicRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 150px;`
class SecondPart extends Component {
  render() {
    return ( 
      < Container > 
           
               <PicRow>
               <img src={"./img/mentees.png"} alt="Picture12" />
               <img src={"./img/20543_4_orig.png"} alt="Picture2" />
               <img src={"./img/9769588_4_orig.png"} alt="Picture4" />
                   </PicRow>
               <Text2>
                   Mentorship for success
                   </Text2>
                   <PicRow>
                   <img src={"./img/jls-3197_orig.jpg"} alt="Picture1" />
                   <img src={"./img/jls-3073_orig.jpg"} alt="Picture3" />
                   <img src={"./img/school-admin.jpg"} alt="Picture4" />
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