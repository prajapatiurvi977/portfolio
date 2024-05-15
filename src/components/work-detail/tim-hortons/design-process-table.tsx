import React from 'react';
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
const discoverColumn: ITableColumn = {
  header: 'Discover',
  links: [
    {
      label: 'Research Process',
      target: 'research-process',
    },
    {
      label: 'How users feel?',
      target: 'how-users-feel',
    },
  ],
};
const defineColumn: ITableColumn = {
  header: 'Define',
  links: [
    {
      label: 'HMW',
      target: 'hmw',
    },
    {
      label: 'Solution to HMW',
      target: 'solution-to-hmw',
    },
  ],
};
const ideateColumn: ITableColumn = {
  header: 'Ideate',
  links: [
    {
      label: 'Pruning the User Flow',
      target: 'pruning-user-flow',
    },
    {
      label: 'Sketches',
      target: 'sketches',
    },
    {
      label: 'Iteration 1 Results',
      target: 'iteration-1-results',
    },
  ],
};
const designColumn: ITableColumn = {
  header: 'Design',
  links: [
    {
      label: 'Hi-Fidelity Designs',
      target: 'high-fidelity-designs',
    },
  ],
};
const deliverColumn: ITableColumn = {
  header: 'Deliver',
  links: [
    { label: 'What next?', target: 'what-next' },
    { label: 'What I learned', target: 'what-i-learned' },
    { label: 'Achievements', target: 'achievements' },
  ],
};

const DesignProcessTable = () => {
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
                    href={`#${target}`}
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

export {
  DesignProcessTable,
  defineColumn,
  deliverColumn,
  designColumn,
  discoverColumn,
  ideateColumn,
};
