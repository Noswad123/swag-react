import styled from 'styled-components';
import React, {Component} from 'react';
import Styles from '../../style/styles';

const Container=styled.div`
    display:flex;
    width:15%;
    flex-direction:column;
    background-color:${Styles.color.primary};
    align-items: center;
    justify-content:space-between;
    height:300px;
    position:relative;
    margin-bottom:10px;
    cursor:pointer;
    img{
        width:100%;
    }
    border:solid white;
    a{
        margin-top:100px;
    }
    @media (max-width: 1080px) {
        width:20%;
    } 
    @media (max-width: 800px) {
        width:25%;
    } 
    @media (max-width: 690px) {
        width:250px
    } 
   
`
const Name=styled.div``
const Picture=styled.img`
height:250px;
object-fit:cover;
object-position:0% 0%`
const Wrapper=styled.div`
color:${Styles.color.font1};
display:flex;
width:100%;
height:100%;
flex-direction:column;
align-items:center;
justify-content:center;
border-top:solid white;`

const Position=styled.div``
export default class TeamMember extends Component { 
    render(){
        return(
            <Container onClick={()=>this.props.openPopUp(this.props.id)}>
                <Picture src={this.props.img} alt={this.props.name}/>
                <Wrapper>
                <Name>{this.props.name}</Name>
                <Position>{this.props.position}</Position>
                </Wrapper>
            </Container>
        )
    }
}