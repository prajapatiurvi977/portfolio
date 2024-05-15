import React from 'react';
import { LIGHT_FONT } from '../../../constants';
import { ColoredText } from '../../colored-text';
import { Persona } from '../persona';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { discoverColumn } from './design-process-table';
import { ResearchProcessTable } from './research-process-table';

const DiscoverSection = ({ isOnEvenTab }: { isOnEvenTab: boolean }) => {
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
        I compared the features, strengths, and weaknesses of 2 food ordering
        applications: Starbucks, Dunkin&apos; Donuts. This{' '}
        <ColoredText color="dark">
          helped prepare me for the user interviews
        </ColoredText>{' '}
        by giving me a better frame of reference for the types of resources our
        users currently had available. Also, identifying competitors&apos;
        common strengths and weaknesses helped me identify{' '}
        <ColoredText color="dark">elements to mimic or avoid</ColoredText> in
        developing our product.
      </div>
      <ResearchProcessTable
        tableStyleProps={{
          alignSelf: 'center',
          margin: '64px auto',
        }}
      />
      <SubHeading
        isOnEvenTab={isOnEvenTab}
        text={discoverColumn.links[1].label}
        containerAttributes={{
          id: discoverColumn.links[1].target,
        }}
      />
      <div style={{ fontFamily: LIGHT_FONT }}>
        During my tour of Tim Horton&apos;s locations, I engaged in firsthand{' '}
        <ColoredText color="dark">
          observations and discussions with customers and employees
        </ColoredText>
        . These interactions revealed significant issues within the{' '}
        <ColoredText color="dark">
          application&apos;s user interface
        </ColoredText>{' '}
        and <ColoredText color="dark">purchase process</ColoredText>, from{' '}
        <ColoredText color="dark">unclear customization options</ColoredText> to{' '}
        <ColoredText color="dark">missing dietary information</ColoredText>.
      </div>
      <br />
      <ColoredText color="dark">
        I interviewed 6 friends between 27-45 years old who uses Tim Hortons in
        their day to day life.
      </ColoredText>
      <Persona
        name="Lydia Martin"
        age={27}
        location="Toronto, CA"
        position="Studying at Humber College"
        isOnEvenTab={isOnEvenTab}
        goals={[
          'Reach college and work on time.',
          'Minimal cooking while studying.',
        ]}
        needs={[
          'Save time and order food on the way.',
          'Get cheap affordable food.',
        ]}
        painPoints={[
          'Offers does not navigate to actual menu item.',
          'Not sure how many points would get added on current purchase items.',
          'There is a cap on minimum order of 9$, which is mentioned at the very last checkout page. She had to go back and order extra food item.',
        ]}
      />
      <Persona
        name="Jameson Peralta"
        age={35}
        location="Toronto, CA"
        position="Works at BMO"
        isOnEvenTab={isOnEvenTab}
        goals={[
          'Reach office on time with breakfast and coffee.',
          'Minimal cooking while working.',
        ]}
        needs={[
          'Within half hour have to reach store, complete lunch, and return to work.',
          'On time lunch.',
          'Get cheap affordable food.',
        ]}
        painPoints={[
          'Orders food via app, still have to wait at store.',
          'Does not like that address needs to be added every time.',
          'User expects to see actual time for order pickup.',
        ]}
      />
    </>
  );
};

export { DiscoverSection };
