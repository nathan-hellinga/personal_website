import React from 'react';
import { Container, Row, Col } from 'reactstrap';
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
                                    September 2017 - Present
                                </p>
                                <p style={{'clear':'both'}}>
                                    Brock University, St Catharines, Ontario
                                </p>
                                <ul>
                                    <li>Minor in Business</li>
                                </ul>
                            </div>
                            <div className={'resumeItem'}>
                                <p className={'alignLeft'}>
                                    Bachelors of Engineering - Mechanical Engineering Co-op
                                </p>
                                <p className={'alignRight'}>
                                    September 2014 - April 2015
                                </p>
                                <p style={{'clear':'both'}}>
                                    Conestoga College, Waterloo, Ontario
                                </p>
                            </div>

                        </Col>
                    </Row>

                    <h2 className={'topMargin'}>COMPUTER AND TECHNICAL SKILLS</h2>
                    <hr/>
                    <Row>
                        <ul>
                            <li>Experienced with coding in Java, VBA, JS, C#, C++, Python, SQL and more</li>
                            <li>Proficient with the use of the Windows platform and Microsoft Office suite</li>
                            <ul>
                                <li>Excel: Data analysis, macros, regression and custom-built automation scripts</li>
                            </ul>
                            <li>Experience in all major operating systems (Windows, Linux, Mac OS)</li>
                            <li>Adept with implementing, managing and developing on Amazon Cloud Services</li>
                            <li>Skilled with diagnosing, replacing, upgrading and assembling computer hardware</li>
                        </ul>
                    </Row>

                    <h2 className={'topMargin'}>WORK EXPERIENCE</h2>
                    <hr/>
                    <Row>
                        <div className={'resumeItem'}>
                            <p className={'alignLeft'}>
                                Systems Developer
                            </p>
                            <p className={'alignRight'}>
                                May - August 2017 & 2018
                            </p>
                            <p style={{'clear':'both'}}>
                                University of Waterloo, Waterloo, Ontario
                            </p>
                            <ul>
                                <li>Developed data collection systems for a traffic analysis program that will improve traffic flow at key intersections during atypical traffic conditions</li>
                                <li>Established great code practices by working under PHD students and Professors</li>
                                <li>Saved employer’s time by creating a web portal to visualize the recorded data from other projects</li>
                                <li>Advanced working knowledge of dealing with production databases and API requests</li>
                            </ul>
                        </div>

                        <div className={'resumeItem'}>
                            <p className={'alignLeft'}>
                                IT Analyst
                            </p>
                            <p className={'alignRight'}>
                                January - April 2018
                            </p>
                            <p style={{'clear':'both'}}>
                                Federal Economic Development Agency, Waterloo, Ontario
                            </p>
                            <ul>
                                <li>Significantly increased productivity by implementing a cloud-based asset management system</li>
                                <li>Reduced confusion and replacement costs by introducing all new protocols for employee IT asset lifecycles</li>
                                <li>Improved office productivity by keeping systems running and quickly solving technical problems</li>
                                <li>Learned a lot about an office environment while producing performance reports, participating in conference calls and attending meetings to setup cloud services</li>
                            </ul>
                        </div>
                    </Row>

                    <h2 className={'topMargin'}>ACADEMIC PROJECTS & LEADERSHIP EXPERIENCE</h2>
                    <hr/>
                    <Row>
                        <ul>
                            <li>COSC 3P71 - Artificial Intelligence: Chess AI</li>
                            <ul>
                                <li>Created a full Utility-Based AI Agent to play against users</li>
                            </ul>
                            <li>FIRST Robotics</li>
                            <ul>
                                <li>Competed in the Waterloo competition and contributed design decisions, component manufacturing and operation advice to the team</li>
                            </ul>
                            <li>Web Development</li>
                            <ul>
                                <li>Worked with and implemented open source solutions (Asset Management, LAMP, etc.)</li>
                            </ul>
                        </ul>
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
export default Resume;
