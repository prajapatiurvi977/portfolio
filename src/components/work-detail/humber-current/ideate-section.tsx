import React from 'react';
import IdeateFlowChart from '../../../assets/images/timhortons/ideate-flow-chart.png';
import LowFiDesigns from '../../../assets/images/timhortons/low-fi-designs.png';
import { LIGHT_FONT, VERTICAL_SPACE } from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { ideateColumn } from './design-process-table';

const IdeateSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <div style={{ fontFamily: LIGHT_FONT }}>
      <SectionDivider text="Ideate" isOnEvenTab={isOnEvenTab} />
      <SubHeading
        text={ideateColumn.links[0].label}
        containerAttributes={{
          id: ideateColumn.links[0].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <img
        src={IdeateFlowChart}
        alt="Tim's flow chart"
        width="100%"
        style={{ margin: `${VERTICAL_SPACE} 0` }}
      />
      <div style={{ marginBottom: VERTICAL_SPACE }}>
        I focused on{' '}
        <ColoredText color="dark">minimizing the number of clicks</ColoredText>{' '}
        the user would have to make to reach the key features.
      </div>
      <SubHeading
        text={ideateColumn.links[1].label}
        containerAttributes={{
          id: ideateColumn.links[1].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div>
        I brainstormed the solution and started my ideas drawing on plain cards
        first.
      </div>
      <img
        src={LowFiDesigns}
        alt="Low-Fi designs"
        width="100%"
        style={{ margin: `${VERTICAL_SPACE} 0` }}
      />
      <div style={{ marginBottom: VERTICAL_SPACE }}>
        Conducted moderated usability tests on sketches with 5 participants via
        Zoom.
      </div>
      <SubHeading
        text={ideateColumn.links[2].label}
        containerAttributes={{
          id: ideateColumn.links[2].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div style={{ marginBottom: VERTICAL_SPACE }}>
        After conducting a usability test, feedback revealed several issues with
        the design. Users expressed{' '}
        <ColoredText color="dark">frustration</ColoredText> with the{' '}
        <ColoredText color="dark">navigation</ColoredText> to the cart, finding
        it cumbersome. Although they appreciated the{' '}
        <ColoredText color="accent">directions button</ColoredText>{' '}
        post-checkout, they disliked having to{' '}
        <ColoredText color="dark">scroll</ColoredText> to locate desired items.
        There was a clear preference for more immediate steps to add items to
        the cart. Additionally, users reported{' '}
        <ColoredText color="dark">
          difficulty in quickly locating menu
        </ColoredText>{' '}
        items on the homepage, suggesting a need for a more intuitive layout.
      </div>
    </div>
  );
};

export { IdeateSection };
