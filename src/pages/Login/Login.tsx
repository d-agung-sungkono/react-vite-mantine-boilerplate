import { Anchor, Button, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/authSlice';
import classes from './Login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    dispatch(login({ username, password }));
    navigate('/')
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button" onClick={() => navigate('/register')}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form>
          <TextInput label="Email" placeholder="you@mantine.dev" required value={username} onChange={(e) => setUsername(e.target.value)}/>
          <PasswordInput label="Password" placeholder="Your password" required mt="md" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </form>
        <Group justify="space-between" mt="lg">
          <Anchor component="button" size="sm" onClick={() => navigate('/forgot-password')}>
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={handleLogin}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
