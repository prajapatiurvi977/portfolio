import React, { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Tab } from './tab';
import type { ITabProps } from './tab';
interface ITabListProps {
  listConfig: Array<
    Pick<ITabProps, 'id' | 'title' | 'content'> & PropsWithChildren
  >;
}

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
      {listConfig.map(({ title, id, children, content }, index) => (
        <Tab
          id={id}
          title={title}
          key={id}
          isOpen={selectedTabId === id}
          index={index}
          onTabSelected={onTabSelected}
          content={content}
        >
          {children}
        </Tab>
      ))}
    </div>
  );
};

export { TabList, type ITabListProps };
