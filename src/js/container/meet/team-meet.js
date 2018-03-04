import styled from 'styled-components';
import React, {Component} from 'react';
import Styles from '../../style/styles';

const Container=styled.div`
display:flex;
width:25%;
flex-direction:column;
background-color:${Styles.color.primary};
align-items: center;
position:relative;
margin-bottom:10px;
img{
    width:100%;
}
&:hover{
   div:last-child{
    display:block;
    
   } 
    
}
`
const Name=styled.div``
const Picture=styled.img`
height:250px;
object-fit:cover;
object-position:0% 0%`
const Bio=styled.div`
display:none;
color:white;

`
const Position=styled.div``
export default class TeamMember extends Component {

    render(){
        return(
            <Container>
                <Picture src={this.props.img} alt={this.props.name}/>
                <div>
                <Name>{this.props.name}</Name>
                <Position>{this.props.position}</Position>
                </div>
                <div style={{position:"relative"}}><Bio>{this.props.bio}</Bio></div>
            </Container>
        )
    }


}