import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-height:80vh;
display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
const Dropdown = styled.div`
background-color: #09335D;
position: relative;
color:white;
padding:20px;
&:hover{
    color:grey;
    > div{
        display:flex;
        flex-direction: column;
        position: absolute;
    }
}
`
const ButtonWrapper = styled.div`
display: none;
margin-top:15px;
`
const Option = styled.button`
background-color:white;
    color:#2a92e5;
    border-style: solid;
    border-color: #2a92e5;
    height: 50px;
    width: 200px;
    &:hover{
      background-color:#2a92e5;
      color:white;
  }
`
const Form = styled.div`
grid-column-start: 5;
        grid-column-end:7;
        background-color: #09335D;
        color:white;
        button{
          width:30%;
          height: 40px;
          margin:10px;
      }
        `
const FormTitle = styled.div``
const Already = styled.div``
const Content = styled.div``
const Questions = styled.div``
const Title = styled.div``

export default class GetInvolved extends Component {

  render() {

    return (
      <Container>
        <Dropdown>
          How you would like to get involved?
             <ButtonWrapper>
            <Option>High School</Option>
            <Option>College</Option>
            <Option>Parents</Option>
            <Option>Young Professional</Option>
            <Option>Community Leader</Option>
            <Option>School Administration</Option>
            <Option>Donate</Option>

          </ButtonWrapper>
        </Dropdown>
        <Content>
          <Title>
            Mentor
                </Title>
          <img src={"./img/jls-3159.jpg?1505096070"} alt="Pictur" style={{ width: 533, maxWidth: "100%" }} />
          <p>
            As a college student, there are several ways to become involved in SWAG To College. Specifically, you can: (1)
              serve as a mentor for a high school student; (2) if you are a college freshman or sophomore, receive an upperclassman
              mentor; (3) if you are a college junior or senior, serve as a mentor for an underclassman; or (4) if you are
              a college sophomore, junior, or senior, receive a mentor who is a Young Professional in your career field of
              interest.
            </p>
        </Content>
        <Form>
          <FormTitle>
            Title of the Form
                  </FormTitle>
          <Questions>
            <label>Question 1</label>
            <input type="text" />
          </Questions>
          <Already>
            Already signed up link
                    </Already>
          <button>back</button>
          <button>Next</button>
        </Form>
      </Container>
    );
  }
}

