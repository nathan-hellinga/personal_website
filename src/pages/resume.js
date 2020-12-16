import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import headshot from '../images/headshot.jpg';
import './home.css';
import Button from '../components/button'

var moment = require('moment');
moment().format();


class Resume extends React.Component {

    render() {
        return(
            <div>
                <Container className={'contentBlock'}>
                    <Row className={'align-items-center'}>
                        <Col md={{ size: 3, offset: 3 }}>
                            <img src={headshot} className={'avatar'} alt={'Nathan Hellinga face'}/>

                        </Col>
                        <Col md={{ size: 6}} className={'responsive-align'}>
                            <h1 style={{'margin': '5px'}}>
                                Nathan Hellinga
                            </h1>
                            <h4 style={{'margin': '5px', 'color': '#459ab7'}}>
                                Developer
                            </h4>
                        </Col>
                    </Row>
                </Container>
                <Container className={'contentBlock'}>
                    <h2>EDUCATION</h2>
                    <hr/>
                    <Row>
                        <Col>
                            <div className={'resumeItem'}>
                                <p className={'alignLeft'}>
                                    Honors Bachelor of Science - Computer Science Co-op
                                </p>
                                <p className={'alignRight'}>
                                    September 2016 - December 2020
                                </p>
                                <p style={{'clear':'both'}}>
                                    Brock University, St Catharines, Ontario
                                </p>
                                <ul>
                                    <li>Minor in Business</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <h2 className={'topMargin'}>COMPUTER AND TECHNICAL SKILLS</h2>
                    <hr/>
                    <Row>
                        <Col>
                            <ul>
                                <li>Experienced with coding in Java, VBA, JS, C#, Python and more</li>
                                <li>Used many popular frameworks</li>
                                <ul>
                                    <li>
                                        WEB: React, Angular, Express, Flask
                                    </li>
                                    <li>
                                        DATA SCIENCE: Pandas, Numpy, MatPlotLib
                                    </li>
                                    <li>
                                        MACHINE LEARNING: Tensorflow, Keras, PyTorch, Detectron 2
                                    </li>
                                    <li>
                                        MOBILE: React-Native, Expo
                                    </li>
                                </ul>
                                <li>
                                    Skills in implementing, training and testing machine learning computer vision solutions
                                </li>
                                <li>
                                    Experience with creating and managing web server infrastructure
                                </li>
                                <li>
                                    Quick and effective learner
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <h2 className={'topMargin'}>WORK EXPERIENCE</h2>
                    <hr/>
                    <Row>
                        <Col>
                            <div className={'resumeItem'}>
                                <p className={'alignLeft'}>
                                    Developer
                                </p>
                                <p className={'alignRight'}>
                                    May 2020 - September 2020
                                </p>
                                <p style={{'clear': 'both'}}>
                                    TES Information Technology, Kitchener, Ontario
                                </p>
                                <ul>
                                    <li>
                                        Created new business streams by training and evaluating a machine learning model to detect Ontario road signs from dashcam footage
                                    </li>
                                    <li>
                                        Worked effectively as a team, developing remote work habits
                                    </li>
                                </ul>
                            </div>

                            <div className={'resumeItem'}>
                                <p className={'alignLeft'}>
                                    Developer
                                </p>
                                <p className={'alignRight'}>
                                    January 2019 - April 2020
                                </p>
                                <p style={{'clear': 'both'}}>
                                    Ministry of Transportation, St. Catharines, Ontario
                                </p>
                                <ul>
                                    <li>
                                        Kickstarted projects by creating viable demo software and presenting it to potential clients
                                    </li>
                                    <li>
                                        Trained a computer vision model to detect road signs for automatic municipal inventory systems
                                    </li>
                                    <li>
                                        Created a proof of concept digital identity mobile app
                                    </li>
                                    <li>
                                        Worked as a core developer on a project to build an internal Learning and Development platform using Agile software practises
                                    </li>
                                </ul>
                            </div>

                            <div className={'resumeItem'}>
                                <p className={'alignLeft'}>
                                    IT Analyst
                                </p>
                                <p className={'alignRight'}>
                                    January 2018 - April 2018
                                </p>
                                <p style={{'clear': 'both'}}>
                                    Federal Economic Development Agency, Waterloo, Ontario
                                </p>
                                <ul>
                                    <li>Significantly increased productivity by implementing a cloud-based asset
                                        management system
                                    </li>
                                    <li>Reduced confusion and replacement costs by introducing all new protocols for
                                        employee IT asset lifecycles
                                    </li>
                                    <li>Improved office productivity by keeping systems running and quickly solving
                                        technical problems
                                    </li>
                                    <li>Learned a lot about an office environment while producing performance reports,
                                        participating in conference calls and attending meetings to setup cloud services
                                    </li>
                                </ul>
                            </div>

                            <div className={'resumeItem'}>
                                <p className={'alignLeft'}>
                                    Systems Developer
                                </p>
                                <p className={'alignRight'}>
                                    May - August 2017 & 2018
                                </p>
                                <p style={{'clear': 'both'}}>
                                    University of Waterloo, Waterloo, Ontario
                                </p>
                                <ul>
                                    <li>Developed data collection systems for a traffic analysis program that will
                                        improve traffic flow at key intersections during atypical traffic conditions
                                    </li>
                                    <li>Established great code practices by working under PHD students and Professors
                                    </li>
                                    <li>Saved employer’s time by creating a web portal to visualize the recorded data
                                        from other projects
                                    </li>
                                    <li>Advanced working knowledge of dealing with production databases and API
                                        requests
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <h2 className={'topMargin'}>ACADEMIC PROJECTS & LEADERSHIP EXPERIENCE</h2>
                    <hr/>
                    <Row>
                        <Col>
                            <ul>
                                <li>COSC 3P71 - Artificial Intelligence: Chess AI</li>
                                <ul>
                                    <li>Created a full Utility-Based AI Agent to play against users</li>
                                </ul>
                                <li>COSC 4F00 - Software Development</li>
                                <ul>
                                    <li>
                                        Achieved first place by developing a drag and drop website creation tool
                                    </li>
                                </ul>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{margin: '25px'}}>
                            <Button text={'Download PDF'} clicked={this.downloadResume}/>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }

    downloadResume = () => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1v_gdgjaAHPzQ5071WoopGjIpNFFAxp0J';
    }

}
export default Resume;
