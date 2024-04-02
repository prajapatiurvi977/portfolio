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
          position: 'relative',
          ...(isOpen
            ? {
                padding: `${UIConstants.verticalSpace} ${UIConstants.horizontalSpace} ${UIConstants.verticalSpace} ${UIConstants.horizontalSpace}`,
              }
            : {
                alignItems: 'center',
                cursor: 'pointer',
                // writingMode: 'vertical-rl',
                textAlign: 'start',
                paddingTop: UIConstants.verticalSpace,
              }),
          ...styleProps,
        }}
        onClick={() => {
          onTabSelected(id);
        }}
      >
        <div
          style={{
            transform: `rotate(${isOpen ? '0deg' : '90deg'})`,
            // transformOrigin: '0 0',
            transition: 'all 0.4s ease-in',
            ...(!isOpen && { position: 'absolute', top: 0, left: 0 }),
            // ...(isOpen && { top: 0, left: 0 }),
          }}
        >
          {title}
        </div>
      </div>
    </>
  );
};

export { Tab };
export type { ITabProps };
