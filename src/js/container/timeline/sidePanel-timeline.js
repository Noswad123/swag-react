import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'

const Container = styled.div`
  width:300px;
  padding: 50px;
`
const SubPanel = styled.div`
 
  background-color:${Styles.color.primary};
  border-radius: 0 2% 2% 2% ;
  padding: 16px 32px;
  width:128px;
  height:200px;`
const TabStyle = styled.button`
  background-color: ${Styles.color.secondary};
  color: #09335D;;
  border-radius: 10px 10px 0 0;
  border-color: ${Styles.color.font2};
  border-bottom: none;
 // margin-right: 10px;
`
const Option = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 100%;
button{
  background-color:${Styles.color.secondary};
    color:${Styles.color.font2};
    border: solid ${Styles.color.font2};
    border-radius: 8px;
    height: 32px;
    width: 128px;
    font-family:${Styles.font.text};
    &:hover{
      background-color:${Styles.color.tertiary};
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
         <Tab  toggle={this.toggleActive.bind(this)} isActive={this.state.tabArray[0]} name="Student"/>
        <Tab toggle={this.toggleActive.bind(this)} isActive={this.state.tabArray[1]} name=" Parent"/>
        <SubPanel>
         
          <StudentOptions changeGrade={this.props.changeGrade} name="Student" isActive={this.state.tabArray[0]}/>
          <ParentOptions  changeGrade={this.props.changeGrade} name="parent" isActive={this.state.tabArray[1]}/>
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
      <Option style={this.changeOptions()}>
            <button onClick={()=>this.props.changeGrade(0)}>Freshman  </button>
            <button onClick={()=>this.props.changeGrade(1)}> Sophomore </button>
            <button onClick={()=>this.props.changeGrade(2)}> Junior</button>
            <button onClick={()=>this.props.changeGrade(3)}> Senior</button>
      </Option>
      
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
            <Option style={this.changeOptions()}>
          <button  onClick={()=>this.props.changeGrade(4)} > Parent</button>
      </Option>
    )
  }
}



class Tab extends Component{

   active(){
    if(this.props.isActive===true){
      let activeTab={
        color:"white",
        backgroundColor: "#09335D"
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