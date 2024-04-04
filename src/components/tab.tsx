import type { FC } from 'react';
import React from 'react';
import { AnimatedDiv } from './animated-div';
import { motion } from 'framer-motion';
import type { IStickyFooterProps } from './sticky-footer';
import { StickyFooter } from './sticky-footer';
import {
  ANIMATION_DURATION,
  DARK_COLOR,
  FONT_SIZE,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
  VERTICAL_SPACE,
} from '../constants';

interface ITabProps {
  title: string;
  id: string;
  isOpen: boolean;
  index: number;
  onTabSelected: (id: string) => void;
}

const Tab: FC<ITabProps> = ({
  id,
  title,
  onTabSelected,
  isOpen = false,
  index,
  children,
}) => {
  const isEven = index % 2 === 0;

  const footerItems: IStickyFooterProps['items'] = [
    {
      iconUrl: `src/assets/images/email${!isEven ? '-light' : ''}.svg`,
      label: 'E-Mail',
      target: 'mailto:urvi.prajapati203096@gmail.com',
    },
    {
      iconUrl: `src/assets/images/linkedIn${!isEven ? '-light' : ''}.svg`,
      label: 'LinkedIn',
      target: 'https://www.linkedin.com/in/urvi-prajapati/',
    },
    {
      iconUrl: `src/assets/images/github${!isEven ? '-light' : ''}.svg`,
      label: 'Github',
      target: 'https://github.com/prajapatiurvi977',
    },
    {
      iconUrl: `src/assets/images/download-resume${!isEven ? '-light' : ''}.svg`,
      label: 'Download Resume',
      target: '',
      anchorProps: {
        download: 'src/assets/Urvi_Prajapati_Resume.pdf',
      },
    },
  ];
  return (
    <motion.div
      key="container"
      layout="position"
      transition={{
        duration: ANIMATION_DURATION,
        ease: 'easeIn',
        bounce: 20,
      }}
      style={{
        display: 'flex',
        flex: isOpen ? 1 : 0,
        fontSize: '72px',
        lineHeight: `calc(${FONT_SIZE} + 2px)`,
        minWidth: HORIZONTAL_SPACE,
        letterSpacing: '5px',
        fontFamily: 'PPFormula-CondensedBlack, NoiGrotesk-SemiBold',
        position: 'relative',
        backgroundColor: isEven ? LIGHT_COLOR : DARK_COLOR,
        color: isEven ? DARK_COLOR : LIGHT_COLOR,
        ...(!isOpen && {
          cursor: 'pointer',
        }),
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

          padding: `${VERTICAL_SPACE} ${HORIZONTAL_SPACE} ${VERTICAL_SPACE} ${HORIZONTAL_SPACE}`,
        }}
      >
        <AnimatedDiv
          isMounted={isOpen}
          id="tab-title-opened"
          animationDuration={ANIMATION_DURATION}
        >
          {title}
        </AnimatedDiv>
        <div style={{ flex: 1 }}>Content coming soon yo!</div>
      </div>
      <AnimatedDiv
        animationDuration={ANIMATION_DURATION}
        isMounted={!isOpen}
        id="tab-title-closed"
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
            top: VERTICAL_SPACE,
            left: `calc(${VERTICAL_SPACE} * 2)`,
            minWidth: '100vh',
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          {title}
        </div>
      </AnimatedDiv>

      {isOpen && <StickyFooter items={footerItems} />}
    </motion.div>
  );
};

export { Tab, type ITabProps };
