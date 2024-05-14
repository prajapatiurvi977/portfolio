import type { FC } from 'react';
import React from 'react';
import WorkTimHortonsIntro from '../../assets/images/work-tim-hortons-intro.png';
import {
  ACCENT_COLOR,
  CONDENSED_FONT,
  DARK_COLOR,
  FONT_SIZE,
  LIGHT_COLOR,
  LIGHT_FONT,
} from '../../constants';
import { ColoredText } from '../colored-text';
import { TimHortonsCategories, TimHortonsDescription } from '../constants';
import { CommonIntroduction } from './common-introduction';
import { SubHeading } from './sub-heading';

interface ITimHortons {
  isEven: boolean;
}

const TimHortons: FC<ITimHortons> = ({ isEven }) => {
  return (
    <div>
      <CommonIntroduction
        subTitle={TimHortonsDescription}
        isEven={isEven}
        categories={[...TimHortonsCategories]}
        description="Enhanced user interface with a simple grid menu, in-app navigation map, streamlined menu design, and direct cart addition feature to improve accessibility and shopping efficiency."
        role="UX/UI Designer, UX Researcher"
        screenSize="iPhone 13 & 14"
        duration="May 2023 - July 2023"
        tools="Figma, FigJam"
        hifiProtoTypeLink="https://www.figma.com/proto/tG2riE7WCJJim6dhOaZVut/Tim-Hortons--Portfolio-1?page-id=0%3A1&type=design&node-id=11-66&viewport=676%2C273%2C0.15&t=VlRP24AAt1eo8f1L-1&scaling=scale-down&mode=design"
        imageSrc={WorkTimHortonsIntro}
      />
      <SubHeading text="The Problem I knew" isOnEvenTab={isEven} />
      <div
        style={{
          fontFamily: LIGHT_FONT,
        }}
      >
        Tim Hortons&apos; millions of customers still prefer to{' '}
        <ColoredText color="dark">order in person</ColoredText>. When I asked
        customers about it, many said that the ordering process was{' '}
        <ColoredText color="accent">too complicated</ColoredText> and the menu
        was <ColoredText color="accent">hard to understand</ColoredText>.
      </div>
      <SubHeading text="Design Process" isOnEvenTab={isEven} />
      <DesignProcessTable />
    </div>
  );
};

const DesignProcessTable = () => {
  interface Link {
    label: string;
    target: string;
  }
  interface ITableColumn {
    header: string;
    links: Link[];
  }
  const discoverColumn: ITableColumn = {
    header: 'Discover',
    links: [
      {
        label: 'Research Process',
        target: '#research-process',
      },
      {
        label: 'How users feel?',
        target: '#how-users-feel',
      },
    ],
  };
  const defineColumn: ITableColumn = {
    header: 'Define',
    links: [
      {
        label: 'HMW',
        target: '#hmw',
      },
      {
        label: 'Solution to HMW',
        target: '#solution-to-hmw',
      },
    ],
  };
  const ideateColumn: ITableColumn = {
    header: 'Ideate',
    links: [
      {
        label: 'Pruning the User Flow',
        target: '#pruning-user-flow',
      },
      {
        label: 'Sketches',
        target: '#sketches',
      },
      {
        label: 'Iteration 1 Results',
        target: '#iteration-1-results',
      },
    ],
  };
  const designColumn: ITableColumn = {
    header: 'Design',
    links: [
      {
        label: 'Hi-Fidelity Designs',
        target: '#high-fidelity-designs',
      },
    ],
  };
  const deliverColumn: ITableColumn = {
    header: 'Deliver',
    links: [
      { label: 'What next?', target: '#what-next' },

      { label: 'What I learned', target: '#what-i-learned' },
    ],
  };
  const tableSections: ITableColumn[] = [
    discoverColumn,
    defineColumn,
    ideateColumn,
    designColumn,
    deliverColumn,
  ];
  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid',
      }}
    >
      {tableSections.map(({ header, links }) => (
        <div
          style={{
            flexDirection: 'column',
            display: 'flex',
            flex: 1,
          }}
          key={header}
        >
          <div
            style={{
              backgroundColor: DARK_COLOR,
              color: ACCENT_COLOR,
              padding: '20px',
              fontFamily: CONDENSED_FONT,
              fontSize: `calc(${FONT_SIZE} / 3)`,
            }}
          >
            {header}
          </div>
          <div
            style={{
              backgroundColor: LIGHT_COLOR,
              padding: '20px',
              fontSize: `calc(${FONT_SIZE} / 4)`,
            }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {links.map(({ label, target }) => (
                <li key={label}>
                  <a
                    href={target}
                    style={{
                      fontFamily: LIGHT_FONT,
                      color: DARK_COLOR,
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export { TimHortons };
