import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'
import Months from './months-main-timeline';

const Container = styled.div`
    width:80%;
    min-height:80vh;
    padding: 32px 0; 
    display:flex;
    flex-direction:column;
    align-items:center;  
`
const Title = styled.div`
    font-size:${Styles.size.l};
    font-family:${Styles.font.title};
    color:${Styles.color.font1};
    font-weight:700;
    text-transform:uppercase;`
const Goals = styled.ul`
    font-size:25px;
    color:${Styles.color.font1};
    list-style:none;
    li{
        margin-top:10px;
    }
`

export default class Main extends Component{
      render(){
        return(
            <Container >
                <Title>{this.props.timeline.grade}</Title>
                <Goals>
                    {this.props.timeline.goals.map((element,index) => {
                        return <li key={index}>{element}</li>
                    })}
                </Goals>
                <Months timeline={this.props.timeline}/>
            </Container>
          
        )
      }
    }