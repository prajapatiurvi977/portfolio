import { CSSProperties, FC, useState } from "react";
import { ITabProps, Tab } from "./tab";

interface ITabListProps {
  listConfig: Array<ITabProps>;
}

interface ITabUI {
  backgroundColor: CSSProperties["backgroundColor"];
  color: CSSProperties["color"];
}
const LIGHT_TAB: ITabUI = {
  backgroundColor: "white",
  color: "black",
};
const DARK_TAB: ITabUI = {
  backgroundColor: "black",
  color: "white",
};

const TabList: FC<ITabListProps> = ({ listConfig }) => {
  const [selectedTabId, setSelectedTabId] = useState<string>("home");

  const onTabSelected = (id: string) => {
    setSelectedTabId(id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      {listConfig.map(({ title, id }, index) => (
        <Tab
          id={id}
          title={title}
          key={id}
          isOpen={selectedTabId === id}
          styleProps={{
            backgroundColor:
              index % 2 ? LIGHT_TAB.backgroundColor : DARK_TAB.backgroundColor,
            color: index % 2 ? LIGHT_TAB.color : DARK_TAB.color,
            transition: "all 0.4s ease-in",
          }}
          onTabSelected={onTabSelected}
        />
      ))}
    </div>
  );
};

export { TabList };
export type { ITabListProps };
