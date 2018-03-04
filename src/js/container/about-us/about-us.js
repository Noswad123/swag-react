import React, { Component } from 'react';
import styled from 'styled-components';
import Styles from '../../style/styles'
import { Link} from 'react-router-dom';

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
  border-bottom: solid ${Styles.color.tertiary};
}
`
const Indicators =styled.div`
bottom: -50px;
         
         li {
            background-color: grey;
            border: none;
            width: 15px;
            height: 15px;
            margin: 0px;
            margin-left: 5px;
            margin-right: 5px;
         }
         
         li.active {
            background-color: ${Styles.color.tertiary};
         }

`


export default class AboutUs extends Component {
  render() {
    return (
        <Container>
            <Header className="header">
              
                    <h1 className="title">About Us</h1>
                    <Link  to="/meet">meet the team</Link>
                
            </Header>

            

             

              <section id="interns">
                <h4 className="title">Our interns</h4>
                <div className="content">
                    <div className="container">
                    <div id="intern-slider" className="carousel slide" data-ride="carousel" data-pause="null" data-interval="3500">
                      <div id="intern-slider" className="carousel slide">
                          <Indicators>
                            <li data-target="#intern-slider" data-slide-to="0" className="active"></li>
                            <li data-target="#intern-slider" data-slide-to="1"></li>
                            <li data-target="#intern-slider" data-slide-to="2"></li>
                          </Indicators>
                          <div className="carousel-inner">
                            <div className="item active">
                                <div className="card flex">
                            <h3 className="title-above">Pani Zlata</h3>
                                  <div className="picture" style={{backgroundImage: "url(https://s14.postimg.org/p7hev60o1/Unknown_2.jpg)"}}></div>
                                  <div className="info">
                                      <h3 className="title">Pani Zlata</h3>
                                      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corporis illum debitis deserunt velit quis non fuga necessitatibus recusandae beatae excepturi id consequuntur dignissimos ullam porro dolorum, sapiente optio repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ab dolor libero sequi laudantium provident, deserunt voluptatum dolorem necessitatibus quisquam neque quia odit perferendis quibusdam ratione ex culpa nisi fugiat?</p>
                                  </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card flex">
                            <h3 className="title-above">Pani Zlata</h3>
                                  <div className="picture" style={{backgroundImage: " url(https://s14.postimg.org/p7hev60o1/Unknown_2.jpg)"}}></div>
                                  <div className="info">
                                      <h3 className="title">Pani Zlata</h3>
                                      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corporis illum debitis deserunt velit quis non fuga necessitatibus recusandae beatae excepturi id consequuntur dignissimos ullam porro dolorum, sapiente optio repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ab dolor libero sequi laudantium provident, deserunt voluptatum dolorem necessitatibus quisquam neque quia odit perferendis quibusdam ratione ex culpa nisi fugiat?</p>
                                  </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card flex">
                            <h3 className="title-above">Pani Zlata</h3>
                                  <div className="picture" style={{backgroundImage: "url(https://s14.postimg.org/p7hev60o1/Unknown_2.jpg)"}}></div>
                                  <div className="info">
                                      <h3 className="title">Pani Zlata</h3>
                                      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corporis illum debitis deserunt velit quis non fuga necessitatibus recusandae beatae excepturi id consequuntur dignissimos ullam porro dolorum, sapiente optio repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ab dolor libero sequi laudantium provident, deserunt voluptatum dolorem necessitatibus quisquam neque quia odit perferendis quibusdam ratione ex culpa nisi fugiat?</p>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                </div>
              </section>

              <section id="internship">
                <h4 className="title">Are you interested in internship?</h4>
                <div className="content">
                    <div className="flex">
                     
                          <div>
                            <h3>Join our team</h3>
                          </div>
                     
                          <div>
                            <h3>I want to be intern</h3>
                          </div>
                    
                    </div>
                </div>
              </section>
            </Container>
    );
  }
}

