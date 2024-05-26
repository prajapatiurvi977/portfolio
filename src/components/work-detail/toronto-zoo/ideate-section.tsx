import type { CSSProperties, PropsWithChildren } from 'react';
import React from 'react';
import { LIGHT_FONT, VERTICAL_SPACE } from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { ideateColumn } from './design-process-table';

const FigmaFrame = ({
  src,
  styleProps,
}: {
  src: string;
  styleProps?: CSSProperties;
}) => {
  return (
    <iframe width="100%" height="550" src={src} style={{ ...styleProps }} />
  );
};

const SmallHeading = ({ children }: PropsWithChildren) => {
  return (
    <ColoredText
      color="accent"
      styleProps={{
        display: 'block',
        margin: `calc(${VERTICAL_SPACE} / 2) 0 `,
      }}
    >
      {children}
    </ColoredText>
  );
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
      <SmallHeading>Desktop Screen Sketches</SmallHeading>
      <FigmaFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8PBbMggHeXXXcKvLDIHF0N%2FToronto-Zoo%3Fembed_host%3Dshare%26kind%3Dproto%26node-id%3D112-4091%26page-id%3D1%253A2%26scaling%3Dcontain%26starting-point-node-id%3D112%253A4091%26t%3Do9gKx7qOm16LUJV3-1%26type%3Ddesign%26viewport%3D1407%252C888%252C0.13"
        styleProps={{
          marginBottom: `calc(${VERTICAL_SPACE} / 2)`,
        }}
      />

      <SmallHeading>Mobile Screen Sketches</SmallHeading>
      <FigmaFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8PBbMggHeXXXcKvLDIHF0N%2FToronto-Zoo%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D2-9%26viewport%3D503%252C293%252C0.14%26t%3DArJJUxwaQLUEL9Ij-1%26scaling%3Dcontain%26starting-point-node-id%3D2%253A9"
        styleProps={{ marginBottom: `calc(${VERTICAL_SPACE} / 2)` }}
      />
      <SubHeading isOnEvenTab={isOnEvenTab} text="Wireframes" />
      <div>
        For the transition from sketches to wireframes, the desktop screens
        transitioned well, but the mobile screens appeared cluttered. I reworked
        the mobile layout, creating a{' '}
        <ColoredText color="accent">cleaner header</ColoredText> to balance{' '}
        <ColoredText color="accent">
          business needs and user engagement
        </ColoredText>
        . I relocated key buttons like Donate, Tickets, and Membership to a more
        accessible footer, ensuring they are always within reach with a fixed
        position. I also strategically repositioned the hamburger icon to the
        right, making room for a back button on the left, a shift from the
        previous design.
      </div>
      <SmallHeading>Desktop Screen Wireframes</SmallHeading>
      <FigmaFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8PBbMggHeXXXcKvLDIHF0N%2FToronto-Zoo%3Fpage-id%3D1%253A2%26type%3Ddesign%26node-id%3D272-3517%26viewport%3D236%252C-465%252C0.08%26t%3D12tqKNoljvKnMRfc-1%26scaling%3Dcontain%26starting-point-node-id%3D272%253A3517"
        styleProps={{ marginBottom: `calc(${VERTICAL_SPACE} / 2)` }}
      />
      <SmallHeading>Mobile Screen Wireframes</SmallHeading>
      <FigmaFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8PBbMggHeXXXcKvLDIHF0N%2FToronto-Zoo%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D304-4317%26viewport%3D522%252C-106%252C0.1%26t%3DJ8F0BSObGCnEsUcH-1%26scaling%3Dcontain%26starting-point-node-id%3D304%253A4317"
        styleProps={{ marginBottom: `calc(${VERTICAL_SPACE} / 2)` }}
      />
    </div>
  );
};

export { IdeateSection };
