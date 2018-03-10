import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'

const Container=styled.div`
min-height:80vh;
background-color:${Styles.color.tertiary};
`
const Wrapper=styled.div`
margin:20px;
`;
const Name=styled.a`
color:${Styles.color.accent}
`;
const Description=styled.div`
font-family:${Styles.font.text}

`;


export default class ContentResources extends Component {
 
  render() {
    return (
        <Container>
          {this.props.resource.map((element,index)=>{
                return(
                    <div>
                        <Resource key={element} url={element.url} description={element.description} name={element.name} />
                    </div>
                )
          })}
        </Container>
    );
  }
}


class Resource extends Component{

render(){

    return(
        <Wrapper>
            <Name href={this.props.url} target="_blank">{this.props.name}</Name>
            <Description>{this.props.description}</Description>
        </Wrapper>
    )
}

}