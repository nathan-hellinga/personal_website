import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      atTop: true
    };
    
  }
  
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  handleScroll = (event) => {
    // let scrollTop = event.srcElement.body.scrollTop, itemTranslate = Math.min(0, scrollTop/3 - 60);
    // console.log(window.pageYOffset);
    if (window.pageYOffset !== 0){
      this.setState({atTop: false});
    }else{
      this.setState({atTop: true});
    }
  };
    
  render() {
    return(
      <div>
        <Navbar scrolling dark expand="md" fixed="top" className={this.state.atTop ? '' : 'bgdark'}>
          <NavbarBrand href="/"><h1 style={{'fontWeight': '200', 'letterSpacing': '-9px'}}>NH</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/nathan-hellinga">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/nathan-hellinga">Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
  
  
}
export default NavBar;
