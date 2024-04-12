import './App.css';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import type { ITabListProps } from './components/tab-list';
import { TabList } from './components/tab-list';

import type { JSX } from 'react';
import React from 'react';
import { UIContextProvider } from './state/ui-context';

const App = (): JSX.Element => {
  const tabs: ITabListProps['listConfig'] = [
    {
      id: 'home',
      title: 'Home',
      content: <Home />,
    },
    {
      id: 'about',
      title: 'About Me',
      content: <About />,
    },
    {
      id: 'work',
      title: 'Work',
      content: <Home />,
    },
    {
      id: 'contact',
      title: 'Contact Me',
      content: <Home />,
    },
  ];
  return (
    <>
      <UIContextProvider>
        <TabList listConfig={tabs} />
      </UIContextProvider>
    </>
  );
};

export { App };
