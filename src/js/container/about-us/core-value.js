import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';

const Container=styled.div` 
    z-index:5;
    min-height:70vh;
    width:100%;
    background:url(./img/meet-the-team_orig.jpg);
    background-size:contain;
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-position:center;
    position:relative;
`;
const Title=styled.div`
    font-family:${Styles.font.title};
    color:${Styles.color.font1};
    font-size:${Styles.size.l};
    text-transform:uppercase;
`
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    min-height:70vh;
    padding:100px 10px;
    box-sizing:border-box;
`
const Values=styled.div`
    display:flex;
    justify-content:space-between;
    
    width:80%;
`;
const Value=styled.div`
    &:hover{
        p{
            display:flex;
        }
    }
`
const Name=styled.div`
    background-color:${Styles.color.primary};
    border-radius:100%;
    width:125px;
    height:125px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${Styles.color.font1};
    font-family:${Styles.font.title};
  text-transform:uppercase;
`;


const Description=styled.p`
    position:absolute;
    background-color:${Styles.color.primary};
    color:${Styles.color.font1};
    width:60vw;
    padding:20px;
    z-index:9999;
    left:18%;
    display:none;
    bottom:50%;
`;

export default class CoreValues extends Component{
    render(){
        return(
            <Container>
                <Wrapper>
                    <Title>
                        Core Values
                    </Title>
                    <Values>
                        <Value>
                            <Name>{(this.props.isEng)?"Service":"Servicio"}</Name>
                            <Description  className="service">
                                {(this.props.isEng)?"Service is in the heart of all we do. Service means having the best interest of our community in mind at all times, and working tirelessly to ensure we serve the goals of our community. Service means prioritizing the quality of our organization for the good of mentors, mentees, schools, and parents purely because of our commitment to our mission."
                                :"Need translation"}
                            </Description>
                        </Value>
                        <Value>
                            <Name>{(this.props.isEng)?"Diversity":"Diversidad"}</Name>
                            <Description className="diversity">
                            {(this.props.isEng)?"SWAG To College is committed to diversity as it is defined through the intersection of education, age, ethnicity, income, ability, sexuality, stories, perspectives, and solutions. SWAG To College understands that diverse perspectives lead to more creative and dynamic ideas, actions, and outcomes that are representative of various needs and backgrounds. We also believe that promoting diversity in educational institutions and careers starts with our organization being a model of representation."
                            :"Need translation"}
                        </Description>
                        </Value>
                        <Value>
                            <Name>{(this.props.isEng)?"Accessibility":"accesibilidad"}</Name>
                            <Description className="accessibility">
                            {(this.props.isEng)?"SWAG To College accepts and respects that not everyone wants or needs our mentorship or our traditional view of an academic path. SWAG To College is committed to equal access to opportunity, regardless of each student’s academic achievements, background, or aspirations. Moreover, each member of SWAG To College pledges to be an accessible source of guidance and encouragement to any member who needs it."
                            :"Need translation"}
                        </Description>
                        </Value>
                        <Value>
                            <Name>{(this.props.isEng)?"Dependability":"confianza"}</Name>
                            <Description className="dependability">
                                {(this.props.isEng)?"Dependability means every member of the SWAG To College community is reliable, and we mean what we say. Moreover, every member is honest with every other member of our community and responds in a timely and professional manner. Finally, dependability includes taking responsibility and maintaining accountability for our mistakes and shortfalls. ​"
                                :"Need translation"}
                            </Description>
                        </Value>
                        <Value>
                            <Name>{(this.props.isEng)?"Team":"Equipo"}</Name>
                            <Description className="team">
                                {(this.props.isEng)?"The SWAG To College team includes several communities working toward our community’s collective goals and our mentee’s individual goals in a trusting and judgement-free environment. Specifically, our team includes not only the SWAG To College staff but also mentees, mentors, parents, and schools. Every member of the SWAG To College team is committed to the organization’s mission and its development. As a team, we value every individual; we respect everyone’s work ethic and habits, and we support every other team member."
                                :"Need translation"}
                        </Description>
                        </Value> 
                    </Values>     
                </Wrapper>              
            </Container>
        )
    }
}