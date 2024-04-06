import type { FC, ReactElement } from 'react';
import React from 'react';
import { AnimatedDiv } from './animated-div';
import { motion } from 'framer-motion';
import type { IStickyFooterProps } from './sticky-footer';
import { StickyFooter } from './sticky-footer';
import {
  ANIMATION_DURATION,
  CONDENSED_FONT,
  DARK_COLOR,
  DARK_FONT,
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
  content: ReactElement;
}

const Tab: FC<ITabProps> = ({
  id,
  title,
  onTabSelected,
  isOpen = false,
  index,
  content,
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
      target: 'src/assets/Urvi_Prajapati_Resume.pdf',
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

        letterSpacing: '5px',
        fontFamily: `${CONDENSED_FONT}, ${DARK_FONT}`,
        position: 'relative',
        backgroundColor: isEven ? LIGHT_COLOR : DARK_COLOR,
        color: isEven ? DARK_COLOR : LIGHT_COLOR,
        ...(!isOpen && {
          cursor: 'pointer',
          minWidth: HORIZONTAL_SPACE,
        }),
      }}
      onClick={() => {
        onTabSelected(id);
      }}
    >
      {isOpen && (
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
            styleProps={{
              fontSize: FONT_SIZE,
              lineHeight: `calc(${FONT_SIZE} + 2px)`,
            }}
          >
            {title}
          </AnimatedDiv>
          <div style={{ flex: 1 }}>{content}</div>
        </div>
      )}
      <AnimatedDiv
        animationDuration={ANIMATION_DURATION}
        isMounted={!isOpen}
        id="tab-title-closed"
        styleProps={{
          fontSize: FONT_SIZE,
          lineHeight: `calc(${FONT_SIZE} + 2px)`,
        }}
      >
        <div
          style={{
            transform: 'rotate(90deg)',
            transformOrigin: '0 0',
            position: 'absolute',
            top: VERTICAL_SPACE,
            left: `calc(${VERTICAL_SPACE} * 2)`,
            minWidth: `calc(100vh - ${isOpen ? 0 : HORIZONTAL_SPACE})`,
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
