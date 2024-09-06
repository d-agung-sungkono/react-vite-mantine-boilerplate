import { Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header >
      <Group>
        <Button variant="subtle" component={Link} to="/">
          Dashboard
        </Button>
        <Group>
          <Button variant="subtle" component={Link} to="/login">
            Login
          </Button>
          <Button variant="subtle" component={Link} to="/register">
            Register
          </Button>
        </Group>
      </Group>
    </header>
  );
}

export default Navbar