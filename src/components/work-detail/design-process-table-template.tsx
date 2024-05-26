import type { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import type { IsEvenProp } from '../../common-types';
import {
  ACCENT_COLOR,
  CONDENSED_FONT,
  DARK_COLOR,
  FONT_SIZE,
  LIGHT_COLOR,
  LIGHT_FONT,
} from '../../constants';

interface Link {
  label: string;
  target: string;
}
interface ITableColumn {
  header: string;
  links: Link[];
}

interface ITableStructure extends IsEvenProp {
  discoverColumn: ITableColumn;
  defineColumn: ITableColumn;
  ideateColumn: ITableColumn;
  designColumn: ITableColumn;
  deliverColumn: ITableColumn;
}

interface IHeaderCell extends IsEvenProp {
  label: string;
}
const HeaderCell = ({ isEven, label }: IHeaderCell) => {
  return (
    <div
      style={{
        backgroundColor: isEven ? DARK_COLOR : LIGHT_COLOR,
        color: ACCENT_COLOR,
        padding: '20px',
        fontFamily: CONDENSED_FONT,
        fontSize: `calc(${FONT_SIZE} / 3)`,
        letterSpacing: '2px',
        flex: 1,
      }}
    >
      {label}
    </div>
  );
};

interface IRowCell extends IsEvenProp, PropsWithChildren {}
const RowCell = ({ isEven, children }: IRowCell) => {
  return (
    <div
      style={{
        backgroundColor: isEven ? LIGHT_COLOR : DARK_COLOR,
        padding: '20px',
        fontSize: `calc(${FONT_SIZE} / 4)`,
      }}
    >
      {children}
    </div>
  );
};

interface IRow extends PropsWithChildren {
  style?: CSSProperties;
}
const Row = ({ children, style }: IRow) => {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {children}
    </div>
  );
};

interface IHeaderRow extends IRow, IsEvenProp {}
const HeaderRow = ({ isEven, children }: IHeaderRow) => {
  return (
    <Row style={{ backgroundColor: isEven ? DARK_COLOR : LIGHT_COLOR }}>
      {children}
    </Row>
  );
};

interface IRowContentWrapper extends PropsWithChildren {}
const RowContentWrapper = ({ children }: IRowContentWrapper) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        flex: 1,
      }}
    >
      {children}
    </div>
  );
};

type ITableChildren = IHeaderRow | IRow;

interface ITableWrapper extends IsEvenProp {
  children:
    | ReactElement<ITableChildren, 'div'>
    | Array<ReactElement<ITableChildren, 'div'>>;
}
const TableWrapper = ({ isEven, children }: ITableWrapper) => {
  return (
    <div
      style={{
        display: 'flex',
        border: `1px solid ${isEven ? DARK_COLOR : LIGHT_COLOR}`,
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
};

const DesignProcessTableTemplate = ({
  discoverColumn,
  defineColumn,
  ideateColumn,
  designColumn,
  deliverColumn,
  isEven,
}: ITableStructure) => {
  const headerRow: Array<ITableColumn['header']> = [
    discoverColumn.header,
    defineColumn.header,
    ideateColumn.header,
    designColumn.header,
    deliverColumn.header,
  ];
  const dataRows: Array<ITableColumn['links']> = [
    discoverColumn.links,
    defineColumn.links,
    ideateColumn.links,
    designColumn.links,
    deliverColumn.links,
  ];
  return (
    <TableWrapper isEven={isEven}>
      <HeaderRow isEven={isEven}>
        {headerRow.map((header) => (
          <HeaderCell key={header} isEven={isEven} label={header} />
        ))}
      </HeaderRow>
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
                }}
              >
                {links.map(({ label, target }) => (
                  <li key={label}>
                    <a
                      href={`#${target}`}
                      style={{
                        fontFamily: LIGHT_FONT,
                        color: isEven ? DARK_COLOR : LIGHT_COLOR,
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

export {
  DesignProcessTableTemplate,
  HeaderCell,
  HeaderRow,
  RowCell,
  RowContentWrapper,
  TableWrapper,
  type ITableColumn,
  type Link,
};
