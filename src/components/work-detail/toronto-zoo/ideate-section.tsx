import React from 'react';
import { LIGHT_FONT, VERTICAL_SPACE } from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { ideateColumn } from './design-process-table';

const FigmaFrame = ({ src }: { src: string }) => {
  return <iframe width="100%" height="550" src={src} />;
};

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
      <div style={{ marginBottom: VERTICAL_SPACE }}>
        <p>
          I conducted an{' '}
          <ColoredText color="accent">open card sorting</ColoredText> exercise
          using a FigJam, where I presented ten participants with unlabeled
          cards. They grouped these cards based on their personal criteria,
          revealing natural categorization tendencies without the influence of
          pre-established categories.
        </p>
        <p>
          Following this, I analyzed the grouping patterns and established a{' '}
          <ColoredText color="accent">finalized card sort</ColoredText>,
          refining the structure based on participant feedback.
        </p>
        <p>
          This process was{' '}
          <ColoredText color="accent">collaborative and iterative</ColoredText>,
          allowing me to{' '}
          <ColoredText color="accent">eliminate unnecessary cards</ColoredText>{' '}
          to streamline the sorting system, ultimately increasing its{' '}
          <ColoredText color="accent">efficiency</ColoredText>.
        </p>
      </div>
      <FigmaFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FbMyj3Ce4lz66DDUvUO1a9G%2FToronto-Zoo---Card-Sorting%252C-Information-Architecture%3Fnode-id%3D166-4173%26t%3Dya6hV9qU9x3sVJZs-1" />
      <SubHeading
        text={ideateColumn.links[1].label}
        containerAttributes={{
          id: ideateColumn.links[1].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div style={{ fontFamily: LIGHT_FONT }}>
        <p>
          The insights gained from the card sort were instrumental in shaping
          the{' '}
          <ColoredText color="accent">
            Information Architecture (IA)
          </ColoredText>{' '}
          of the Toronto Zoo&apos;s website. By understanding the{' '}
          <ColoredText color="accent">
            natural categorization habits of users
          </ColoredText>
          , we were able to tap into their mental models, aligning our
          website&apos;s structure with their expectations for locating
          information.
        </p>
        <p>
          I&apos;ve showcased how I enhanced the Information Architecture of the
          Toronto Zoo site for greater clarity. I replaced terms like “welfare”
          with “animal care” to ensure{' '}
          <ColoredText color="accent">
            users could easily understand
          </ColoredText>{' '}
          and relate to the content. I also streamlined the navigation by{' '}
          <ColoredText color="accent">removing duplicates </ColoredText>
          such as “staff” and “plan visit” and “Sample your Products”
          simplifying the user&apos;s journey through the site.
        </p>
      </div>
      <FigmaFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FbMyj3Ce4lz66DDUvUO1a9G%2FToronto-Zoo---Card-Sorting%252C-Information-Architecture%3Fnode-id%3D903-4112%26t%3Dya6hV9qU9x3sVJZs-1" />
      <SubHeading
        text={ideateColumn.links[2].label}
        containerAttributes={{
          id: ideateColumn.links[2].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div>
        By consolidating event and general admission booking (in current website
        design), I{' '}
        <ColoredText color="accent">
          eliminated repetitive navigation
        </ColoredText>
        , allowing users to{' '}
        <ColoredText color="accent">
          access event information and purchase tickets all in one place
        </ColoredText>
        . Starting with the desktop interface, this approach provided a strong
        foundation for the subsequent responsive mobile design.
      </div>
      <p>
        This user flow depicts a perspective of a parent who is planning a trip
        to The Toronto Zoo for their kid&apos;s birthday outing. This trip is
        planned for 03/11/2023, and 2 adults will be accompanying a group of 5
        kids (age between 8-10).
      </p>
      <FigmaFrame src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FbMyj3Ce4lz66DDUvUO1a9G%2FToronto-Zoo---Card-Sorting%252C-Information-Architecture%3Fnode-id%3D909-3206%26t%3Dya6hV9qU9x3sVJZs-1" />
      <SubHeading
        text="Sketches"
        containerAttributes={{
          id: ideateColumn.links[3].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div>
        I used simple paper sketches to work through different ideas, which
        showed me the challenge of making important tasks easy and keeping them
        on just one level. These sketches were key to spotting common design
        patterns and figuring out how users would move from one screen to
        another.
      </div>
      {/* TODO: Put Desktop screen sketches here */}
    </div>
  );
};

export { IdeateSection };
