import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav>
          <HeaderButton href='/home' buttonText='Active' />
          <HeaderButton href='/home' buttonText='Not Active' />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;