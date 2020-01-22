import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import mainPic from '../images/italy.jpg';
import './home.css';
import {Link} from "react-router-dom";

var moment = require('moment');
moment().format();


class Home extends React.Component {
  
  render() {
    return(
      <div>
        <div className={'imageOverlay'}>
          <img src={mainPic} className={'fullWidthImage'} alt={'Banner'}/>
          <div className={'imageTitle'}>
            <h1 className={'lightFont'}>://DEVELOPER</h1>
            <h2 className={'lightFont'}>Nathan Hellinga</h2>
          </div>
          <div className={'readMore'}>
            <h3 className={'lightFont'}>Read More</h3>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px"
                 viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" className="jsx-156389127">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="white" stroke="none"
                 className="jsx-156389127">
                <path
                  d="M207 4822 l-207 -207 1278 -1278 1277 -1277 1275 1275 1275 1275 -210 210 -210 210 -1065 -1065 -1065 -1065 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z"
                  className="jsx-156389127"/>
                <path
                  d="M207 2652 l-207 -207 1223 -1223 1222 -1222 110 0 110 0 1218 1218 c669 669 1217 1222 1217 1227 0 6 -92 102 -205 215 l-205 205 -1068 -1068 -1067 -1067 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z"
                  className="jsx-156389127"/>
              </g>
            </svg>
          </div>
        </div>
        
        <Container className={'contentBlock'}>
          <Row>
            <Col>
              <h1 className={'lightFont center-text'}>
                Hi, I'm Nathan, A fourth year Computer Science student at Brock University. Here is some stuff.
              </h1>
            </Col>
          </Row>
          
          <Row>
            <Col md='4'>
              <h3 className={''}>
                About Me
              </h3>
              <p>
                I, Nathan Hellinga, am a 4th year computer science student at Brock University. Currently, I work for the Ontario Ministry of Transportation as a Developer where I've done work involving AI, Machine Learning, Computer vision and much more. Throughout my life I have always been intrigued and inspired by space, the final frontier, the great expanse, and aspire to one day contribute to the exploration and discovery of our universe.
              </p>
            </Col>
            
            <Col md='4'>
              <h3 className={''}>
                Software Development
              </h3>
              <ul className={''}>
                <li>Java, Python, C#, Javascript</li>
                <li>NOSQL (MongoDB), SQL</li>
                <li>REST API, Mobile app development, Cloud computing, Full stack deployment</li>
                <li>Flask, Angular, React, Ionic</li>
                <li>Machine Learning, Computer Vision</li>
              </ul>
            </Col>
            
            <Col md='4'>
              <h3 className={''}>
                Future Goals
              </h3>
              <h6 className={'lightFont italicsFont'}>
                These are some projects, frameworks or languages that I would like to tackle in the future.
              </h6>
              <ul className={''}>
                <li>GoLang</li>
                <li>Django</li>
                <li>React Native</li>
                <li>Ruby & Ruby on Rails</li>
              </ul>
            </Col>
          </Row>
        </Container>
        
        <Container className={'contentBlock'}>
          <Row>
            <Col style={{textAlign: 'center'}}>
              <Link className={'button'} to="/resume/">Resume</Link>
              {/*<Button text={'Projects'} clicked={() => this.props.changePage('Projects')}/>*/}
            </Col>
          </Row>
        </Container>

      </div>
      
    )
  }
  
  
  test = () => {
    console.log("testing");
  }
  
  getAge = () => {
    var today = moment();
    return (today.diff(moment([1996, 2, 2]), 'year'))
  }
  
}
export default Home;
