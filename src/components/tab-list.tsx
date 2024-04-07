import React, { useEffect, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Tab } from './tab';
import type { ITabProps } from './tab';
import { useWindowDimensions } from './hooks/use-window-dimensions';
import { MOBILE_VIEW_WIDTH } from '../constants';
import { useUIContext } from '../state/ui-context';
interface ITabListProps {
  listConfig: Array<
    Pick<ITabProps, 'id' | 'title' | 'content'> & PropsWithChildren
  >;
}

const TabList: FC<ITabListProps> = ({ listConfig }) => {
  const [selectedTabId, setSelectedTabId] = useState<string>('home');
  const { isMobileView, setIsMobileView } = useUIContext();

  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsMobileView(width <= MOBILE_VIEW_WIDTH);
  }, [width, setIsMobileView]);

  const onTabSelected = (id: string): void => {
    setSelectedTabId(id);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        height: '100%',
        width: '100%',
      }}
    >
      {listConfig.map(({ title, id, content }, index) => (
        <Tab
          id={id}
          title={title}
          key={id}
          isOpen={selectedTabId === id}
          index={index}
          onTabSelected={onTabSelected}
          content={content}
        />
      ))}
    </div>
  );
};

export { TabList, type ITabListProps };
