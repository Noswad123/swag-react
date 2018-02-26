import React, { Component } from 'react';

import styled from 'styled-components';

const Container=styled.div`
min-height:80vh;
`
const Filter=styled.div``
const Wrapper=styled.div`

`
const Title=styled.div`

`
const Author=styled.div`

`
const Article=styled.div``

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Filter>
          by date
          by blogger
          by category
          </Filter>
        <Wrapper>
          <Title>
            Title of Blog
           </Title>
           <Author>
             By Author Name
             </Author>
           <Article>
             This is a short article about all the good that SWAG to College is doing in the world. 
             I will add some ipsum text now.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Morbi finibus eros id urna accumsan,quis pulvinar urna accumsan. Donec quis nulla at nulla pellentesque finibus.
             Phasellus iaculis lacus ac orci fermentum, vel tempus lacus ultricies. 
             Aenean turpis risus, bibendum non facilisis vitae, ullamcorper at tortor.
              Maecenas convallis dignissim feugiat. Nam metus nibh, interdum at ligula et, egestas fringilla urna.
               Aliquam erat volutpat. Aliquam finibus turpis nunc, eget ultricies dolor pharetra vel. 
               Praesent justo mi, laoreet eget maximus id, varius eu eros. Integer nec orci pretium sem consectetur tincidunt. 
               Vivamus non pulvinar ex. In purus eros, blandit in leo sit amet, dapibus lacinia sapien.
             </Article>
        </Wrapper>
      </Container>
    );
  }
}