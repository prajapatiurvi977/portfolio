import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowLeftCircle from '../../assets/images/arrow-left-circle.svg';
import { ROUTES } from '../../navigation/constants';
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
      <Link
        to={ROUTES.ROOT}
        style={{
          position: 'absolute',
          zIndex: '1',
        }}
      >
        <img src={ArrowLeftCircle} alt="Go back to Home screen." />
      </Link>
      <TabList
        listConfig={listConfig}
        includeFooter={false}
        initialSelectedTabId={initialSelectedTabId}
        onTabSelected={(tabId) => {
          navigate(`${ROUTES.WORK_DETAIL.ROOT}/${tabId}`);
        }}
      />
    </div>
  );
};

export { WorkDetail };
