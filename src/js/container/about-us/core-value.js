import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';

const Container=styled.div`
display: flex;
flex-direction:column;
align-items:center;
`
const Title=styled.h3`
color=${Styles.color.primary}
`;
const Value=styled.div`
display: flex;
flex-direction:column;
align-items:center;
padding:20px;
width:40%;
`;
const Wrapper=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`
const Name=styled.h5``;
export default class CoreValues extends Component{
    render(){
        return(

            <Container>
                <Title> {(this.props.lang)?"Core Values":"Need translation"}</Title>
                <Wrapper>
                    <Value>
                        <Name>{(this.props.lang)?"Service":"Need translation"}</Name>
                        <p>{(this.props.lang)?"Service is in the heart of all we do. Service means having the best interest of our community in mind at all times, and working tirelessly to ensure we serve the goals of our community. Service means prioritizing the quality of our organization for the good of mentors, mentees, schools, and parents purely because of our commitment to our mission."
                        :"Need translation"}</p>
                    </Value>
                    <Value>
                        <Name>{(this.props.lang)?"Diversity":"Need translation"}</Name>
                        <p>{(this.props.lang)?"SWAG To College is committed to diversity as it is defined through the intersection of education, age, ethnicity, income, ability, sexuality, stories, perspectives, and solutions. SWAG To College understands that diverse perspectives lead to more creative and dynamic ideas, actions, and outcomes that are representative of various needs and backgrounds. We also believe that promoting diversity in educational institutions and careers starts with our organization being a model of representation."
                        :"Need translation"}</p>
                    </Value>
                    <Value>
                        <Name>{(this.props.lang)?"Accessibility":"Need translation"}</Name>
                        <p>{(this.props.lang)?"SWAG To College accepts and respects that not everyone wants or needs our mentorship or our traditional view of an academic path. SWAG To College is committed to equal access to opportunity, regardless of each student’s academic achievements, background, or aspirations. Moreover, each member of SWAG To College pledges to be an accessible source of guidance and encouragement to any member who needs it."
                        :"Need translation"}</p>
                    </Value>
                    <Value>
                        <Name>{(this.props.lang)?"Dependability":"Need translation"}</Name>
                        <p>{(this.props.lang)?"Dependability means every member of the SWAG To College community is reliable, and we mean what we say. Moreover, every member is honest with every other member of our community and responds in a timely and professional manner. Finally, dependability includes taking responsibility and maintaining accountability for our mistakes and shortfalls. ​"
                        :"Need translation"}</p>
                    </Value>
                    <Value>
                        <Name>{(this.props.lang)?"Team":"Need translation"}</Name>
                        <p>{(this.props.lang)?"The SWAG To College team includes several communities working toward our community’s collective goals and our mentee’s individual goals in a trusting and judgement-free environment. Specifically, our team includes not only the SWAG To College staff but also mentees, mentors, parents, and schools. Every member of the SWAG To College team is committed to the organization’s mission and its development. As a team, we value every individual; we respect everyone’s work ethic and habits, and we support every other team member."
                        :"Need translation"}</p>
                    </Value>
                </Wrapper>
            </Container>
        )
    }
}