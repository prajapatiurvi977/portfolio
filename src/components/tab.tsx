import type { CSSProperties, FC } from 'react';
import React from 'react';
import { AnimatedDiv } from './animated-div';
import { motion } from 'framer-motion';

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
  animationDuration: 0.3,
};

const Tab: FC<ITabProps> = ({
  id,
  title,
  onTabSelected,
  isOpen = false,
  styleProps,
  children,
}) => {
  return (
    <motion.div
      key="container"
      layout="position"
      transition={{
        duration: UIConstants.animationDuration,
        ease: 'easeIn',
        bounce: 20,
      }}
      style={{
        display: 'flex',
        flex: isOpen ? 1 : 0,
        fontSize: '72px',
        lineHeight: `calc(${UIConstants.fontSize} + 2px)`,
        minWidth: UIConstants.horizontalSpace,
        letterSpacing: '5px',
        fontFamily: 'PPFormula-CondensedBlack, NoiGrotesk-SemiBold',
        position: 'relative',
        ...(!isOpen && {
          cursor: 'pointer',
        }),
        ...styleProps,
      }}
      onClick={() => {
        onTabSelected(id);
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1,

          padding: `${UIConstants.verticalSpace} ${UIConstants.horizontalSpace} ${UIConstants.verticalSpace} ${UIConstants.horizontalSpace}`,
        }}
      >
        <AnimatedDiv
          isMounted={isOpen}
          key="tab-title-opened"
          animationDuration={UIConstants.animationDuration}
        >
          {title}
        </AnimatedDiv>
        <div style={{ flex: 1 }}></div>
      </div>
      <AnimatedDiv
        animationDuration={UIConstants.animationDuration}
        isMounted={!isOpen}
        key="tab-title-closed"
        styleProps={{
          exitWidth: 0,
          fullWidth: '100vh',
        }}
        className="tab-title title-closed"
      >
        <div
          style={{
            transform: 'rotate(90deg)',
            transformOrigin: '0 0',
            position: 'absolute',
            top: UIConstants.verticalSpace,
            left: `calc(${UIConstants.verticalSpace} * 2)`,
            minWidth: '100vh',
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          {title}
        </div>
      </AnimatedDiv>
    </motion.div>
  );
};

export { Tab };
export type { ITabProps };
