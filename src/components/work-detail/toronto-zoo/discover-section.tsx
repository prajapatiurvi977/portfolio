import React from 'react';
import {
  ACCENT_COLOR,
  DARK_FONT,
  HORIZONTAL_SPACE,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { discoverColumn } from './design-process-table';

interface InsightProps {
  heading: string;
  description: React.JSX.Element;
}
const Insight = ({ heading, description }: InsightProps) => {
  return (
    <div
      style={{
        border: `1px solid ${ACCENT_COLOR}`,
        display: 'flex',
        flexDirection: 'column',
        padding: `calc(${VERTICAL_SPACE} / 2)`,
        gap: `calc(${VERTICAL_SPACE} / 2)`,
        fontFamily: DARK_FONT,
        margin: `0 calc(2 * ${HORIZONTAL_SPACE})`,
      }}
    >
      <ColoredText color="accent">{heading}</ColoredText>
      <div>{description}</div>
    </div>
  );
};

const DiscoverSection = ({ isOnEvenTab }: TabElementsConfig) => {
  const insights: InsightProps[] = [
    {
      heading: 'Insight 1',
      description: (
        <span>
          The survey results highlighted key improvements needed for the Toronto
          Zoo website, including{' '}
          <ColoredText color="accent">
            streamlining the checkout process
          </ColoredText>
          for ticket purchases, simplifying any complex or{' '}
          <ColoredText color="accent">time-consuming steps</ColoredText>, making
          the <ColoredText color="accent">navigation structure</ColoredText>{' '}
          more intuitive for easier access to information, and enhancing the
          overall visual appeal of the site.
        </span>
      ),
    },
    {
      heading: 'Insight 2',
      description: (
        <span>
          The details for standard tickets at the Toronto Zoo are unclear,
          especially the{' '}
          <ColoredText color="accent">
            distinction between standard and admission tickets
          </ColoredText>
          .
        </span>
      ),
    },
    {
      heading: 'Insight 3',
      description: (
        <span>
          The Toronto Zoo website uses{' '}
          <ColoredText color="accent">inconsistent terminology</ColoredText> for
          its sessions, creating confusion and making it harder for users to
          understand.
        </span>
      ),
    },
  ];
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
        My initial research involved carrying out a{' '}
        <ColoredText color="accent">
          survey to identify key areas needing improvement
        </ColoredText>{' '}
        at the Toronto Zoo. This was followed by a{' '}
        <ColoredText color="accent">competitive analysis</ColoredText>, where I
        examined how{' '}
        <ColoredText color="accent">similar issues were addressed</ColoredText>{' '}
        on other websites. Finally, I performed a{' '}
        <ColoredText color="accent">usability test</ColoredText>, during which
        individual participants were asked to go through the ticket purchasing
        process and{' '}
        <ColoredText color="accent">express their thoughts</ColoredText> aloud.
        They were encouraged to discuss their views, first impressions, and any
        challenges they faced during the process.
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: VERTICAL_SPACE,
          margin: `calc(${HORIZONTAL_SPACE} - ${VERTICAL_SPACE}) 0`,
        }}
      >
        {insights.map(({ heading, description }) => (
          <Insight heading={heading} description={description} key={heading} />
        ))}
      </div>
    </>
  );
};

export { DiscoverSection };
