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
import { useUIContext } from '../../state/ui-context';

interface Link {
  label: string;
  target: string;
}
interface ITableColumn {
  header: string;
  subHeader?: IHeaderCell['subHeader'];
  links: Link[];
}

interface ITableStructure extends IsEvenProp {
  discoverColumn?: ITableColumn;
  defineColumn?: ITableColumn;
  ideateColumn?: ITableColumn;
  designColumn?: ITableColumn;
  deliverColumn?: ITableColumn;
}

interface IHeaderCell extends IsEvenProp {
  header: string;
  subHeader?: string;
}
const HeaderCell = ({ isEven, header, subHeader }: IHeaderCell) => {
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>{header}</div>
      {subHeader !== undefined && (
        <div
          style={{
            color: isEven ? LIGHT_COLOR : DARK_COLOR,
            fontFamily: LIGHT_FONT,
            fontSize: `calc(${FONT_SIZE} / 4.5)`,
            letterSpacing: '0',
          }}
        >
          {subHeader}
        </div>
      )}
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
  const { isMobileView } = useUIContext();
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
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
  const { isMobileView } = useUIContext();
  return (
    <div
      style={{
        display: 'flex',
        border: `1px solid ${isEven ? DARK_COLOR : LIGHT_COLOR}`,
        flexDirection: isMobileView ? 'column' : 'row',
      }}
    >
      {children}
    </div>
  );
};

type HeaderTexts = Pick<ITableColumn, 'header' | 'subHeader'>;
type HeaderRowTemplate = HeaderTexts[];

const DesignProcessTableTemplate = ({
  discoverColumn,
  defineColumn,
  ideateColumn,
  designColumn,
  deliverColumn,
  isEven,
}: ITableStructure) => {
  const columns: ITableColumn[] = [
    discoverColumn,
    defineColumn,
    ideateColumn,
    designColumn,
    deliverColumn,
  ].filter((col) => col);

  return (
    <TableWrapper isEven={isEven}>
      {columns.map(({ header, subHeader, links }) => (
        <div key={header} style={{ flex: 1 }}>
          <HeaderCell
            key={header}
            isEven={isEven}
            header={header}
            subHeader={subHeader}
          />
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
        </div>
      ))}
    </TableWrapper>
  );
};

export {
  DesignProcessTableTemplate,
  HeaderCell,
  HeaderRow,
  Row,
  RowCell,
  RowContentWrapper,
  TableWrapper,
  type HeaderRowTemplate,
  type HeaderTexts,
  type ITableColumn,
  type Link,
};
