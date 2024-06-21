import React from 'react';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  HORIZONTAL_SPACE,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { deliverColumn } from './design-process-table';

const DeliverSection = ({ isOnEvenTab }: TabElementsConfig) => {
  const whatNextPart1 = (
    <div>
      The <ColoredText color="dark">minimum order threshold of $9</ColoredText>{' '}
      currently reveals itself only at the cart page, a late stage in the user
      journey. I&apos;m gearing up to dive deep and creatively untangle this
      issue, ensuring clarity from the outset for a smoother shopping
      experience.
    </div>
  );

  const whatNextPart2 = (
    <div>
      Dive into <ColoredText color="dark">usability testing</ColoredText> for
      other pathways of the Tim Hortons app, exploring and enhancing user flows
      to ensure every interaction is as seamless and quick as their brews.
    </div>
  );

  const learnedPart1 = (
    <span>
      <ColoredText color="dark">I have more assumptions and biases</ColoredText>{' '}
      than I thought. I must rely on the evidence in the research to reach
      meaningful insights.
    </span>
  );

  const learnedPart2 = (
    <span>
      <ColoredText color="dark">
        Users determine how specific the problem is
      </ColoredText>{' '}
      and a more specific problem can make it easier to brainstorm broader
      solution ideas.
    </span>
  );

  const achievementsPart1 = '25% users retention';
  const achievementsPart2 = '18% increase in mobile order';
  return (
    <div
      style={{
        fontFamily: LIGHT_FONT,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SectionDivider text="Deliver" isOnEvenTab={isOnEvenTab} />
      <SubHeading
        text={deliverColumn.links[0].label}
        containerAttributes={{
          id: deliverColumn.links[0].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      {[whatNextPart1, whatNextPart2].map((whatNext, index) => (
        <div
          key={`what-next-${index}`}
          style={{
            border: '1px solid',
            margin: `${VERTICAL_SPACE} calc(2 * ${HORIZONTAL_SPACE}) 0 calc(2 * ${HORIZONTAL_SPACE})`,
            padding: '20px',
          }}
        >
          {whatNext}
        </div>
      ))}
      <SubHeading
        text={deliverColumn.links[1].label}
        containerAttributes={{
          id: deliverColumn.links[1].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      {[learnedPart1, learnedPart2].map((learned, index) => (
        <li
          key={`learned-${index}`}
          style={{
            fontFamily: DARK_FONT,
            border: `1px solid ${ACCENT_COLOR}`,
            padding: '20px',
            margin: `${VERTICAL_SPACE} calc(2 * ${HORIZONTAL_SPACE}) 0 calc(2 * ${HORIZONTAL_SPACE})`,
          }}
        >
          {learned}
        </li>
      ))}
      <SubHeading
        text={deliverColumn.links[2].label}
        containerAttributes={{
          id: deliverColumn.links[2].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />

      <div
        style={{
          paddingLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: VERTICAL_SPACE,
          color: ACCENT_COLOR,
          fontFamily: DARK_FONT,
          marginBottom: VERTICAL_SPACE,
          marginLeft: `calc(2 * ${HORIZONTAL_SPACE})`,
          marginRight: `calc(2 * ${HORIZONTAL_SPACE})`,
        }}
      >
        {[achievementsPart1, achievementsPart2].map((achievement, index) => (
          <li
            key={`achievement-${index}`}
            style={{
              padding: '20px',
              backgroundColor: DARK_COLOR,
            }}
          >
            {achievement}
          </li>
        ))}
      </div>
    </div>
  );
};

export { DeliverSection };
