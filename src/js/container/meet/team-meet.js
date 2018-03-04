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

img{
    width:100%;
}
&:hover{
        height:auto;
       
        img, div:nth-child(2){
            display:none;
        }
        >div{
            &:last-child{
                display:block;
                position:absolute;
                div{
                    display:block;
                }
            }
        } 
    
}
`
const Name=styled.div``
const Picture=styled.img`
height:250px;
object-fit:cover;
object-position:0% 0%`
const Wrapper=styled.div`
color:grey;
display:flex;
flex-direction:column;
align-items:center;`
const Bio=styled.div`
display:none;
color:${Styles.color.font1};

`
const Position=styled.div``
export default class TeamMember extends Component {

    render(){
        return(
            <Container>
                <Picture src={this.props.img} alt={this.props.name}/>
                <Wrapper>
                <Name>{this.props.name}</Name>
                <Position>{this.props.position}</Position>
                </Wrapper>
                <div style={{position:"relative"}}><Bio>{this.props.bio}</Bio></div>
            </Container>
        )
    }


}