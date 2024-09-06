import {
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Title,
  rem
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LocaleToggle from '../LocaleToggle/LocaleToggle';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import UserToggle from '../UserToggle/UserToggle';
import classes from './Header.module.css';

export default function HeaderComponent() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const handleClickedLogo = () => {
    navigate('/');
  }

  return (
    <>
      <header className={classes.header}>
        <Group justify="space-between" h="100%" gap={0}>
          <Title
            onClick={handleClickedLogo}
            style={{ cursor: 'pointer'}}>
            {t('app-name')}
          </Title>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/#" className={classes.link}>
              Home
            </a>
            <a href="/#blog" className={classes.link}>
              Blog
            </a>
            <a href="/about" className={classes.link}>
              About
            </a>
          </Group>

          <Group visibleFrom="sm">
            <LocaleToggle />
            <ThemeToggle />
            <UserToggle />
          </Group>

          <Group hiddenFrom="sm" gap={5}>
            <LocaleToggle />
            <ThemeToggle />
            <Burger opened={drawerOpened} onClick={toggleDrawer} />
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={t('app-name')}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/#" className={classes.link}>
            Home
          </a>
          <a href="/#blog" className={classes.link}>
            Blog
          </a>
          <a href="/about" className={classes.link}>
            About
          </a>

          <Divider my="sm" />

          <Group grow pb="xl" px="md">
            <UserToggle />
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}