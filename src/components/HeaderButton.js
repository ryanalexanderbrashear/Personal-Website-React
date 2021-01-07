import Nav from 'react-bootstrap/Nav';

function HeaderButton(props) {
  return (
    <Nav.Item as="li">
      <Nav.Link href={props.href}>{props.buttonText}</Nav.Link>
    </Nav.Item>
  );
}

export default HeaderButton;