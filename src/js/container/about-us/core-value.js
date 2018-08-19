import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import Description from './description';

const Container=styled.div` 
    z-index:5;
    min-height:70vh;
    width:100%;
    background:url(./img/interns.jpg);
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-position:center;
    position:relative;
`
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    min-height:70vh;
    padding:100px 100px;
    box-sizing:border-box;
    background-color:rgba(9,51,93,.2);
    
`
const Title=styled.div`
    font-family:${Styles.font.title};
    color:${Styles.color.font1};
    font-size:${Styles.size.l};
    
    text-transform:uppercase;
    @media (max-width: 480px) {
        font-size:60px;
    }
    @media (max-width: 340px) {
        font-size:45px;
    }
`

const Values=styled.div`
   display:flex;
   justify-content:space-between;
    width:100%;
    padding:0px;
`
const Value=styled.div`
    background-color:${Styles.color.primary};
    border-radius:100%;
    width:125px;
    height:125px;
    z-index:1;
    &:hover{
        background-color:${Styles.color.accent};
        div{
            color:${Styles.color.contrast};
        }
    }
    @media (max-width: 580px) {
        margin:5px;
    }
    
`
const Service=Value.extend``
const Diversity=Value.extend``
const Accessibility=Value.extend``
const Dependability=Value.extend``
const Team=Value.extend``
const Name=styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${Styles.color.font1};
    font-family:${Styles.font.title};
    
    text-transform:uppercase;
    @media (max-width: 700px) {
        width:100px;
        height:100px;
    }
    @media (max-width: 580px) {
        width:85px;
        height:85px;
        font-size:12px;
    }
`;

export default class CoreValues extends Component{
    constructor(props){
        super(props);
        this.state={description:""};
    }
    changeDescription(newDescription) {
        
        this.setState({
            description:newDescription
        });
      }
    render(){
        return(
            <Container>
                <Wrapper> 
                    <Title>
                        Core Values
                    </Title>
                    <Description description={this.state.description}/>
                    <Values>
                        <Service onMouseLeave={()=>this.changeDescription("")} onMouseEnter={()=>{
                            this.changeDescription((this.props.isEng)?"Service is in the heart of all we do. Service means having the best interest of our community in mind at all times, and working tirelessly to ensure we serve the goals of our community. Service means prioritizing the quality of our organization for the good of mentors, mentees, schools, and parents purely because of our commitment to our mission."
                            :"Need translation");}}>
                            <Name>{(this.props.isEng)?"Service":"Servicio"}</Name>
                        </Service>
                        
                        <Diversity onMouseLeave={()=>this.changeDescription("")} onMouseEnter={()=>{
                            this.changeDescription((this.props.isEng)?"SWAG To College is committed to diversity as it is defined through the intersection of education, age, ethnicity, income, ability, sexuality, stories, perspectives, and solutions. SWAG To College understands that diverse perspectives lead to more creative and dynamic ideas, actions, and outcomes that are representative of various needs and backgrounds. We also believe that promoting diversity in educational institutions and careers starts with our organization being a model of representation."
                            :"Need translation");}}>
                            <Name>{(this.props.isEng)?"Diversity":"Diversidad"}</Name>
                        </Diversity>

                        <Accessibility onMouseLeave={()=>this.changeDescription("")} onMouseEnter={()=>{
                            this.changeDescription((this.props.isEng)?"SWAG To College accepts and respects that not everyone wants or needs our mentorship or our traditional view of an academic path. SWAG To College is committed to equal access to opportunity, regardless of each student’s academic achievements, background, or aspirations. Moreover, each member of SWAG To College pledges to be an accessible source of guidance and encouragement to any member who needs it."
                            :"Need translation");}}>
                            <Name>{(this.props.isEng)?"Accessibility":"accesibilidad"}</Name>
                        </Accessibility>

                        <Dependability onMouseLeave={()=>this.changeDescription("")} onMouseEnter={()=>{
                            this.changeDescription((this.props.isEng)?"Dependability means every member of the SWAG To College community is reliable, and we mean what we say. Moreover, every member is honest with every other member of our community and responds in a timely and professional manner. Finally, dependability includes taking responsibility and maintaining accountability for our mistakes and shortfalls. ​"
                            :"Need translation") }}>
                            <Name>{(this.props.isEng)?"Dependability":"confianza"}</Name>
                        </Dependability>

                        <Team onMouseLeave={()=>this.changeDescription("")} onMouseEnter={()=>{
                            this.changeDescription((this.props.isEng)?"The SWAG To College team includes several communities working toward our community’s collective goals and our mentee’s individual goals in a trusting and judgement-free environment. Specifically, our team includes not only the SWAG To College staff but also mentees, mentors, parents, and schools. Every member of the SWAG To College team is committed to the organization’s mission and its development. As a team, we value every individual; we respect everyone’s work ethic and habits, and we support every other team member."
                            :"Need translation")}}>
                            <Name>{(this.props.isEng)?"Team":"Equipo"}</Name>
                        </Team> 

                    </Values>     
                </Wrapper>              
            </Container>
        )
    }
}