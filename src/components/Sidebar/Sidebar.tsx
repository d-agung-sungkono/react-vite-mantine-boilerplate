import { Anchor, Box, List, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box>
      <List>
        <Anchor component={Link} to="/dashboard" style={{ display: 'block', padding: theme.spacing.xs, color: colorScheme === 'dark' ? theme.colors.dark[1] : theme.black, textDecoration: 'none' }}>Dashboard</Anchor>
        <Anchor component={Link} to="/users" style={{ display: 'block', padding: theme.spacing.xs, color: colorScheme === 'dark' ? theme.colors.dark[1] : theme.black, textDecoration: 'none' }}>Users</Anchor>
      </List>
    </Box>
  );
};

export default SidebarComponent;
