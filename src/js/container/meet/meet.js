import styled from 'styled-components';
import React, {Component} from 'react';
import Styles from '../../style/styles';
import Team from '../../data/team.data';
import TeamMember from './team-meet';
import FilterOption from './filter-meet'
import { Link} from 'react-router-dom';
import PopUP from './popup'

const Filter=styled.ul`
list-style-type: none;`

const Staff=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:50px;
box-sizing:border-box;
color:${Styles.color.font2};
`
export default class Meet extends Component{
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
            <div>
                < Link to="/aboutus"> Back </Link>
                <h1>Meet The Team </h1>
                <Filter>                
                    <FilterOption key="all" filterName="All" current={this.state.current} changeFilter={this.changeFilter.bind(this)}>All</FilterOption>
                    <FilterOption key="board" changeFilter={this.changeFilter.bind(this)} current={this.state.current} filterName="Board of Directors" >Board of Directors</FilterOption>
                    <FilterOption key="intern" changeFilter={this.changeFilter.bind(this)}  current={this.state.current} filterName="Intern">Interns</FilterOption>
                </Filter>
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
            </div>
        )
    }
}
