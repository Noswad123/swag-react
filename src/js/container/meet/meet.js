import styled from 'styled-components';
import React, {Component} from 'react';
import Styles from '../../style/styles';
import Team from '../../data/team.data';
import TeamMember from './team-meet';
import FilterOption from './filter-meet'
import { Link} from 'react-router-dom';
import PopUP from './popup';
import {connect} from 'react-redux';

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
            <div>
                < Link to="/aboutus"> {(this.props.isEng)?"Back":"Regresa"} </Link>
                <h1>{(this.props.isEng)?"Meet The Team ":"Conoce el equipo"}</h1>
                <Filter>                
                    <FilterOption key="all" filterName="All" current={this.state.current} changeFilter={this.changeFilter.bind(this)}>{(this.props.isEng)?"All":"Todos"}</FilterOption>
                    <FilterOption key="board" changeFilter={this.changeFilter.bind(this)} current={this.state.current} filterName="Board of Directors" >{(this.props.isEng)?"Board of Directors":"Los directores"}</FilterOption>
                    <FilterOption key="intern" changeFilter={this.changeFilter.bind(this)}  current={this.state.current} filterName="Intern">{(this.props.isEng)?"Interns":"Need translation"}</FilterOption>
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
const mapStateToProps= state=>{
    return{
        isEng:state.isEng
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