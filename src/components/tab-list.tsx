import React, { useState } from 'react';
import type { CSSProperties, FC, PropsWithChildren } from 'react';
import { Tab } from './tab';
import type { ITabProps } from './tab';
interface ITabListProps {
  listConfig: Array<Pick<ITabProps, 'id' | 'title'> & PropsWithChildren>;
}

interface ITabUI {
  backgroundColor: CSSProperties['backgroundColor'];
  color: CSSProperties['color'];
}

const LIGHT_TAB: ITabUI = {
  backgroundColor: 'white',
  color: 'black',
};

const DARK_TAB: ITabUI = {
  backgroundColor: 'black',
  color: 'white',
};

const TabList: FC<ITabListProps> = ({ listConfig }) => {
  const [selectedTabId, setSelectedTabId] = useState<string>('home');

  const onTabSelected = (id: string): void => {
    setSelectedTabId(id);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
      }}
    >
      {listConfig.map(({ title, id, children }, index) => (
        <Tab
          id={id}
          title={title}
          key={id}
          isOpen={selectedTabId === id}
          styleProps={{
            backgroundColor:
              index % 2 === 0
                ? LIGHT_TAB.backgroundColor
                : DARK_TAB.backgroundColor,
            color: index % 2 === 0 ? LIGHT_TAB.color : DARK_TAB.color,
          }}
          onTabSelected={onTabSelected}
        >
          {children}
        </Tab>
      ))}
    </div>
  );
};

export { TabList };
export type { ITabListProps };
