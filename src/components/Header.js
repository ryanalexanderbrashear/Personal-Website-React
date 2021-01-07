import Nav from 'react-bootstrap/Nav';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <HeaderButton href='/home' buttonText='Active' />
      <HeaderButton href='/home' buttonText='Not Active' />
    </Nav>
  );
}

export default Header;