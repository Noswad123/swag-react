import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


const Container=styled.div``

const Month = styled.button`
width:85%;
height:30px;
opacity: 1;
z-index: 100;
background-color: #09335D;
color: white;
border: solid white;
&:hover{
    color: grey;
    border:solid grey;
}
`
const slide = keyframes`
0% {
  transform: translateY(-100%);
  opacity: 0;
}
50% {
  transform: translateY(0);
  opacity: 1;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`

const Steps= styled.div`
  height: auto;
  width:auto;
  transition:all 2s;
  animation-name: ${slide};
  color: #09335D;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction:normal;
  animation-timing-function: ease-in-out;
  padding:10px;

`


export default class Months extends Component{
    render(){
        return(
            <Container>
                {this.props.timeline.months.map((element ,index)=> {
                    return (
                        <div key={index}>
                            <MonthGroup month={element.month}  steps={element.steps} key={index} />                           
                        </div>
                )
                })}
            </Container>
        )
    }
}
class MonthGroup extends Component{
    constructor (){
        super();
        this.state={
        displayType:"none"
        }
    }
    slideEffect(){
        console.log(this);
        if(this.state.displayType==="none"){
            this.setState({displayType:"block"})
        }else{
            this.setState({displayType:"none"})
        }
        console.log("Slide to right");
   }
    render(){
        
        return(
            <div>
                <Month onClick={this.slideEffect.bind(this)}>{this.props.month}</Month>
                {this.props.steps.map((step,index)=>{
                   
                    return(
                        <Steps displayMe="Block" key={index} text={step} style={{display:this.state.displayType}}>
                            {step} 
                        </Steps>
                    )
                })}

            </div>
        )
    }
}
