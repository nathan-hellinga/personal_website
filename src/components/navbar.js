import React from 'react';
import './navbar.css'
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from 'reactstrap';
import {Link} from "react-router-dom";


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
    if (window.pageYOffset !== 0){
      this.setState({atTop: false});
    }else{
      this.setState({atTop: true});
    }
  };
    
  render() {
    return(
      <div>
        <Navbar dark expand="md" fixed="top" className={this.state.atTop ? '' : 'bgdark'}>
          <div className={'navbar-brand'}>
            <Link to="/" style={{color: 'white'}}>
              <h1 style={{'fontWeight': '200', 'letterSpacing': '-9px'}}>
                NH
              </h1>
            </Link>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                {/*<NavItem>*/}
                {/*  <NavLink onClick={() => this.props.changePage('Projects')}>Projects</NavLink>*/}
                {/*</NavItem>*/}
              <NavItem>
                <Link to="/resume/" style={{color: 'white'}}>Resume</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
  
  
}
export default NavBar;
