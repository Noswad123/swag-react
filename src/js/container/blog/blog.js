import React, { Component } from 'react';
import Styles from '../../style/styles'
import styled from 'styled-components';
import Blogs from '../../data/blog.data'

const Container=styled.div`
  min-height:80vh;
`
const Filter=styled.ul`
  list-style-type:none;
  > li{
    display:inline-block;
    margin-right:50px;
  }
`
const QuickLinks=styled.ul`
list-style-type:none;`
const Wrapper=styled.div`
  padding:64px;
  width:70%;
`
const Title=styled.div``
const Author=styled.div`
  margin-left:20px;
  margin-bottom:32px;
`

const SnippetWrapper=styled.div`
  width:100%;
  height:200px;
  background-color:${Styles.color.tertiary};
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px;
  box-sizing:border-box;
`
const Snippet=styled.div`
  background-color:${Styles.color.secondary};
  height:150px;
  width:30%;
  box-sizing:border-box;

`
const VerticalSplit=styled.div`
  display:flex;
`

const Search=styled.input``

  export default class Blog extends Component {
    render() {
      return (
        <Container>
          <SnippetWrapper>
            <Snippet>
              Mentee of the Month
            </Snippet>
            <Snippet>
              Mentor of the Month
            </Snippet>
            <Snippet>
              Testimonial of the Month
            </Snippet>
          </SnippetWrapper>
            <Filter>
              <li>Filter:</li>
              <li>by date</li>
              <li>by blogger</li>
              <li>by category</li>
              <Search placeholder="search"/>
            </Filter>
          
          <VerticalSplit>
            <Wrapper>
              <Title>
              {Blogs[0].title}
              </Title>
              <Author>
              By {Blogs[0].author}
              </Author>
          
              {Blogs[0].article.map((element,index)=>{
                
                if(element===2){
                  return(<div><br/></div>)
                }else{
                  return(<span> {element}</span>)
                }
              })}
              
             </Wrapper>
              <QuickLinks>
              <li>All Posts</li>
              <li>Recent Posts</li>
              <li>Bloggers</li>
              <li>Category</li>
              <li>Month</li>
              </QuickLinks>
          </VerticalSplit>
        </Container>
    );
  }
}