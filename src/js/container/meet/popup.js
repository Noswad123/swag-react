import styled from 'styled-components';
import React, {Component} from 'react';
import Styles from '../../style/styles';

const Container=styled.div`
display:flex;
width:60%;
background-color:${Styles.color.primary};
padding:20px;
height:300px;
position:fixed;
top:25%;
left:25%;
z-index:5;
overflow-y:scroll;
`
const Picture=styled.img`
height:250px;
object-fit:cover;
object-position:0% 0%
`
const Name=styled.h1``
const Bio=styled.p``
const Position=styled.div``
const XContainer=styled.div`
color:white;
position:absolute;
right:10px;
top:10px;
cursor:pointer;
`
export default class PopUp extends Component{
   
    render(){
        return(
            <Container style={this.props.display}>
                <X closePopUp={this.props.closePopUp} />>
                <Picture src={this.props.img} alt={this.props.name}/>
                <div>
                <Name>
                    {this.props.name}
                </Name>
                <Position>
                    {this.props.position}
                </Position>
                <Bio>
                    {this.props.bio}
                </Bio>
                </div>
            </Container>
        )
    }
}

class X extends Component{
    render(){
        return(
            <XContainer onClick={()=>this.props.closePopUp()}>
                X
            </XContainer>
        )
    }
}