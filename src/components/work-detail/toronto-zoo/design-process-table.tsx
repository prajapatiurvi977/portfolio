import type { PropsWithChildren } from 'react';
import React from 'react';
import DesignSystemImage from '../../../assets/images/toronto-zoo/design-system-diagram.png';
import {
  ACCENT_COLOR,
  CONDENSED_FONT,
  DARK_COLOR,
  FONT_SIZE,
  LIGHT_COLOR,
  LIGHT_FONT,
} from '../../../constants';

interface Link {
  label: string;
  target: string;
}
interface ITableColumn {
  header: string;
  links: Link[];
}

const Row = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {children}
    </div>
  );
};
const DesignProcessTable = () => {
  const headerRow: Array<ITableColumn['header']> = [
    'Discover',
    'Define',
    'Ideate',
    'Design',
    'Deliver',
  ];
  const dataRows: Array<ITableColumn['links']> = [
    [
      {
        label: 'Research Process',
        target: 'research-process',
      },
    ],
    [
      {
        label: 'How users feel?',
        target: 'how-users-feel',
      },
      {
        label: 'HMW-Statement',
        target: 'hmw-statement',
      },
      {
        label: 'Solution to HMW',
        target: 'solution-to-hmw',
      },
    ],
    [
      {
        label: 'Card Sorting',
        target: 'card-sorting',
      },
      {
        label: 'Information Architecture',
        target: 'information-architecture',
      },

      {
        label: 'Pruning User Flow',
        target: 'pruning-user-flow',
      },
      {
        label: 'Sketches and Wireframes',
        target: 'sketches',
      },
      {
        label: 'Iteration based design',
        target: 'iteration-based-design',
      },
    ],
    [
      {
        label: 'Design System',
        target: 'design-system',
      },
      {
        label: 'High-Fidelity Prototype',
        target: 'high-fidelity-prototype',
      },
      {
        label: 'What I learned',
        target: 'what-i-learned',
      },
    ],
  ];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
      }}
    >
      <Row>
        {headerRow.map((header) => (
          <div
            style={{
              flexDirection: 'column',
              display: 'flex',
              flex: 1,
              backgroundColor: LIGHT_COLOR,
            }}
            key={header}
          >
            <div
              style={{
                color: ACCENT_COLOR,
                padding: '20px',
                fontFamily: CONDENSED_FONT,
                fontSize: `calc(${FONT_SIZE} / 3)`,
                letterSpacing: '2px',
                backgroundColor: DARK_COLOR,
              }}
            >
              {header}
            </div>
          </div>
        ))}
      </Row>
      <Row>
        <img src={DesignSystemImage} alt={'Design System'} width="100%" />
      </Row>
      <Row>
        {dataRows.map((links, index) => (
          <div
            style={{
              flexDirection: 'column',
              display: 'flex',
              flex: 1,
            }}
            key={`data-row-${index}`}
          >
            <div
              style={{
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
                  listStyleType: 'none',
                }}
              >
                {links.map(({ label, target }) => (
                  <li key={label}>
                    <a
                      href={`#${target}`}
                      style={{
                        fontFamily: LIGHT_FONT,
                        color: LIGHT_COLOR,
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
      </Row>
    </div>
  );
};

export { DesignProcessTable };
