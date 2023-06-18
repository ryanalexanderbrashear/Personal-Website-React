import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HeaderButton from './HeaderButton';
import HeaderBrand from './HeaderBrand';

function Header() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <HeaderBrand href='#home' />
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