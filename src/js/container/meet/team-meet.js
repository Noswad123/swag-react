import styled from 'styled-components';
import React, {Component} from 'react';
import Styles from '../../style/styles';

const Container=styled.div`
    display:flex;
    width:25%;
    flex-direction:column;
    background-color:${Styles.color.primary};
    align-items: center;
    height:300px;
    position:relative;
    margin-bottom:10px;
    cursor:pointer;
    img{
        width:100%;
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
flex-direction:column;
align-items:center;`

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