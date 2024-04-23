import React from 'react';
import type { ITabListProps } from '../tab-list';
import { TabList } from '../tab-list';

const WorkDetail = () => {
  const listConfig: ITabListProps['listConfig'] = [
    { id: 'tim-hortons', title: 'TIM HORTONS', content: <></> },
    { id: 'toronto-zoo', title: 'TORONTO ZOO', content: <></> },
    { id: 'humber-current', title: 'HUMBER CURRENT', content: <></> },
    { id: 'tic-tac-toe', title: 'TIC TAC TOE', content: <></> },
  ];
  return <TabList listConfig={listConfig} includeFooter={false} />;
};

export { WorkDetail };
