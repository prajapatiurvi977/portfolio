import type {
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  PropsWithChildren,
} from 'react';
import React from 'react';
import TorontoZooCardSorting from '../../../assets/images/toronto-zoo/card-sorting.png';
import TorontoZooDesktopSketches from '../../../assets/images/toronto-zoo/desktop-sketches.png';
import TorontoZooDesktopWireframes from '../../../assets/images/toronto-zoo/desktop-wireframes.png';
import TorontoZooInformationArchitecture from '../../../assets/images/toronto-zoo/information-architecture.png';
import TorontoZooMobileSketches from '../../../assets/images/toronto-zoo/mobile-sketches.png';
import TorontoZooMobileWireframes from '../../../assets/images/toronto-zoo/mobile-wireframes.png';
import TorontoZooUserFlow from '../../../assets/images/toronto-zoo/user-flow.png';
import {
  ACCENT_COLOR,
  HORIZONTAL_SPACE,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { ideateColumn } from './design-process-table';

const SmallHeadingLink = ({
  href,
  label,
}: {
  href: AnchorHTMLAttributes<any>['href'];
  label: string;
} & PropsWithChildren) => {
  return (
    <a
      color="accent"
      style={{
        color: ACCENT_COLOR,
      }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
};

interface ImageAndHrefProps {
  imgSrc: ImgHTMLAttributes<any>['src'];
  imgAlt: ImgHTMLAttributes<any>['alt'];
  href: AnchorHTMLAttributes<any>['href'];
}

const ImageWithFigJamLink = ({ imgSrc, imgAlt, href }: ImageAndHrefProps) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: `${VERTICAL_SPACE} calc(${HORIZONTAL_SPACE} * 2)`,
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{
          flex: 1,
          maxWidth: '100%',
        }}
      />
      <div>
        Click here to see{' '}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          style={{ color: ACCENT_COLOR }}
        >
          FigJam
        </a>{' '}
        link
      </div>
    </div>
  );
};

const SketchWithFigJamLink = ({
  href,
  imgAlt,
  imgSrc,
  label,
}: { label: string } & ImageAndHrefProps) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: `0 calc(${HORIZONTAL_SPACE} * 2)`,
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <SmallHeadingLink label={label} href={href} />
      <img src={imgSrc} alt={imgAlt} width="100%" />
    </div>
  );
};
const CardSorting = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
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
      <ImageWithFigJamLink
        imgSrc={TorontoZooCardSorting}
        imgAlt="Toronto Zoo Card Sorting"
        href="https://www.figma.com/board/bMyj3Ce4lz66DDUvUO1a9G/Toronto-Zoo---Card-Sorting%2C-Information-Architecture?node-id=166-4173&t=LHceEt7oOv61RPiW-0"
      />
    </>
  );
};
const InformationArchitecture = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
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
      <ImageWithFigJamLink
        imgSrc={TorontoZooInformationArchitecture}
        imgAlt="Toronto Zoo Information Architecture"
        href="https://www.figma.com/board/bMyj3Ce4lz66DDUvUO1a9G/Toronto-Zoo---Card-Sorting%2C-Information-Architecture?node-id=903-4112&t=LHceEt7oOv61RPiW-1"
      />
    </>
  );
};
const UserFlow = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
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
      <ImageWithFigJamLink
        href="https://www.figma.com/board/bMyj3Ce4lz66DDUvUO1a9G/Toronto-Zoo---Card-Sorting%2C-Information-Architecture?node-id=909-3206&t=LHceEt7oOv61RPiW-1"
        imgSrc={TorontoZooUserFlow}
        imgAlt="Toronto Zoo User Flow chart"
      />
    </>
  );
};
const Sketches = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: VERTICAL_SPACE,
          margin: `${VERTICAL_SPACE} 0`,
        }}
      >
        <SketchWithFigJamLink
          label="Desktop Screen Sketches"
          href="https://www.figma.com/proto/8PBbMggHeXXXcKvLDIHF0N/Toronto-Zoo?page-id=1%3A2&type=design&node-id=112-4091&viewport=1407%2C888%2C0.13&t=QenDS8KEaJItQohv-1&scaling=scale-down&starting-point-node-id=112%3A4091"
          imgAlt="Desktop Screen Sketches"
          imgSrc={TorontoZooDesktopSketches}
        />

        <SketchWithFigJamLink
          label="Mobile Screen Sketches"
          href="https://www.figma.com/proto/8PBbMggHeXXXcKvLDIHF0N/Toronto-Zoo?page-id=0%3A1&type=design&node-id=2-9&viewport=503%2C293%2C0.14&t=0iJgF9M8LW1LHjTt-1&scaling=scale-down&starting-point-node-id=2%3A9"
          imgAlt="Mobile Screen Sketches"
          imgSrc={TorontoZooMobileSketches}
        />
      </div>
    </>
  );
};
const Wireframes = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: VERTICAL_SPACE,
          margin: `${VERTICAL_SPACE} 0`,
        }}
      >
        <SketchWithFigJamLink
          label="Desktop Screen Wireframes"
          href="https://www.figma.com/proto/8PBbMggHeXXXcKvLDIHF0N/Toronto-Zoo?page-id=1%3A2&type=design&node-id=272-3517&viewport=236%2C-465%2C0.08&t=OuDWqQgKULBCAto8-1&scaling=scale-down&starting-point-node-id=272%3A3517"
          imgAlt="Desktop Screen Wireframes"
          imgSrc={TorontoZooDesktopWireframes}
        />

        <SketchWithFigJamLink
          label="Mobile Screen Wireframes"
          href="https://www.figma.com/proto/8PBbMggHeXXXcKvLDIHF0N/Toronto-Zoo?page-id=0%3A1&type=design&node-id=304-4317&viewport=522%2C-106%2C0.1&t=9tKTrTwEUHnTjx2K-1&scaling=scale-down&starting-point-node-id=304%3A4317"
          imgAlt="Mobile Screen Wireframes"
          imgSrc={TorontoZooMobileWireframes}
        />
      </div>
    </>
  );
};
const IterationBasedDesign = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
      <SubHeading
        text={ideateColumn.links[4].label}
        containerAttributes={{
          id: ideateColumn.links[4].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <p>
        I conducted <ColoredText color="accent">usability testing</ColoredText>{' '}
        with a low-fidelity prototype on six individuals, focusing on their task
        to purchase tickets for a group. This testing highlighted usability
        issues, particularly with the booking page layout.
      </p>
      <p>
        Participants suggested the{' '}
        <ColoredText color="accent">inclusion of a progress bar</ColoredText> to
        track completed steps. In response, I implemented a progress bar to
        enhance clarity and improve the user experience during the booking
        process.
      </p>
    </>
  );
};

const IdeateSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <div style={{ fontFamily: LIGHT_FONT }}>
      <SectionDivider text="Ideate" isOnEvenTab={isOnEvenTab} />
      <CardSorting isOnEvenTab={isOnEvenTab} />
      <InformationArchitecture isOnEvenTab={isOnEvenTab} />
      <UserFlow isOnEvenTab={isOnEvenTab} />
      <Sketches isOnEvenTab={isOnEvenTab} />
      <Wireframes isOnEvenTab={isOnEvenTab} />
      <IterationBasedDesign isOnEvenTab={isOnEvenTab} />
    </div>
  );
};

export { IdeateSection };
