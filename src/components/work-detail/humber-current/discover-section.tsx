import React from 'react';
import {
  DARK_COLOR,
  FONT_SIZE,
  HORIZONTAL_SPACE,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { Persona } from '../persona';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { discoverColumn } from './design-process-table';

import UserJourneyMap from '../../../assets/images/humber-current/user-journey-map.png';

const DiscoverSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
      <SectionDivider text="Discover" isOnEvenTab={isOnEvenTab} />
      <SubHeading
        text={discoverColumn.links[0].label}
        containerAttributes={{
          id: discoverColumn.links[0].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div
        style={{
          fontFamily: LIGHT_FONT,
        }}
      >
        My research began with a{' '}
        <ColoredText color="dark">heuristic evaluation</ColoredText> to identify
        specific issues that needed addressing on the Humber Current website. I
        then analyzed competitive sites to see how they tackled similar
        problems. Finally, I conducted{' '}
        <ColoredText color="dark">usability tests</ColoredText> where
        participants individually performed tasks aloud, providing feedback on
        their experiences, impressions, and any challenges encountered during
        the process.
      </div>
      <div
        style={{
          border: `1px solid ${DARK_COLOR}`,
          padding: `calc(${VERTICAL_SPACE} / 2)`,
          fontSize: `calc(${FONT_SIZE} / 2.5)`,
          margin: `${FONT_SIZE} calc(2 * ${HORIZONTAL_SPACE})`,
        }}
      >
        From the heuristic evaluation, I learned that enhancing the user
        experience was crucial, and I also discovered that the main logo and
        theme of the website{' '}
        <ColoredText color="accent">did not align</ColoredText> with Humber
        College&apos;s design standards.
      </div>

      <SubHeading
        isOnEvenTab={isOnEvenTab}
        text={discoverColumn.links[1].label}
        containerAttributes={{
          id: discoverColumn.links[1].target,
        }}
      />
      <Persona
        name="Sumeet Shah"
        age={44}
        location="Toronto, CA"
        position="Studying at Humber College"
        isOnEvenTab={isOnEvenTab}
        goals={[
          'Make sure he satisfies the job seeking needs.',
          'Getting enough exposure and experience of the world according to his experience.',
          'Grow in his career and take on a leadership role.',
        ]}
        needs={[
          'Find individuals who have a similar idea of what they want and what they can contribute to an organization.',
          'Expects to find dedicated and talented individuals to connect and talk with other alumni to get career growth idea.',
          'Needs to keep track of progress and make sure he is focusing on holistic growth.',
        ]}
        painPoints={[
          'Minimizing alumni searching efforts.',
          'Finding quality talent that can share their experience on LinkedIn or other platforms.',
          'Especially due to difficulty finding perfect alumni, and juggling multiple job searchings.',
        ]}
      />

      <SubHeading
        isOnEvenTab={isOnEvenTab}
        text={discoverColumn.links[2].label}
        containerAttributes={{
          id: discoverColumn.links[2].target,
        }}
      />
      <div style={{ fontFamily: LIGHT_FONT, marginBottom: VERTICAL_SPACE }}>
        <ColoredText color="dark">SCENARIO:</ColoredText> Getting inspiration
        from alumni of Bachelor of Public Relations and getting connect them via
        Linkedin.
      </div>
      <div>
        <img
          src={UserJourneyMap}
          alt="Humber Current User Journey Map"
          width="100%"
        />
      </div>
    </>
  );
};

export { DiscoverSection };
