import React from 'react';
import { DARK_FONT } from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { HowMightWeStatement } from '../how-might-we-statement';
import { Persona } from '../persona';
import { SectionDivider } from '../section-divider';
import { SolutionToHmw } from '../solution-to-hmw';
import { SubHeading } from '../sub-heading';
import { defineColumn } from './design-process-table';

const DefineSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
      <SectionDivider text="Define" isOnEvenTab={isOnEvenTab} />
      <SubHeading
        isOnEvenTab={isOnEvenTab}
        text={defineColumn.links[0].label}
        containerAttributes={{
          id: defineColumn.links[0].target,
        }}
      />
      <div
        style={{
          fontFamily: DARK_FONT,
        }}
      >
        I took usability test with 12 friends between 20-35 years old who uses
        Toronto Zoo website.
      </div>
      <Persona
        name="Mark Stefano"
        age={35}
        location="GTA Area, CA"
        position="Bank Teller at RBC"
        isOnEvenTab={isOnEvenTab}
        goals={[
          'Make a well-informed decision about where they are investing their resources. Enjoyment and amusement, valuable family time.',
        ]}
        needs={[
          'Easy and accessible information, safe and comfortable experiences.',
        ]}
        painPoints={[
          'Unable to find relevant information in one place.',
          'A lot of time is spent booking tickets with parking ticket.',
        ]}
        opportunity={[
          'Interactive displays on the purchase path, a concise and quick way of sharing information and booking tickets.',
        ]}
        userQuote="Why do I need to re-visit the ticket page for getting a parking ticket?"
      />
      <HowMightWeStatement
        containerId={defineColumn.links[1].target}
        isOnEvenTab={isOnEvenTab}
        problem={
          <div>
            The ticket booking process for the Toronto Zoo required users to
            follow a separate path to book parking tickets, which caused
            unnecessary complexity.
          </div>
        }
        statement={
          <div>
            How might we{' '}
            <ColoredText color="accent">
              streamline the ticket booking process
            </ColoredText>{' '}
            at the Toronto Zoo to{' '}
            <ColoredText color="accent">
              include parking options, reducing complexity
            </ColoredText>{' '}
            and improving user experience?
          </div>
        }
      />
      <SolutionToHmw
        isOnEvenTab={isOnEvenTab}
        label={defineColumn.links[2].label}
        target={defineColumn.links[2].target}
        descriptions={[
          <div key="tz-description-1">
            To address the &ldquo;How might we&rdquo; statement, we could
            develop a{' '}
            <ColoredText color="accent">unified ticketing platform</ColoredText>{' '}
            that integrates{' '}
            <ColoredText color="accent">parking and entry ticket</ColoredText>{' '}
            purchases into a single, streamlined process. By simplifying the
            interface to display only essential information and enhancing the
            visual design, we can minimize confusion, improve{' '}
            <ColoredText color="accent">user navigation</ColoredText>, and
            ensure a cohesive aesthetic experience from start to finish,
            effectively prioritizing user experience.
          </div>,
        ]}
      />
    </>
  );
};

export { DefineSection };
