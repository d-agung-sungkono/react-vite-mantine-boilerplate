import { ActionIcon, Center, Menu, rem, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconChevronDown, IconMoon, IconSun } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const SunIcon = 
    <IconSun
      style={{ width: rem(20), height: rem(20) }}
      stroke={2.5}
      color={colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.yellow[4]}
    />

  const MoonIcon = 
    <IconMoon
      style={{ width: rem(20), height: rem(20) }}
      stroke={2.5}
      color={colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.yellow[4]}
    />

  const [ activeIcon, setActiveIcon ] = useState<JSX.Element>();
  const [ inactiveIcon, setInactiveIcon ] = useState<JSX.Element>();

  useEffect(() => {
    setActiveIcon(colorScheme === 'dark' ? MoonIcon : SunIcon);
    setInactiveIcon(colorScheme !== 'dark' ? MoonIcon : SunIcon);
  }, [colorScheme])

  return (
    <Menu key="user-toggle" trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
      <Menu.Target>
        <Center>
          <ActionIcon variant='subtle' radius='xl' style={{ cursor: 'pointer'}}>
            {activeIcon}
          </ActionIcon>
          <IconChevronDown size="0.9rem" stroke={1.5} />
        </Center>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => toggleColorScheme()} style={{ cursor: 'pointer'}}>
          {inactiveIcon}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ThemeToggle;
