import React from 'react';
import DoubleDiamondMethodImage from '../../../assets/images/toronto-zoo/double-diamond-method.png';
import type { IsEvenProp } from '../../../common-types';
import type { ITableColumn } from '../design-process-table-template';
import { DesignProcessTableTemplate } from '../design-process-table-template';

const discoverColumn: ITableColumn = {
  header: 'Discover',
  subHeader: 'Research',
  links: [
    {
      label: 'Research Process',
      target: 'research-process',
    },
  ],
};
const defineColumn: ITableColumn = {
  header: 'Define',
  subHeader: 'Insights',
  links: [
    {
      label: 'How users feel?',
      target: 'how-users-feel',
    },
    {
      label: 'HMW-Statement',
      target: 'hmw-statement',
    },
    {
      label: 'Solution to HMW',
      target: 'solution-to-hmw',
    },
  ],
};
const ideateColumn: ITableColumn = {
  header: 'Ideate',
  subHeader: 'Brainstorm',
  links: [
    {
      label: 'Card Sorting',
      target: 'card-sorting',
    },
    {
      label: 'Information Architecture',
      target: 'information-architecture',
    },

    {
      label: 'Pruning User Flow',
      target: 'pruning-user-flow',
    },
    {
      label: 'Sketches and Wireframes',
      target: 'sketches',
    },
    {
      label: 'Iteration based design',
      target: 'iteration-based-design',
    },
  ],
};
const designColumn: ITableColumn = {
  header: 'Design',
  subHeader: 'Test',
  links: [
    {
      label: 'Design System',
      target: 'design-system',
    },
    {
      label: 'Hi-Fi Designs',
      target: 'hi-fi-designs',
    },
    {
      label: 'Achievements',
      target: 'achievements',
    },
    {
      label: 'What I learned',
      target: 'what-i-learned',
    },
  ],
};

const DesignProcessTable = ({ isEven }: IsEvenProp) => {
  return (
    <>
      <img src={DoubleDiamondMethodImage} alt={'Design System'} width="100%" />
      <DesignProcessTableTemplate
        isEven={isEven}
        discoverColumn={discoverColumn}
        defineColumn={defineColumn}
        ideateColumn={ideateColumn}
        designColumn={designColumn}
      />
    </>
  );
};

export {
  DesignProcessTable,
  defineColumn,
  designColumn,
  discoverColumn,
  ideateColumn,
};
