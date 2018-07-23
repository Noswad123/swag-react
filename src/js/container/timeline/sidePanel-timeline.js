import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'

const Container = styled.div`
  width:300px;
  padding: 50px;
  margin-top:100px;
  @media (max-width: 920px) {
    display:none;
  }
`

const SubPanel = styled.div`
  background-color:${Styles.color.primary};
  border-radius: 0 2% 2% 2% ;
  padding: 16px 32px;
  width:128px;
  height:200px;
`

const TabStyle = styled.button`
  background-color: ${Styles.color.secondary};
  color: ${Styles.color.font1};
  border-radius: 10px 10px 0 0;
  border-color: ${Styles.color.font2};
  border-bottom: none;
  margin-right: 10px;
  cursor:pointer;
`

const Options = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  button{
    background-color:${Styles.color.font1};
      color:${Styles.color.font2};
      border: solid ${Styles.color.font2};
      border-radius: 8px;
      height: 32px;
      width: 128px;
      font-family:${Styles.font.text};
      cursor:pointer;
      &:hover{
        background-color:${Styles.color.contrast};
        color:${Styles.color.accent};
        border-color: ${Styles.color.accent};
      }
  }
`

export default class SidePanel extends Component {
  constructor(){
    super();
    this.state={

      tabArray:[true,false]
    }
    
  } 
  toggleActive(){
    var tabOne=this.state.tabArray[0];
    var tabTwo=this.state.tabArray[1];
    this.setState({tabArray:[!tabOne,!tabTwo]})
   }
  
  render() {
      return (
        <Container>
          <Tab  toggle={this.toggleActive.bind(this)} isActive={this.state.tabArray[0]} name={this.props.lang?"Student":"estudiante"}/>
          <Tab toggle={this.toggleActive.bind(this)} isActive={this.state.tabArray[1]} name={this.props.lang?"Parent":"Padre"}/>
          <SubPanel>
            <StudentOptions lang={this.props.lang}changeGrade={this.props.changeGrade} name={this.props.lang?"Student":"estudiante"} isActive={this.state.tabArray[0]}/>
            <ParentOptions  lang={this.props.lang} changeGrade={this.props.changeGrade} name={this.props.lang?"Parent":"Padre"} isActive={this.state.tabArray[1]}/>
          </SubPanel>
        </Container>
      )
    }
}
class StudentOptions extends Component{

  changeOptions(){
    
    if(this.props.isActive){
      return {display:"flex"}
    }else{
      return {display:"none"};
    }
 }
  render(){
    return(
      <Options style={this.changeOptions()}>
        <button onClick={()=>this.props.changeGrade(0)}>{this.props.lang?"Freshman":"Año Primero"}  </button>
        <button onClick={()=>this.props.changeGrade(1)}> {this.props.lang?"Sophomore":"Año segundo"} </button>
        <button onClick={()=>this.props.changeGrade(2)}> {this.props.lang?"Junior":"Año tercero"}</button>
        <button onClick={()=>this.props.changeGrade(3)}> {this.props.lang?"Senior":"Año final"}</button>
      </Options>
      
    )
  }
}

class ParentOptions extends Component{
  changeOptions(){ 
    if(this.props.isActive){
      return {display:"flex"}
    }else{
      return {display:"none"};
    }
 }
  render(){
    return(
            <Options style={this.changeOptions()}>
          <button  onClick={()=>this.props.changeGrade(4)} > {this.props.lang?"Parent":"Padre"}</button>
      </Options>
    )
  }
}

class Tab extends Component{
   active(){
    if(this.props.isActive===true){
      let activeTab={
        color:`${Styles.color.font1}`,
        backgroundColor: `${Styles.color.primary}`,
        borderColor: `${Styles.color.font1}`
      }
      return(activeTab)
    }
   } 
  render(){
    return(
      <TabStyle style={this.active()} onClick={this.props.toggle} > {this.props.name}</TabStyle>
    )
  }

}