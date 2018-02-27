import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Content from './content-involved'
import Involved from '../../data/get-involved.data'

const Container = styled.div`
min-height:80vh;
display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
const Dropdown = styled.div`
color:#2a92e5;
text-decoration:underline;
position: relative;
grid-column-start:1;
grid-column-end:3;
padding:20px;
&:hover{
    color:grey;
    > div{
        display:flex;
        flex-direction: column;
        position: absolute;
    }
}
`
const ButtonWrapper = styled.div`
display: none;
margin-top:15px;
`
const Option = styled.button`
background-color:white;
    color:#2a92e5;
    border-style: solid;
    border-color: #2a92e5;
    height: 50px;
    width: 200px;
    &:hover{
      background-color:#2a92e5;
      color:white;
  }
`
const slideLeft=keyframes`
0%{
 transform:translateX(200%);
}
100%{
  transform:translateX(0);
}

`
const Form=styled.div`
  height:400px;
  display:none;
  width:200px;
  max-width:100%;
  background-color:pink;
  color:black;
  animation-name:${slideLeft};
  animation-duration:3s;
  
`
const Click=styled.div`
    background-color:blue;
    grid-column-start:6;
  grid-column-end:7;
    position:relative; 
    height:100px;
    width:100px; 
&:hover{
    >div{
      display:flex;
    }
  }
`

export default class GetInvolved extends Component {
constructor(){
  super();
  this.state={
    how:Involved,
    show:1
  }
  this.handler=this.handler.bind(this)
}
handler(i){

  this.setState({
    show:i
  })
}
whatThis(index){
  console.log(index);
  console.log(this.state.how);
  if(index){
  console.log(index)
  }else{
    console.log("no index")
  }
}
  render() {

    return (
      <Container>
        <Dropdown>
          How you would like to get involved?
             <ButtonWrapper>
               {this.state.how.map((element, index)=>{ 
                return <Buttons  action={this.handler} key={index} index={index} data={element}/>
               })}
            

          </ButtonWrapper>
        </Dropdown>
        <Content data={this.state.how[this.state.show]}/>
        <Click>
        <Form onClick={()=>console.log(this.state.how[this.state.show].options[0].form)} formData={this.state.how[this.state.show].options[0].form}>
          {this.props.formData}
          </Form>
        </Click>
          
      </Container>
    );
  }
}

class Buttons extends Component{
func(){
  console.log(this);
  console.log(this.props.action);
}
  render(){
    
    return(
      <Option onClick={()=>this.props.action(this.props.index)}>{this.props.data.level}</Option>
    )
  
  
  }
}