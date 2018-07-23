import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import Styles from '../../style/styles';


const Container = styled.div`
cursor:pointer;
position:fixed;
right: 50px;
top:100px;
height:100px;
ul{
    display:none;
}

&:hover{
    img{
        display:none;
    }
    ul{
        display:block;
    }
}
@media (min-width: 920px) {
    display:none;
  }

`
const Icon =styled.img`
height:100px;`
const Grade =styled.ul`
background-color:${Styles.color.accent};
position:absolute;
top:50px;
padding:20px;
list-style-type:none;
li{
    margin-bottom:15px;
    &:hover{
        background-color:${Styles.color.contrast};
    }
}`
class Hamburger extends Component {
  constructor(){
    super();
    this.state={
      grade:0,
      changeGrade:function(newGrade){
        this.setState({grade:newGrade});
        
      }
    }
  }
  render() {
    return (
      <Container>
            <Icon src={"./img/hamburger.png"} alt="hamburger"/>
            <Grade>
                <li>Freshman</li>
                <li>Sophomore</li>
                <li>Junior</li>
                <li>Senior</li>
            </Grade>
      </Container>
    );
  }
}

const mapStateToProps= state=>{
  return{
      isEng:state.LangReducer.isEng
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
export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);