import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Nav variant="tabs" defaultActiveKey="/home" as="ul">
        <HeaderButton href='/home' buttonText='Active' />
        <HeaderButton href='/home' buttonText='Not Active' />
      </Nav>
    </Navbar>
  );
}

export default Header;