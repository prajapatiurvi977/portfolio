import type { FC } from 'react';
import React from 'react';
import HumberCurrent from '../../assets/images/work-humber-current.png';
import TimHortons from '../../assets/images/work-tim-hortons.png';
import TorontoZoo from '../../assets/images/work-toronto-zoo.png';
import { ROUTES } from '../../navigation/constants';
import { useUIContext } from '../../state/ui-context';
import {
  HumberCurrentCategories,
  HumberCurrentDescription,
  TimHortonsCategories,
  TimHortonsDescription,
  TorontoZooCategories,
  TorontoZooDescription,
} from '../constants';
import type { IWorkItem } from './work-item';
import { WorkItem } from './work-item';

const itemSpace = '60px';
const commonStyles = {
  maxWidth: `calc(50% - ${itemSpace} / 2 - 4)`,
};

const WorkItems: IWorkItem[] = [
  {
    backgroundImage: TimHortons,
    title: 'TIM HORTONS',
    description: TimHortonsDescription,
    labels: [...TimHortonsCategories],
    destination: ROUTES.WORK_DETAIL.TIM_HORTONS,
    containerStyleProps: {
      ...commonStyles,
    },
  },
  {
    backgroundImage: TorontoZoo,
    title: 'TORONTO ZOO',
    description: TorontoZooDescription,
    labels: [...TorontoZooCategories],
    destination: ROUTES.WORK_DETAIL.TORONTO_ZOO,
    containerStyleProps: {
      ...commonStyles,
    },
  },
  {
    backgroundImage: HumberCurrent,
    title: 'HUMBER CURRENT',
    description: HumberCurrentDescription,
    labels: [...HumberCurrentCategories],
    destination: ROUTES.WORK_DETAIL.HUMBER_CURRENT,
    containerStyleProps: {
      ...commonStyles,
    },
  },
  //   {
  //     backgroundImage: TicTacToe,
  //     title: 'TIC TAC TOE',
  //     description: TicTacToeDescription,
  //     labels: [...TicTacToeCategories],
  //     destination: ROUTES.WORK_DETAIL.TIC_TAC_TOE,
  //     containerStyleProps: {
  //       ...commonStyles,
  //     },
  //   },
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
        gap: itemSpace,
      }}
    >
      {WorkItems.map(
        ({
          backgroundImage,
          title,
          labels,
          description,
          containerStyleProps,
          destination,
        }) => (
          <WorkItem
            key={title}
            backgroundImage={backgroundImage}
            title={title}
            labels={labels}
            description={description}
            destination={destination}
            containerStyleProps={{
              ...containerStyleProps,
            }}
          />
        ),
      )}
    </div>
  );
};

export { Work };
