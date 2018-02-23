import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Timelines from '../data/timeline.data';

const Container = styled.div`
  min-height:80vh;
  display: flex;
`
const SidePanel = styled.div`
  width:300px;
  padding: 50px;
`
const SubPanel = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #09335D;
  border-radius: 0 2% 2% 2% ;
  padding:10px;
  width:200px;
  height:200px;`
const Tabs = styled.button`
  background-color: #09335D;
  color:white;
  border-radius: 10px 10px 0 0;
  border-color: black;
  border-bottom: none;
  margin-right: 10px;
`
const Options = styled.div`
button{
  background-color:white;
    color:black;
    border-style: solid black;
    border-color: #09335D;
    border-radius: 8px;
    height: 32px;
    width: 128px;
    &:hover{
      background-color:#2a92e5;
      color:white;
      border-color: grey;
    }
}
`
/*
const slide = keyframes`
0% {
  transform: translateY(-50%);
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
`*/
const Wrapper = styled.div`
width:80vw;
`
const Title = styled.div``
const Goals = styled.ul``
const Months = styled.button`
width:100%;
opacity: 1;
z-index: 100;
background-color: #09335D;
color: white;
border-color: lightgrey;
&:hover{
    color: grey;
    border:white;
}
`
export default class Timeline extends Component {
  render() {
    return (
      <Container>
        <SidePanel>
          <Tabs> Student</Tabs>
          <Tabs>  Parent</Tabs>
          <SubPanel>
            <Options>
              <button>Freshman  </button>
              <button> Sophomore </button>
              <button> Junior</button>
              <button> Freshman</button>
            </Options>
          </SubPanel>
        </SidePanel>
        <Main timelines={Timelines}/>

      </Container>
    );
  }
}

class Main extends Component{


  render(){

    return(
      
<Wrapper >
          <Title>{this.props.timelines[0].grade}</Title>
          <Goals>
          {this.props.timelines[0].goals.map(element => {
           return <li>{element}</li>
          })}
             </Goals>

             {this.props.timelines[0].months.map(element => {
           return <Months>{element.month}</Months>
          })}
          
        </Wrapper>
      
    )
  }
}

