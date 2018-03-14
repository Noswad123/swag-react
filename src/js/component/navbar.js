import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import Styles from '../style/styles';
import navbarTrans from '../data/translations/navabar-translate'
import {connect} from 'react-redux';

const Container=styled.div`
background-color: ${Styles.color.primary};
    height: 50px;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 40px;
  }
`
const Links=styled.ul`
list-style: none;
li{
  display: inline-block;
  color:white;
  margin-right:20px;
  padding: 5px;
  border:solid ${Styles.color.primary};
  &:hover{
    border:solid ${Styles.color.secondary};
  }
  &:last-child{
    border:none;
    &:hover{
      border:none;
    }
  }
 
  a{
    color:${Styles.color.font1};
    text-decoration:none;
  }
}
`
const SwitchWrap=styled.div`
background-color:${Styles.color.accent};
cursor:pointer;
width:100px;
box-sizing:border-box;
&:hover{
  filter:saturate(50%);
}
border-radius:10px;
position:relative;
padding:5px 20px;
`

const Switch=styled.div`
background-color:black;
cursor:pointer;
border-radius:100%;
width:30px;
height:30px;
position:absolute;
top:0;
left:0;
transition: all 1s;
`

class Navbar extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.toggleLang=this.toggleLang.bind(this);
    this.state={
      isEng:props.isEng,
      currentLang:navbarTrans.eng,
      switchPos:{transform:"translateX(80px)"}
    }
  }

  toggleLang(){
    var opp=!this.state.isEng;
    console.group("toggle lang")
    console.log(this.state.isEng)
    console.groupEnd()
    this.props.onUpdateLang();
    this.setState(
      {
        isEng:opp,
        switchPos:(this.state.isEng)?{transform:"translateX(-10px)"}:{transform:"translateX(75px)"},
        currentLang:(this.state.isEng)?navbarTrans.eng:navbarTrans.esp
      }
    )
    
  }
  render() {
    return (
      <Container>
        <Link  to="/"><img src={"./img/invertswag.png"} alt="SWAG"/></Link>
        <Links>
          <li>
            <Link  to="/timeline">{(this.state.isEng)?"Timeline":"Linea del Tiempo"}</Link>
          </li>
          <li>
            <Link  to="/blog"> Blog</Link>
          </li>
          <li>
            <Link  to="/resources"> {(this.state.isEng)?"Resources":"Recrusos"}</Link>
            </li>
          <li>
            <Link to="/aboutus">{(this.state.isEng)?"About Us":"Sobre Nosotros"}</Link>
          </li>
          <li>
            <Link to="/getinvolved">{(this.state.isEng)?"Get Involved":"Involucrarse"}</Link>      
          </li>
        </Links>
        <Toggle toggleLang={this.toggleLang} switch={this.state.switchPos} lang={(this.state.isEng)?"English":"Spanish"}/>
      </Container>
    );
  }
}


class Toggle extends Component{
  render(){
    return(
        <div>
          <SwitchWrap onClick={()=>this.props.toggleLang()}>
            {this.props.lang}
            <Switch style={this.props.switch}/>
          </SwitchWrap>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);