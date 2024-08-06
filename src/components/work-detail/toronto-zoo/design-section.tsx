import React from 'react';
import TorontoZooDesignSystem from '../../../assets/images/toronto-zoo/design-system.png';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../../constants';
import { useUIContext } from '../../../state/ui-context';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { FigmaFrame } from '../figma-frame';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { designColumn } from './design-process-table';

const DesignSystemSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
      <SubHeading
        text={designColumn.links[0].label}
        containerAttributes={{
          id: designColumn.links[0].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <p>
        According to Toronto Zoo Logo, I made visual system and made reusable UI
        elements.
      </p>
      <img
        src={TorontoZooDesignSystem}
        alt="Toronto Zoo design system"
        width="100%"
      />
    </>
  );
};

const HiFiDesignSubSection = ({
  heading,
  details,
}: {
  heading: string;
  details: React.JSX.Element[];
}) => {
  const { isMobileView } = useUIContext();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: `calc(${VERTICAL_SPACE} / 2)`,
        ...(isMobileView
          ? {
              marginBottom: VERTICAL_SPACE,
            }
          : {
              margin: `${VERTICAL_SPACE} calc(2 * ${HORIZONTAL_SPACE})`,
            }),
      }}
    >
      <ColoredText color="accent">{heading}</ColoredText>
      <div
        style={{
          padding: '20px',
          border: `1px solid ${ACCENT_COLOR}`,
        }}
      >
        <ul>
          {details.map((detail, index) => (
            <li key={`Hifi-design-sub-section-${Date.now()}-${index}`}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HiFiDesignSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
      <SubHeading
        text={designColumn.links[1].label}
        containerAttributes={{
          id: designColumn.links[1].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <p>
        Initially, I began working on the desktop version, encountering
        challenges with content placement in the header and footer, and design
        issues. When transitioning the wireframe to high-fidelity, the elements
        appeared congested, prompting a redesign of the layout.
      </p>
      <HiFiDesignSubSection
        heading="Desktop Version Initial Work"
        details={[
          <span key="desktop-initial-work-1">
            Encountered challenges with{' '}
            <ColoredText color="accent">content placement</ColoredText> in the
            header and footer.
          </span>,
          <span key="desktop-initial-work-2">
            Elements appeared{' '}
            <ColoredText color="accent">congested</ColoredText> when
            transitioning the wireframe to high-fidelity, leading to a{' '}
            <ColoredText color="accent">redesign of the layout</ColoredText>.
          </span>,
        ]}
      />
      <HiFiDesignSubSection
        heading="Effective Use of Whitespace on Desktop"
        details={[
          <span key="effective-use-of-whitespace-1">
            Focused on using whitespace to ensure logical information flow and
            visual appeal.
          </span>,
          <span key="effective-use-of-whitespace-2">
            Utilized the
            <ColoredText color="accent">Z-pattern layout</ColoredText>
            for web content placement.
          </span>,
          <span key="effective-use-of-whitespace-3">
            Example: On the ticket addition page, information flow started with
            ticket and event details, followed by calendar dates for ticket
            types.
          </span>,
        ]}
      />
      <HiFiDesignSubSection
        heading="Mobile Version Design Challenges"
        details={[
          <span key="mobile-version-design-challenges-1">
            Header details like Hours of Operation looked cluttered due to
            limited screen space. So I opted for a{' '}
            <ColoredText color="accent">marquee</ColoredText> effect to make
            similar to the desktop version.
          </span>,
        ]}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <FigmaFrame
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8PBbMggHeXXXcKvLDIHF0N%2FToronto-Zoo%3Fpage-id%3D1%253A2%26type%3Ddesign%26node-id%3D709-7563%26viewport%3D222%252C-1811%252C0.08%26t%3DmWylh3uYY24gYLFr-1%26scaling%3Dscale-down%26starting-point-node-id%3D709%253A7563"
          styleProps={{
            flex: 1,
          }}
        />

        <FigmaFrame
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8PBbMggHeXXXcKvLDIHF0N%2FToronto-Zoo%3Fembed_host%3Dshare%26kind%3Dproto%26node-id%3D808-8250%26page-id%3D0%253A1%26scaling%3Dcontain%26starting-point-node-id%3D808%253A8250%26t%3DkS48Q9qxQzGDnVRS-1"
          styleProps={{
            flex: 0,
          }}
        />
      </div>
    </>
  );
};

const AchievementsSection = ({ isOnEvenTab }: TabElementsConfig) => {
  const { isMobileView } = useUIContext();
  const achievement1 = (
    <span>
      Improved{' '}
      <ColoredText color="accent">usability and accessibility</ColoredText> on
      both desktop and mobile platforms by integrating user feedback into design
      iterations, leading to a more intuitive and user-friendly interface.
    </span>
  );
  const achievement2 = (
    <span>
      Designs resulted in a cohesive user experience that supported{' '}
      <ColoredText color="accent">business objectives</ColoredText> without
      compromising on user engagement.
    </span>
  );
  const achievement3 = (
    <span>
      Overcame the challenge of{' '}
      <ColoredText color="accent">limited space</ColoredText> on mobile devices
      by adopting a marquee feature to display essential information{' '}
      <ColoredText color="accent">without cluttering the screen</ColoredText>.
    </span>
  );
  const achievements = [achievement1, achievement2, achievement3];

  return (
    <>
      <SubHeading
        text={designColumn.links[2].label}
        containerAttributes={{
          id: designColumn.links[2].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: VERTICAL_SPACE,
          margin: `${VERTICAL_SPACE} 0`,
        }}
      >
        {achievements.map((achievement, index) => (
          <div
            key={`toronto-zoo-achievement-${index}`}
            style={{
              backgroundColor: LIGHT_COLOR,
              padding: `calc(${VERTICAL_SPACE} / 2)`,
              color: DARK_COLOR,
              ...(!isMobileView && {
                margin: `0 calc(2 * ${HORIZONTAL_SPACE})`,
              }),
            }}
          >
            {achievement}
          </div>
        ))}
      </div>
    </>
  );
};

const LearningsSection = ({ isOnEvenTab }: TabElementsConfig) => {
  const { isMobileView } = useUIContext();
  const learning1 =
    'By reviewing user feedback and performing usability tests, I pinpointed necessary improvements and opportunities for betterment. The main insight was the critical need to prioritize user preferences to develop a more intuitive and user-friendly interface.';
  const learning2 =
    'The redesign of the ticket purchase process underscored the importance of streamlining the transaction path, removing superfluous steps or excessive information, and providing a more seamless experience.';
  const learning3 =
    'Reworking the navigation underscored the necessity of designing a navigation system that is intuitive, easy to use, and meets the expectations of the target audience.';
  const learnings = [learning1, learning2, learning3];

  return (
    <>
      <SubHeading
        text={designColumn.links[3].label}
        containerAttributes={{
          id: designColumn.links[3].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: VERTICAL_SPACE,
          margin: `${VERTICAL_SPACE} 0`,
        }}
      >
        {learnings.map((learning, index) => (
          <div
            key={`toronto-zoo-learning-${index}`}
            style={{
              backgroundColor: DARK_COLOR,
              padding: `calc(${VERTICAL_SPACE} / 2)`,
              color: LIGHT_COLOR,
              ...(!isMobileView && {
                margin: `0 calc(2 * ${HORIZONTAL_SPACE})`,
              }),
              border: `1px solid ${ACCENT_COLOR}`,
            }}
          >
            {learning}
          </div>
        ))}
      </div>
    </>
  );
};

const DesignSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <div
      style={{
        fontFamily: LIGHT_FONT,
      }}
    >
      <SectionDivider text="Design" isOnEvenTab={isOnEvenTab} />
      <DesignSystemSection isOnEvenTab={isOnEvenTab} />
      <HiFiDesignSection isOnEvenTab={isOnEvenTab} />
      <AchievementsSection isOnEvenTab={isOnEvenTab} />
      <LearningsSection isOnEvenTab={isOnEvenTab} />
    </div>
  );
};

export { DesignSection };
