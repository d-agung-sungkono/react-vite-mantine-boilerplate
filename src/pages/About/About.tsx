import { ActionIcon, Container, Divider, List, ListItem, Space, Text, Title, Tooltip } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

const AboutPage = () => {
  return (
    <Container size='md' my='lg'>
      <Title order={1}>React Mantine Boilerplate</Title>
      <Text>This is an open-source project to speed up the front end development process using {' '}
        <a href='https://react.dev/' target='_blank'>React</a> {' '}
        <a href='https://vitejs.dev/' target='_blank'>Vite</a> {' '} and {' '}
        <a href='https://mantine.dev/' target='_blank'>Mantine</a></Text>
      <Text c="dimmed" size='xs' fs='italic'>First released: September 2024</Text>

      <Space h="lg" />
      
      <Title order={2}>Features</Title>
      <List>
        <ListItem>Pre-built layout slicing</ListItem>
        <ListItem>Role-based protected routes</ListItem>
        <ListItem>Multi-language support</ListItem>
        <ListItem>State management setup</ListItem>
        <ListItem>Reusable components</ListItem>
      </List>

      <Space h="md" />

      <Title order={2}>Libraries Used</Title>
      <List>
        <ListItem>Redux</ListItem>
        <ListItem>Redux Persist</ListItem>
        <ListItem>i18next</ListItem>
        <ListItem>React Router</ListItem>
        <ListItem>Rollup Plugin Visualizer</ListItem>
      </List>

      <Space h="md" />

      <Divider mb='lg' />

      <Title order={2}>
        Open Contribution {' '}
        <Tooltip label='Visit Repository'>
          <ActionIcon variant='subtle' component='a' href='https://github.com/d-agung-sungkono/react-vite-mantine-boilerplate'>
            <IconBrandGithub />
          </ActionIcon>
        </Tooltip>
      </Title>
      <Text c="dimmed">Any contribution are appreciated!</Text>
    </Container>
  );
};

export default AboutPage;
