import React from 'react';
import type { IsEvenProp } from '../../../common-types';
import type { ITableColumn } from '../design-process-table-template';
import { DesignProcessTableTemplate } from '../design-process-table-template';

const discoverColumn: ITableColumn = {
  header: 'Discover',
  links: [
    {
      label: 'Research Process',
      target: 'research-process',
    },
    {
      label: 'How users feel?',
      target: 'how-users-feel',
    },
  ],
};
const defineColumn: ITableColumn = {
  header: 'Define',
  links: [
    {
      label: 'HMW',
      target: 'hmw',
    },
    {
      label: 'Solution to HMW',
      target: 'solution-to-hmw',
    },
  ],
};
const ideateColumn: ITableColumn = {
  header: 'Ideate',
  links: [
    {
      label: 'Pruning the User Flow',
      target: 'pruning-user-flow',
    },
    {
      label: 'Sketches',
      target: 'sketches',
    },
    {
      label: 'Iteration 1 Results',
      target: 'iteration-1-results',
    },
  ],
};
const designColumn: ITableColumn = {
  header: 'Design',
  links: [
    {
      label: 'Hi-Fidelity Designs',
      target: 'high-fidelity-designs',
    },
  ],
};
const deliverColumn: ITableColumn = {
  header: 'Deliver',
  links: [
    { label: 'What next?', target: 'what-next' },
    { label: 'What I learned', target: 'what-i-learned' },
    { label: 'Achievements', target: 'achievements' },
  ],
};

const DesignProcessTable = ({ isEven }: IsEvenProp) => {
  return (
    <DesignProcessTableTemplate
      isEven={isEven}
      discoverColumn={discoverColumn}
      defineColumn={defineColumn}
      ideateColumn={ideateColumn}
      designColumn={designColumn}
      deliverColumn={deliverColumn}
    />
  );
};

export {
  DesignProcessTable,
  defineColumn,
  deliverColumn,
  designColumn,
  discoverColumn,
  ideateColumn,
};
