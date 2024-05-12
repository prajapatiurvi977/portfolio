import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../navigation/constants';
import { UIContextProvider } from '../../state/ui-context';
import type { ITabListProps } from '../tab-list';
import { TabList } from '../tab-list';
import { HumberCurrent } from './humber-current';
import { TicTacToe } from './tic-tac-toe';
import { TimHortons } from './tim-hortons';
import { TorontoZoo } from './toronto-zoo';

interface WorkDetailParams extends Record<PropertyKey, any> {
  id: string;
}

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

const WorkDetail = () => {
  const { id: urlID } = useParams<WorkDetailParams>();
  const navigate = useNavigate();
  const initialSelectedTabId = urlID ?? listConfig[0].id;

  return (
    <div
      style={{
        margin: 0,
        height: '100%',
        width: '100%',
      }}
    >
      <UIContextProvider>
        <TabList
          listConfig={listConfig}
          includeFooter={false}
          backNavButtonTarget={ROUTES.ROOT}
          initialSelectedTabId={initialSelectedTabId}
          onTabSelected={(tabId) => {
            navigate(`${ROUTES.WORK_DETAIL.ROOT}/${tabId}`);
          }}
        />
      </UIContextProvider>
    </div>
  );
};

export { WorkDetail };
