import { ActionIcon, Center, Divider, Menu, Tooltip, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconChevronDown, IconLogin2 } from '@tabler/icons-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/slices/authSlice';
import { AppDispatch, RootState } from '../../store/store';

const UserToggle: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogut = () => {
    dispatch(logout());
  };

  const LoginMenuButton = () => {
    return (
      <Menu key="login-toggle">
        <Menu.Target>
          <Tooltip label="Login" onClick={handleLogin}>
            <ActionIcon variant='subtle' radius='xl' style={{ cursor: 'pointer'}}>
              <IconLogin2
                color={colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[6] }
              />
            </ActionIcon>
          </Tooltip>
        </Menu.Target>
      </Menu>
    )
  }

  if(user){
    return (
      <Menu key="user-toggle" trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
        <Menu.Target>
          <Center style={{ cursor: 'pointer'}}>
            <span>{user.username?.toUpperCase()}</span>
            <IconChevronDown size="0.9rem" stroke={1.5} />
          </Center>
        </Menu.Target>
        <Menu.Dropdown>
          {user.role === 'admin' &&
            <Menu.Item onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer'}}>Admin</Menu.Item>
          }
          <Menu.Item onClick={() => navigate('/profil')} style={{ cursor: 'pointer'}}>Profil</Menu.Item>
          <Divider />
          <Menu.Item onClick={handleLogut} style={{ cursor: 'pointer'}}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }

  return (
    <LoginMenuButton />
  )
};

export default UserToggle;
