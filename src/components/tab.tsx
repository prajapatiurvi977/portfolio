import { FC } from "react";

interface ITabProps {
  title: string;
  id: string;
}

const Tab: FC<ITabProps> = ({ id, title }) => {
  return (
    <>
      <div>{title}</div>
    </>
  );
};

export { Tab };
export type { ITabProps };
