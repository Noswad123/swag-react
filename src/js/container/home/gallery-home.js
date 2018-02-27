import React, { Component } from 'react';
import styled from 'styled-components';

const Container=styled.div`
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

export default class Gallery extends Component {
    render(){
        return(
            <Container>
                <div className="items">
              <img src={"./img/mentees.png"} alt="Picture12" />
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
              <img src={"./img/school-admin.jpg"} alt="Picture4" />
              <br/>
              <button >Opportunities for School Administration</button>
            </div>
            
            </Container>

        )
    }
}