import type { CSSProperties, FC } from 'react';
import React from 'react';

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
        className={'tab'}
        style={{
          flex: isOpen ? 1 : 0,
          fontSize: '2rem',
          minWidth: '115px',
          ...(!isOpen && {
            cursor: 'pointer',
            writingMode: 'vertical-rl',
            textAlign: 'start',
            paddingTop: '1rem',
            fontFamily: 'PPFormulaCondensed Black; NoiGrotesk-SemiBold',
          }),
          ...styleProps,
        }}
        onClick={() => {
          onTabSelected(id);
        }}
      >
        {title}
      </div>
    </>
  );
};

export { Tab };
export type { ITabProps };
