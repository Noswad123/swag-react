import styled from 'styled-components';
import React, {Component} from 'react';
import Styles from '../../style/styles';
import Team from '../../data/team.data';
import TeamMember from './team-member';
import FilterOption from './filter-meet'
import PopUP from './popup';
import {connect} from 'react-redux';
import Navbar from "../../component/navbar"
const Container=styled.div`
min-height:100vh;
`
const Header=styled.div`
    font-family:${Styles.font.header};
    font-size:${Styles.size.l};
    color:${Styles.color.font1};
    font-weight:700;
    text-transform:uppercase;
    @media (max-width: 520px) {
        font-size:60px;
    } 
    @media (max-width: 390px) {
        font-size:40px;
    } 
`
const Wrapper=styled.div`
    background-color:${Styles.color.secondary};
    margin:0px;
    text-align:center;
`
const Filter=styled.ul`
list-style-type: none;
margin:0px;
padding:5px;`

const Staff=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:50px;
box-sizing:border-box;
color:${Styles.color.font2};
background-color:${Styles.color.secondary};
@media (max-width: 690px) {
    flex-direction:column;
    align-items:center;
} 
`
class Meet extends Component{
    constructor(){
        super();
        this.state={
            current:"All",
            selectedStaff:0,
            isPopUp:false
        }
        this.feature=Team[this.state.selectedStaff];
    }
    changeFilter(option){
       this.setState({current:option});
       console.log(this);
    }
    changePopUp(){
        if(this.state.isPopUp){
            return {display:"flex"}
        }else{
            return {display:"none"}
        }
    }
    openPopUp(id){
        console.log(id);
        this.setState({
            isPopUp:true,
            selectedStaff:id
        })
    }
    closePopUp(){
        this.setState({isPopUp:false})
    }
    render(){
        return(
            <Container>
                <Navbar/>
            <Wrapper>
                <Header>{(this.props.isEng)?"Meet The Team ":"Conoce el equipo"}</Header>
                <Filter>                
                    <FilterOption key="all" filterName="All" current={this.state.current} changeFilter={this.changeFilter.bind(this)}>{(this.props.isEng)?"All":"Todos"}</FilterOption>
                    <FilterOption key="board" changeFilter={this.changeFilter.bind(this)} current={this.state.current} filterName="Board of Directors" >{(this.props.isEng)?"Board of Directors":"Los directores"}</FilterOption>
                    <FilterOption key="intern" changeFilter={this.changeFilter.bind(this)}  current={this.state.current} filterName="Interns">{(this.props.isEng)?"Interns":"Need translation"}</FilterOption>
                    <FilterOption key="advisors" changeFilter={this.changeFilter.bind(this)}  current={this.state.current} filterName="Board of Advisors">{(this.props.isEng)?"Board of Advisors":"Need translation"}</FilterOption>
                </Filter>
                </Wrapper>
                <PopUP closePopUp={this.closePopUp.bind(this)} display={this.changePopUp()} img={Team[this.state.selectedStaff].imgUrl} name={Team[this.state.selectedStaff].name} bio={Team[this.state.selectedStaff].bio} position={Team[this.state.selectedStaff].position}/>
                <Staff>
                {
                    Team.map(
                        (element,index)=>{
                            
                            if(this.state.current==="All"){
                                return<TeamMember key={index} id={index} openPopUp={this.openPopUp.bind(this)} position={element.position} bio={element.bio} name={element.name} img={element.imgUrl}/>
                            }else if(this.state.current===element.domain){
                                return<TeamMember key={index} id={index} openPopUp={this.openPopUp.bind(this)} position={element.position} bio={element.bio} name={element.name} img={element.imgUrl}/>
                            }
                            return null;
                        }
                    )
                    
                }
                </Staff>
            
            </Container>
        )
    }
}
const mapStateToProps= state=>{
    return{
        isEng:state.LangReducer.isEng
    }
};
  
  
function mapDispatchToProps(dispatch){
    return{
      onUpdateLang:()=>{
        const action={type:"UPDATE_LANG",payload:false};
        dispatch(action);
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Meet);