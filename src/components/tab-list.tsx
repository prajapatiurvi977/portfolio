import type { FC, PropsWithChildren } from 'react';
import React, { useState } from 'react';
import { useUIContext } from '../state/ui-context';
import type { ITabProps } from './tab';
import { Tab } from './tab';

type TabListConfig = Array<
  Pick<ITabProps, 'id' | 'title' | 'content'> & PropsWithChildren
>;
interface ITabListProps {
  listConfig: TabListConfig;
  includeFooter?: boolean;
  initialSelectedTabId?: TabListConfig[number]['id'];
  onTabSelected?: (tabId: TabListConfig[number]['id']) => void;
  backNavButtonTarget?: string;
}

const TabList: FC<ITabListProps> = ({
  listConfig,
  includeFooter = true,
  initialSelectedTabId = listConfig[0].id,
  onTabSelected,
  backNavButtonTarget,
}) => {
  const [selectedTabId, setSelectedTabId] =
    useState<string>(initialSelectedTabId);
  const { isMobileView } = useUIContext();

  const handleTabClick = (id: string): void => {
    setSelectedTabId(id);
    onTabSelected?.(id);
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
          onTabSelected={handleTabClick}
          content={content}
          totalTabs={listConfig.length}
          includeFooter={includeFooter}
          backNavButtonTarget={backNavButtonTarget}
        />
      ))}
    </div>
  );
};

export { TabList, type ITabListProps };
