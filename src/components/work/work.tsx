import type { FC } from 'react';
import React from 'react';
import HumberCurrent from '../../assets/images/work-humber-current.png';
import TicTacToe from '../../assets/images/work-tic-tac-toe.png';
import TimHortons from '../../assets/images/work-tim-hortons.png';
import TorontoZoo from '../../assets/images/work-toronto-zoo.png';
import { FONT_SIZE } from '../../constants';
import { useUIContext } from '../../state/ui-context';
import type { IWorkItem } from './work-item';
import { WorkItem } from './work-item';

const UX_UI_DESIGN = 'UX/UI Design';
const INTERACTION_DESIGN = 'Interaction Design';
const RESPONSIVE_DESIGN = 'Responsive Design';
const WEB_DESIGN = 'Web Design';

const WorkItems: IWorkItem[] = [
  {
    backgroundImage: TimHortons,
    title: 'TIM HORTONS',
    description: 'Research & Redesign of App Navigation for order path',
    labels: [UX_UI_DESIGN, INTERACTION_DESIGN, 'User Research', 'App Design'],
  },
  {
    backgroundImage: TorontoZoo,
    title: 'TORONTO ZOO',
    description:
      'Redesign of Site Navigation, UI/Visual Design, and Ticket Purchasing',
    labels: [UX_UI_DESIGN, INTERACTION_DESIGN, RESPONSIVE_DESIGN, WEB_DESIGN],
    containerStyleProps: {
      marginLeft: FONT_SIZE,
    },
  },
  {
    backgroundImage: HumberCurrent,
    title: 'HUMBER CURRENT',
    description: 'Redesign of Site Navigation, UI/Visual Design',
    labels: [UX_UI_DESIGN, INTERACTION_DESIGN, RESPONSIVE_DESIGN, WEB_DESIGN],
    containerStyleProps: {
      marginLeft: FONT_SIZE,
    },
  },
  {
    backgroundImage: TicTacToe,
    title: 'TIC TAC TOE',
    description: 'Fun game out of learning ReactJS with UI Design',
    labels: ['UI Development', 'ReactJS', 'JavaScript', 'Game Development'],
    containerStyleProps: {
      marginLeft: FONT_SIZE,
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
      }}
    >
      {WorkItems.map(
        ({
          backgroundImage,
          title,
          labels,
          description,
          containerStyleProps,
        }) => (
          <WorkItem
            key={title}
            backgroundImage={backgroundImage}
            title={title}
            labels={labels}
            description={description}
            containerStyleProps={containerStyleProps}
          />
        ),
      )}
    </div>
  );
};

export { Work };
