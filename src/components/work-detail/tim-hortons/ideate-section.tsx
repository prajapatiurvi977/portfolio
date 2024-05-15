import React from 'react';
import IdeateFlowChart from '../../../assets/images/timhortons/ideate-flow-chart.png';
import LowFiDesigns from '../../../assets/images/timhortons/low-fi-designs.png';
import { LIGHT_FONT, VERTICAL_SPACE } from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';

const IdeateSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <div style={{ fontFamily: LIGHT_FONT }}>
      <SectionDivider text="Ideate" isOnEvenTab={isOnEvenTab} />
      <SubHeading text="Pruning the user flow" isOnEvenTab={isOnEvenTab} />
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
      <SubHeading text="Sketches" isOnEvenTab={isOnEvenTab} />
      <text>
        I brainstormed the solution and started my ideas drawing on plain cards
        first.
      </text>
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
      <SubHeading text="Iteration 1 Results" isOnEvenTab={isOnEvenTab} />
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
