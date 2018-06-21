import React, {Component} from 'react';
import styled from 'styled-components';
import Styles from '../../../style/styles';
import {connect} from 'react-redux';
const Container=styled.div`
    display:flex;
    justify-content: space-around;
    align-items:center;
 width:400px;
 height:100%;
   img{
       width:150px;
   }
    font-size:${Styles.size.s};
    box-sizing:border-box;
`
const Quote =styled.div`
   border: white solid;
   height:100%;
   display:flex;
   padding:10px;
    justify-content: center;
    align-items:center;
    box-sizing:border-box;
`
class PicQuote extends Component {
    render() {
      return ( 
        <Container>
            <img src={this.props.img} alt={this.props.altText}/>
            <Quote>
                {this.props.quote}
            </Quote>
        </Container>
      )  
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
  export default connect(mapStateToProps, mapDispatchToProps)(PicQuote);