import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Alex Brashear</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
        <Nav>
          <HeaderButton href='https://github.com/ryanalexanderbrashear' buttonText='GitHub' />
          <HeaderButton href='https://www.linkedin.com/in/ryanalexanderbrashear/' buttonText='LinkedIn' />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;