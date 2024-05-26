import type { PropsWithChildren } from 'react';
import React from 'react';
import DesignSystemImage from '../../../assets/images/toronto-zoo/design-system-diagram.png';
import type { IsEvenProp } from '../../../common-types';
import { LIGHT_COLOR, LIGHT_FONT } from '../../../constants';
import type {
  HeaderRowTemplate,
  ITableColumn,
} from '../design-process-table-template';
import {
  HeaderCell,
  HeaderRow,
  RowCell,
  RowContentWrapper,
  TableWrapper,
} from '../design-process-table-template';

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

const DesignProcessTable = ({ isEven }: IsEvenProp) => {
  const headerRow: HeaderRowTemplate = [
    { header: 'Discover', subHeader: 'Research' },
    { header: 'Define', subHeader: 'Insights ' },
    { header: 'Ideate', subHeader: 'Brainstorm' },
    { header: 'Prototype', subHeader: 'Test ' },
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
    <TableWrapper isEven={isEven}>
      <HeaderRow isEven={isEven}>
        {headerRow.map(({ header, subHeader }) => (
          <HeaderCell
            key={header}
            isEven={isEven}
            header={header}
            subHeader={subHeader}
          />
        ))}
      </HeaderRow>
      <Row>
        <img src={DesignSystemImage} alt={'Design System'} width="100%" />
      </Row>
      <Row>
        {dataRows.map((links, index) => (
          <RowContentWrapper key={`data-row-${index}`}>
            <RowCell isEven={isEven}>
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
            </RowCell>
          </RowContentWrapper>
        ))}
      </Row>
    </TableWrapper>
  );
};

export { DesignProcessTable };
