import styled from 'styled-components';
import React,{Component} from 'react'
import Styles from '../../style/styles'


const Container=styled.div`
margin:50px 0;
`
const Title=styled.div`
color:${Styles.color.primary};
font-size:35px;
font-weight:700;
text-align:center;`

const Buttons=styled.div`
background-color:${Styles.color.secondary};
    color:${Styles.color.tertiary};
    border-style: solid;
    border-color: ${Styles.color.tertiary};
    padding:10px 20px;
    text-align:center;
    height: 20px;
    width:200px;

`


export default class Options extends Component{
    render (){

        return(
            <Container>
                <Title>{this.props.data.title} </Title>
                <p>{this.props.data.summary}</p>
                <Buttons>{this.props.data.form}</Buttons>
            </Container>

        )
    }
}