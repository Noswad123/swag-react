import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import Content from './content-involved';
import Involved from '../../data/get-involved.data';
import Styles from '../../style/styles';

const Container = styled.div`
min-height:80vh;
display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
const ButtonWrapper = styled.div`
  margin-top:${Styles.size.l};
  margin-left:50px;
  width: 150px;
  max-height:300px;
  background-color:${Styles.color.primary};
  grid-column-start:1;
  grid-row-start:1;
  padding:20px;
  display:flex;
  border-radius:${Styles.size.xs};
  flex-direction: column;
  justify-content: space-around;
`
const Option = styled.button`
background-color:white;
    color:black;
    border:solid black;
    height: 50px;
    border-radius:${Styles.size.xs};
    margin-bottom:${Styles.size.xs};
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

  render() {

    return (
      <Container>          
             <ButtonWrapper>
               {this.state.how.map((element, index)=>{ 
                return <Buttons  action={this.handler} key={index} index={index} data={element}/>
               })}
            

          </ButtonWrapper>
        
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