import React, { Component } from 'react';
import styled from 'styled-components';

const Container=styled.div`
min-height:80vh;
margin-top: 3em;
  display: grid;
  grid-template-columns: 15% 1fr 1fr 15%;
`
const Header= styled.div`
grid-column-start:2;
grid-column-end: 4;
display: flex;
flex-direction: column;
align-items: center;
h1 {
color: #09335D;
}
p{
  text-align:center;
}

`
const Cta=styled.div`
display: flex;
      justify-content: space-between;
      grid-column-start:2;
      grid-column-end: 4;
      grid-row-start: 2;
`
const Option=styled.div`
color: black;
      display: flex;
      justify-content: center;
      align-items: center;
    background-image: url(./img/20543_4_orig.png);
    height: 200px;
      width: 200px;
      &:hover{
          display: hidden;
          background-color: #09335D;
          h3{
              display: none;
          }
          div{
              display: flex;
              padding: 10px;
              align-items: center;
              text-align: center;
          }
      }
      div{
          color:white;
          display: none;
        background-color: #09335D;
        height: 100%;
        width:100%;
      }
`
const Gallery=styled.div`
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-row-start: 3;
    grid-column-start:2;
      grid-column-end: 4;
    .items {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 20em;
      justify-content: center;
      margin: 1em;
      img {
        width: 20em;
        margin: 1em;
      }
      button {
        background-color: white;
        color: #2a92e5;
        border-style: solid;
        border-color: #2a92e5;
        height: 3em;
        width: 15em;
      }
      button:hover {
        background-color: #2a92e5;
        color: white;
      }
    }
`
export default class GetInvolved extends Component {
  render() {
    return (
      <Container>
           
        <Header>
          <h1>Welcome</h1>
          <p>
            Our vision is to close the achievement gap and ensure every underserved high school and college student has a pathway to
            reach their goals.
          </p>
        </Header>
  
        <Cta>
          <Option>
            <h3>Become a Mentee</h3>
            <div >
              Get help with the college process
            </div>
          </Option>
  
          <Option>
            <h3>View Timeline</h3>
            <div >Have a plan for every month for each year</div>
          </Option>
  
          <Option>
            <h3>Become a Mentor </h3>
            <div >Help someone achieve their goals</div>
          </Option>
  
        </Cta>
  
        <Gallery>
            <div className="items">
              <img src={"./img/9074079_4_orig.png"} alt="Picture12" />
              <br/>
              <button >Opportunities for High School Students</button>
        
            </div>
        
            <div className="items">
              <img src={"./img/jls-3197_orig.jpg"} alt="Picture1" />
              <br/>
              <button >Opportunities for Community Leaders</button>
            </div>
  
            <div className="items">
              <img src={"./img/20543_4_orig.png"} alt="Picture2" />
              <br/>
              <button >Opportunities for College Students</button>
            </div>
  
            <div className="items">
              <img src={"./img/jls-3073_orig.jpg"} alt="Picture3" />
              <br/>
              <button>Opportunities for Parents ​and Guardians</button>
            </div>
        
            <div className="items">
              <img src={"./img/9769588_4_orig.png"} alt="Picture4" />
              <br/>
              <button>Opportunities for Young Professionals</button>
            </div>
        
            <div className="items">
              <img src={"./img/jls-3344_1_orig.jpg"} alt="Picture4" />
              <br/>
              <button >Opportunities for School Administration</button>
            </div>
  
        </Gallery>
  
  
      </Container>
    );
  }
}

