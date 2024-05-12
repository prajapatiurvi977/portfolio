import type { FC } from 'react';
import React from 'react';
import HumberCurrent from '../../assets/images/work-humber-current.png';
import TicTacToe from '../../assets/images/work-tic-tac-toe.png';
import TimHortons from '../../assets/images/work-tim-hortons.png';
import TorontoZoo from '../../assets/images/work-toronto-zoo.png';
import { ROUTES } from '../../navigation/constants';
import { useUIContext } from '../../state/ui-context';
import {
  HumberCurrentCategories,
  TicTacToeCategories,
  TimHortonsCategories,
  TorontoZooCategories,
} from '../constants';
import type { IWorkItem } from './work-item';
import { WorkItem } from './work-item';

const itemSpace = '60px';
const commonStyles = {
  marginBottom: itemSpace,
  maxWidth: `calc(50% - ${itemSpace} / 2 - 4)`,
};

const WorkItems: IWorkItem[] = [
  {
    backgroundImage: TimHortons,
    title: 'TIM HORTONS',
    description: 'Research & Redesign of App Navigation for order path',
    labels: [...TimHortonsCategories],
    destination: ROUTES.WORK_DETAIL.TIM_HORTONS,
    containerStyleProps: {
      ...commonStyles,
    },
  },
  {
    backgroundImage: TorontoZoo,
    title: 'TORONTO ZOO',
    description:
      'Redesign of Site Navigation, UI/Visual Design, and Ticket Purchasing',
    labels: [...TorontoZooCategories],
    destination: ROUTES.WORK_DETAIL.TORONTO_ZOO,
    containerStyleProps: {
      ...commonStyles,
    },
  },
  {
    backgroundImage: HumberCurrent,
    title: 'HUMBER CURRENT',
    description: 'Redesign of Site Navigation, UI/Visual Design',
    labels: [...HumberCurrentCategories],
    destination: ROUTES.WORK_DETAIL.HUMBER_CURRENT,
    containerStyleProps: {
      ...commonStyles,
    },
  },
  {
    backgroundImage: TicTacToe,
    title: 'TIC TAC TOE',
    description: 'Fun game out of learning ReactJS with UI Design',
    labels: [...TicTacToeCategories],
    destination: ROUTES.WORK_DETAIL.TIC_TAC_TOE,
    containerStyleProps: {
      ...commonStyles,
    },
  },
];

const Work: FC = () => {
  const { isMobileView } = useUIContext();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        maxWidth: '100%',
      }}
    >
      {WorkItems.map(
        (
          {
            backgroundImage,
            title,
            labels,
            description,
            containerStyleProps,
            destination,
          },
          index,
        ) => (
          <WorkItem
            key={title}
            backgroundImage={backgroundImage}
            title={title}
            labels={labels}
            description={description}
            destination={destination}
            containerStyleProps={{
              ...containerStyleProps,
              ...(index % 2 === 0 && { marginRight: '4vw' }),
            }}
          />
        ),
      )}
    </div>
  );
};

export { Work };
