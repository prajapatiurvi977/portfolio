import { CSSProperties, FC } from "react";

interface ITabProps {
  title: string;
  id: string;
  isOpen: boolean;
  styleProps?: CSSProperties;
  onTabSelected: (id: string) => void;
}

const Tab: FC<ITabProps> = ({
  id,
  title,
  onTabSelected,
  isOpen = false,
  styleProps,
}) => {
  return (
    <>
      <div
        style={{
          flex: isOpen ? 1 : 0,
          minWidth: "115px",
          ...(!isOpen && { cursor: "pointer" }),
          ...styleProps,
        }}
        onClick={() => onTabSelected(id)}
      >
        {title}
      </div>
    </>
  );
};

export { Tab };
export type { ITabProps };
