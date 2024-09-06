import { Button, Paper, PasswordInput, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

const RegisterPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <Title order={2}>Register</Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
        <PasswordInput label="Password" placeholder="Your password" mt="md" {...form.getInputProps('password')} />
        <PasswordInput label="Confirm Password" placeholder="Confirm your password" mt="md" {...form.getInputProps('confirmPassword')} />
        <Button fullWidth mt="xl" type="submit">
          Register
        </Button>
      </form>
    </Paper>
  );
}

export default RegisterPage;