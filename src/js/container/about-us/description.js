import React from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';


const Container=styled.div`
    display:flex;
    align-items:center;
    background-color:${Styles.color.primary};
    color:${Styles.color.font1};
    font-size:20px;
    max-width:70vw;
    height:200px;
    margin:40px;
    @media (max-width: 580px) {
        bottom:30%;
    } 
    box-sizing:border-box;
`

export default class Description extends React.Component{
    render(){
        return (
            <Container style={{padding:this.props.description===""?0:20}}>
                {this.props.description}
            </Container>
        )  
    }
}