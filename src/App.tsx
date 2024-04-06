import './App.css';
import { Home } from './components/home/home';
import type { ITabListProps } from './components/tab-list';
import { TabList } from './components/tab-list';

import type { JSX } from 'react';
import React from 'react';

const App = (): JSX.Element => {
  const tabs: ITabListProps['listConfig'] = [
    {
      id: 'home',
      title: 'Home',
      content: <Home />,
    },
    {
      id: 'aboutMe',
      title: 'About Me',
      content: <Home />,
    },
    {
      id: 'work',
      title: 'Work',
      content: <Home />,
    },
    {
      id: 'ontactMe',
      title: 'Contact Me',
      content: <Home />,
    },
  ];
  return (
    <>
      <TabList listConfig={tabs} />
    </>
  );
};

export { App };
