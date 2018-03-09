import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import { Link} from 'react-router-dom';
import CoreValues from './core-value';

const Container=styled.div`
min-height:80vh;
display: flex;
flex-direction:column;
align-items:center;
`
const Header=styled.div`
display: flex;
width:100%;
flex-direction:column;
align-items:center;
h1{
  border-bottom: solid ${Styles.color.accent};
}
a{
  color:${Styles.color.tertiary}
}
`
const Section=styled.div`
display:flex;
justify-content:space-between;
padding:50px;
width:100%;
box-sizing:border-box;
div{
  width:60%;
}
`
const Title=styled.h1``
const LinkWrapper=styled.div`
a{
  margin-right:20px;
}
`

export default class AboutUs extends Component {
  render() {
    return (
        <Container>
          <Header className="header">
            <h1 className="title">Who We Are</h1>
            <LinkWrapper>
              <Link  to="/meet">Meet the team</Link>
              <Link  to="/contactus">Contact us</Link>
            </LinkWrapper>
          </Header>
          <Section>
            <Title> Our Story</Title>
            <div> 
              <p>In February 2015, Raj Salhotra, one of our co-founders, went out for lunch. He noticed the cashier seemed to be in high-school, so Raj asked him his goals. He told Raj that he was a 12th grade student and aspired to attend college but felt it was too expensive. Raj explained the resources available to him, the Pell Grant and the FAFSA.  This student had real dreams, but the lack of information could have left those goals unfulfilled.  Raj shared this interaction with Jamal, and they devised a plan to assist low-income and first generation students with matriculating to college.</p>
              <p>Raj and Jamal, however, immediately realized they could not do this alone. They recruited several college students from Houston Independent School District (HISD), YES Prep, and KIPP to serve as the initial mentors. Today, many of those same students form the core SWAG To College Leadership Team, and their perspectives, experiences, and beliefs are invaluable to helping SWAG To College succeed. Quite simply, without our college student Leadership Team members, SWAG To College could not serve students effectively. </p>
            </div>
          </Section>
          <Section>
            <Title> Mission Statement</Title>
            <div> 
              <p>Our mission is to provide near-peer mentorship for underserved high school and college students to help them matriculate to college, graduate from college, and enter the workforce.</p>
            </div>
          </Section>
          <Section>
            <Title> Vision</Title>
            <div>
              <p>Our vision is to close the achievement gap and ensure every underserved high school and college student is on the pathway to reach their goals.</p>
            </div> 
          </Section>
          <CoreValues/>
        </Container>
    );
  }
}

