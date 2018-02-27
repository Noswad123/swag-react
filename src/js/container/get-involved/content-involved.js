import styled from 'styled-components';
import React,{Component} from 'react'



const Container=styled.div`
grid-row-start:1;
grid-column-start:3;
grid-column-end:5;
margin-top:32px`
const Title = styled.div``
export default class Content extends Component{
render (){

    return(

        <Container>
            <Title> {this.props.data.level}
                </Title>
          <img src={this.props.data.imgUrl} alt="Pictur" style={{ width: 533, maxWidth: "100%" }} />

          <p>{this.props.data.blurb}</p>
            </Container>
    )
}
}