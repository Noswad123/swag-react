import styled from 'styled-components';
import React,{Component} from 'react'
import Styles from '../../style/styles'


const Container=styled.div`
    margin:10px 0;
`
const Name=styled.button`
    background-color:${Styles.color.secondary};
    color:${Styles.color.font2};
    border-style: solid;
    border-color: ${Styles.color.font2};
    padding:5px 5px;
    text-align:center;
    height: 40px;
    width:170px;
    border-radius:10px;
    &:hover{
        background-color:${Styles.color.tertiary};
        color:${Styles.color.accent};
        border-color: ${Styles.color.accent};
    }
`


export default class OptionResources extends Component{
    render (){

        return(
            <Container>
                <Name onClick={()=>this.props.changeIndex(this.props.linkIndex)}>  {this.props.name}</Name>
            </Container>

        )
    }
}