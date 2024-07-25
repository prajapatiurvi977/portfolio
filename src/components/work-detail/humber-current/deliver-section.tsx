import React from 'react';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
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
    <span>
      I will <ColoredText color="dark">conduct Usability test</ColoredText> on
      current prototype and will iterate on design.
    </span>
  );

  const whatNextPart2 = (
    <span>
      I implemented{' '}
      <ColoredText color="dark">mobile-first design approach</ColoredText>, so I
      will start with Desktop designs.
    </span>
  );
  const whatNextPart3 = (
    <span>
      <ColoredText color="dark">
        Implementation of search functionality
      </ColoredText>{' '}
      to directly search through website.
    </span>
  );
  const learnedPart1 = (
    <span>
      The lesson here is to{' '}
      <ColoredText color="accent">prioritize user needs</ColoredText> and
      preferences when designing an interface to make it more intuitive and
      user-friendly.
    </span>
  );

  const learnedPart2 = (
    <span>
      When information is{' '}
      <ColoredText color="accent">well organized</ColoredText>, users can more
      easily <ColoredText color="accent">explore and discover</ColoredText> the
      content they seek.
    </span>
  );

  const achievementsPart1 = (
    <span>
      <ColoredText color="accent">45% students started connecting</ColoredText>{' '}
      on Humber Current website to connect with past students.
    </span>
  );
  const achievementsPart2 = (
    <span>
      <ColoredText color="accent">42%</ColoredText> Rise in{' '}
      <ColoredText color="accent">User Reach & engagement</ColoredText>
    </span>
  );
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
      {[whatNextPart1, whatNextPart2, whatNextPart3].map((whatNext, index) => (
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
          display: 'flex',
          flexDirection: 'column',
          gap: VERTICAL_SPACE,
          color: LIGHT_COLOR,
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
