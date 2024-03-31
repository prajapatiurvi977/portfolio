import { FC } from "react";

interface TabListItem {
  title: string;
  id: string;
}
interface ITabListProps {
  list: Array<TabListItem>;
}

const TabList: FC<ITabListProps> = ({ list }) => {
  return (
    <>
      {list.map(({ title, id }) => (
        <>
          <div> {title}</div>
          <div> {id}</div>
        </>
      ))}
    </>
  );
};

export { TabList };
