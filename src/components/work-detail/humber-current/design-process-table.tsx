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
    {
      label: 'User Journey',
      target: 'user-journey',
    },
  ],
};
const defineColumn: ITableColumn = {
  header: 'Define',
  links: [
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
  links: [
    {
      label: 'Sketches',
      target: 'sketches',
    },
    {
      label: 'Moodboard',
      target: 'moodboard',
    },

    {
      label: 'Visual Design',
      target: 'Visual Design',
    },
  ],
};
const designColumn: ITableColumn = {
  header: 'Design',
  links: [
    {
      label: 'Hi-Fi Designs',
      target: 'hi-fi-designs',
    },
  ],
};

const deliverColumn: ITableColumn = {
  header: 'Deliver',
  links: [
    {
      label: 'What next?',
      target: 'what-next',
    },
    {
      label: 'What I learned',
      target: 'what-i-learned',
    },
    {
      label: 'Achievements',
      target: 'achievements',
    },
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
