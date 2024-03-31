import './App.css';
import type { ITabListProps } from './components/tab-list';
import { TabList } from './components/tab-list';

import type { JSX } from 'react';
import React from 'react';

const App = (): JSX.Element => {
  const tabs: ITabListProps['listConfig'] = [
    {
      id: 'home',
      title: 'Home',
    },
    {
      id: 'work',
      title: 'Work',
    },
    {
      id: 'aboutMe',
      title: 'About Me',
    },
    {
      id: 'ontactMe',
      title: 'Contact Me',
    },
  ];
  return (
    <>
      <TabList listConfig={tabs} />
    </>
  );
};

export { App };
