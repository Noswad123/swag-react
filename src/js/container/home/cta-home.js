import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'

const Container=styled.div`
display: flex;
      justify-content: space-between;
      grid-column-start:2;
      grid-column-end: 5;
      grid-row-start: 2;
`
const Option=styled.div`
color: black;
      display: flex;
      justify-content: space-around;
      align-items: center;
    background-color:${Styles.color.tertiary};
      width: 30%;
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

export default class GetInvolved extends Component {
    render() {
      return (
<Container>
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

    </Container>

      )
    }
}