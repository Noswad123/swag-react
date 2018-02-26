import React, { Component } from 'react';
import styled from 'styled-components';

import Months from './months-main-timeline';

const Container = styled.div`
width:80vw;
min-height:80vh;
padding: 32px 0;
`
const Title = styled.div``
const Goals = styled.ul``

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