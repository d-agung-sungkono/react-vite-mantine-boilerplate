import { ActionIcon, Center, Menu, rem, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconChevronDown, IconMoon, IconSun } from '@tabler/icons-react';
import React from 'react';

const ThemeToggle: React.FC = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const SunIcon = () => {
    return (
      <IconSun
        style={{ width: rem(20), height: rem(20) }}
        stroke={2.5}
        color={colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.yellow[4]}
      />
    )
  };

  const MoonIcon = () => {
    return (
      <IconMoon
        style={{ width: rem(20), height: rem(20) }}
        stroke={2.5}
        color={colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.yellow[4]}
      />
    )
  };

  return (
    <Menu key="user-toggle" trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
      <Menu.Target>
        <Center>
          <ActionIcon variant='subtle' radius='xl' style={{ cursor: 'pointer'}}>
            {colorScheme === 'dark' && <MoonIcon />}
            {colorScheme === 'light' && <SunIcon />}
          </ActionIcon>
          <IconChevronDown size="0.9rem" stroke={1.5} />
        </Center>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => toggleColorScheme()} style={{ cursor: 'pointer'}}>
          {colorScheme !== 'dark' && <MoonIcon />}
          {colorScheme !== 'light' && <SunIcon />}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ThemeToggle;
