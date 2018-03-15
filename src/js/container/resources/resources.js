import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles';
import ResourcesData from '../../data/resources.data';
import OptionResources from './option-resources';
import ContentResources from './content-resources';
import {connect} from 'react-redux';

const Container=styled.div`
  min-height:80vh;
  display:flex;
  justify-content:space-between;
  padding:30px;
`
const FlexWrapper=styled.div`
  width:500px;
  margin-right:50px;
`

const Wrapper=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:${Styles.color.primary};
  border-radius:10px;
  padding:10px;
`

class Resources extends Component {
  constructor(){
    super();
    this.state={
      resourceIndex:0
    }
  }
 
  changeIndex(input){
    this.setState({resourceIndex:input})
  }
  render() {
    return (
      <Container>
        <FlexWrapper>
          <Wrapper>
            {
              ResourcesData.map((element, index)=>{
                return(
                    <OptionResources key={index} linkIndex={index} changeIndex={this.changeIndex.bind(this)} name={element.section} blurb={element.blurb}/>
                )
              })
              
            }
          </Wrapper>
          </FlexWrapper>
        <ContentResources  resource={ResourcesData[this.state.resourceIndex].links}/>
      </Container>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Resources);
