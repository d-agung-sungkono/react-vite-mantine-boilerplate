import { Center, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slices/localeSlice';
import { AppDispatch, RootState } from '../../store/store';

const LOCALESMENU = [
  {
    'abbr': 'en',
    'label': 'English'
  },
  {
    'abbr': 'id',
    'label': 'Indonesia'
  }
]

const LocaleToggle: React.FC = () => {
  const language = useSelector((state: RootState) => state.locale.language);
  const dispatch = useDispatch<AppDispatch>();

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
  };

  return (
    <Menu key="locale-toggle" trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
      <Menu.Target>
        <Center>
          <span>{language.toUpperCase()}</span>
          <IconChevronDown size="0.9rem" stroke={1.5} />
        </Center>
      </Menu.Target>
      <Menu.Dropdown>
        {LOCALESMENU.filter((lm) => lm.abbr != language).map((locale, idx) => 
          <Menu.Item
            key={idx}
            // style={{
            //   backgroundColor: locale.abbr == language ? '#4dabf7' : ''
            // }}
            onClick={() => handleLanguageChange(locale.abbr)} >
            {locale.abbr.toUpperCase()}
          </Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default LocaleToggle;
