import React from 'react';
import type { ITabListProps } from '../tab-list';
import { TabList } from '../tab-list';
import { HumberCurrent } from './humber-current';
import { TicTacToe } from './tic-tac-toe';
import { TimHortons } from './tim-hortons';
import { TorontoZoo } from './toronto-zoo';

const WorkDetail = () => {
  const listConfig: ITabListProps['listConfig'] = [
    { id: 'tim-hortons', title: 'TIM HORTONS', content: <TimHortons /> },
    { id: 'toronto-zoo', title: 'TORONTO ZOO', content: <TorontoZoo /> },
    {
      id: 'humber-current',
      title: 'HUMBER CURRENT',
      content: <HumberCurrent />,
    },
    { id: 'tic-tac-toe', title: 'TIC TAC TOE', content: <TicTacToe /> },
  ];
  return <TabList listConfig={listConfig} includeFooter={false} />;
};

export { WorkDetail };
