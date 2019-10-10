import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import {Nav,NavDropdown} from 'react-bootstrap'
import $ from 'jquery'
import logo from '../favicon.png'
class Navbars extends Component {
    componentDidMount(){
        $('.hamburger-menu').on('click',function(){
            $('.toggle').toggleClass('open');
            $('.nav-list').toggleClass('open');
          });
          
        }
    render() {
        return (
            <React.Fragment>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand><Link to='/'><img src={logo} alt="store" className="navbar-brand brand-name" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link><Link to='/' className="nav-link" >HOME</Link></Nav.Link>
                <NavDropdown title="GUIDANCE" id="collasible-nav-dropdown" className="nav-link">
                  <NavDropdown.Item><Link to='/guidance/epf'>EPF</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/epfo'>EPFO</Link> </NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/epfbalance'>EPF BALANCE</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/epfstatus'>PF STATUS</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/pfwithdrawal'> PF WITHDRAWAL </Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/pfwithdrawalrules'>PF WITHDRAWAL RULES</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/ppf'>PPF</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/uan'>UAN  </Link> </NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/nps'>NPS </Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/npscalculator'>NPS CALCULATOR </Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/uanregistration'>UAN REGISTRATION </Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to='/guidance/uanlogin'>UAN LOGIN</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/epfologin'>EPFO LOGIN </Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/epfpassbook'>EPF PASSBOOK </Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/guidance/epfclaimstatus'>EPF CLAIM STATUS </Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link to='/forms' className="nav-link">FORMS</Link></Nav.Link>
                <Nav.Link><Link to='/videos' className="nav-link">VIDEOS</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </React.Fragment> 
        )
    }
}

export default Navbars
