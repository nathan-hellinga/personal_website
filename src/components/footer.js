import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.css';
import logoGithub from '../images/icons/github.png' ;
import logoLinkedin from '../images/icons/linkedin.png'


class Footer extends React.Component {
  
  render() {
    return(
      <div className={'Footer'}>
        <Container>
          <Row>
            <Col>
              <p className={'Copyright'}>© {new Date().getFullYear()} Nathan Hellinga. All rights reserved.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href={'https://github.com/nathan-hellinga'}>
                <img src={logoGithub} className={'footerIcon'}/>
              </a>
              <a href={'https://ca.linkedin.com/in/nathan-hellinga-945054b6'}>
                <img src={logoLinkedin} className={'footerIcon'}/>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    
    )
  }
  
  
}
export default Footer;
