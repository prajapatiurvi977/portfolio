import type { CSSProperties, FC } from 'react';
import React from 'react';

interface ITabProps {
  title: string;
  id: string;
  isOpen: boolean;
  styleProps?: CSSProperties;
  onTabSelected: (id: string) => void;
}

const UIConstants = {
  horizontalSpace: '100px',
  verticalSpace: '40px',
  fontSize: '72px',
};

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
          display: 'flex',
          flex: isOpen ? 1 : 0,
          fontSize: '72px',
          lineHeight: `calc(${UIConstants.fontSize} + 2px)`,
          minWidth: UIConstants.horizontalSpace,
          letterSpacing: '5px',
          fontFamily: 'PPFormula-CondensedBlack, NoiGrotesk-SemiBold',
          ...(isOpen
            ? {
                padding: `${UIConstants.verticalSpace} ${UIConstants.horizontalSpace} ${UIConstants.verticalSpace} ${UIConstants.horizontalSpace}`,
              }
            : {
                alignItems: 'center',
                cursor: 'pointer',
                writingMode: 'vertical-rl',
                textAlign: 'start',
                paddingTop: UIConstants.verticalSpace,
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
