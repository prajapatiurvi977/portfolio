import { FC } from "react";
import { ITabProps, Tab } from "./tab";

interface ITabListProps {
  listConfig: Array<ITabProps>;
}

const TabList: FC<ITabListProps> = ({ listConfig }) => {
  return (
    <>
      {listConfig.map(({ title, id }) => (
        <Tab id={id} title={title} key={id} />
      ))}
    </>
  );
};

export { TabList };
export type { ITabListProps };
