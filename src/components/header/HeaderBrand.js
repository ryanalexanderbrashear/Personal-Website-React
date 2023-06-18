import Navbar from 'react-bootstrap/Navbar';

function HeaderBrand(props) {
  return (
    <Navbar.Brand href={props.href}>Alex Brashear</Navbar.Brand>
  );
}

export default HeaderBrand;