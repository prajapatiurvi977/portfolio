import { motion } from 'framer-motion';
import type { FC, ReactElement } from 'react';
import React from 'react';
import Resume from '../assets/Urvi_Prajapati_Resume.pdf';
import DownloadResumeLight from '../assets/images/download-resume-light.svg';
import DownloadResume from '../assets/images/download-resume.svg';
import EmailLight from '../assets/images/email-light.svg';
import Email from '../assets/images/email.svg';
import GithubLight from '../assets/images/github-light.svg';
import Github from '../assets/images/github.svg';
import LinkedinLight from '../assets/images/linkedIn-light.svg';
import Linkedin from '../assets/images/linkedIn.svg';
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
import { useUIContext } from '../state/ui-context';
import { AnimatedDiv } from './animated-div';
import type { IStickyFooterProps } from './sticky-footer';
import { FOOTER_ICON_SIZE, StickyFooter } from './sticky-footer';

interface ITabProps {
  title: string;
  id: string;
  isOpen: boolean;
  index: number;
  onTabSelected: (id: string) => void;
  content: ReactElement;
  isMobileView?: boolean;
}

const Tab: FC<ITabProps> = ({
  id,
  title,
  onTabSelected,
  isOpen = false,
  index,
  content,
}) => {
  const { isMobileView } = useUIContext();
  const isEven = index % 2 === 0;
  //   const isOpenRef = useRef<boolean>(false);
  //   const contentContainerRef = useRef<HTMLDivElement>(null);
  const fontSize = isMobileView ? `calc(${FONT_SIZE} / 2)` : FONT_SIZE;

  const footerItems: IStickyFooterProps['items'] = [
    {
      iconUrl: isEven ? Email : EmailLight,
      label: 'E-Mail',
      target: 'mailto:urvi.prajapati203096@gmail.com',
    },
    {
      iconUrl: isEven ? Linkedin : LinkedinLight,
      label: 'LinkedIn',
      target: 'https://www.linkedin.com/in/urvi-prajapati/',
    },
    {
      iconUrl: isEven ? Github : GithubLight,
      label: 'Github',
      target: 'https://github.com/prajapatiurvi977',
    },
    {
      iconUrl: isEven ? DownloadResume : DownloadResumeLight,
      label: 'Download Resume',
      target: Resume,
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
      //   onLayoutAnimationComplete={() => {
      //     if (
      //       isOpen &&
      //       isMobileView &&
      //       !isOpenRef.current &&
      //       Boolean(contentContainerRef.current)
      //     ) {
      //       contentContainerRef.current?.scrollIntoView(true);
      //     }
      //     isOpenRef.current = isOpen;
      //   }}
      style={{
        display: 'flex',
        flex: isOpen ? 1 : 0,
        flexDirection: 'column',
        justifyContent: 'center',
        letterSpacing: '5px',
        fontFamily: `${CONDENSED_FONT}, ${DARK_FONT}`,
        position: 'relative',
        backgroundColor: isEven ? LIGHT_COLOR : DARK_COLOR,
        color: isEven ? DARK_COLOR : LIGHT_COLOR,
        ...(isOpen &&
          isMobileView && {
            maxHeight: `calc(100vh - 3 * (${HORIZONTAL_SPACE} - ${VERTICAL_SPACE}))`,
          }),
        ...(!isOpen &&
          !isMobileView && {
            cursor: 'pointer',
            minWidth: HORIZONTAL_SPACE,
          }),
        ...(!isOpen &&
          isMobileView && {
            minHeight: `calc(${HORIZONTAL_SPACE} - ${VERTICAL_SPACE})`,
          }),
      }}
      onClick={() => {
        if (isOpen) {
          return;
        }
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
            maxHeight: `calc(100vh - (2 * ${VERTICAL_SPACE}) - ${VERTICAL_SPACE} - ${FOOTER_ICON_SIZE})`,
            ...(isMobileView && {
              maxHeight: `calc(100vh - (${HORIZONTAL_SPACE} - ${VERTICAL_SPACE}) * 4 - ${FOOTER_ICON_SIZE} - (${VERTICAL_SPACE} / 2))`,
              overflow: 'hidden',
              padding: VERTICAL_SPACE,
            }),
          }}
          //   ref={contentContainerRef}
        >
          <AnimatedDiv
            isMounted={isOpen}
            id="tab-title-opened"
            animationDuration={ANIMATION_DURATION}
            styleProps={{
              fontSize,
              lineHeight: `calc(${fontSize} + 2px)`,
            }}
          >
            {title}
          </AnimatedDiv>
          <div
            style={{
              flex: 1,
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: `calc(${FONT_SIZE} / 3) 0 calc(${FONT_SIZE} / 1.5) 0`,
              overflowY: 'auto',
            }}
          >
            {content}
          </div>
        </div>
      )}
      <AnimatedDiv
        animationDuration={ANIMATION_DURATION}
        isMounted={!isOpen}
        id="tab-title-closed"
        styleProps={{
          fontSize,
          lineHeight: `calc(${fontSize} + 2px)`,
        }}
      >
        <div
          style={{
            ...(isMobileView
              ? {
                  alignItems: 'center',
                  paddingLeft: `calc(${VERTICAL_SPACE})`,
                }
              : {
                  transform: 'rotate(90deg)',
                  transformOrigin: '0 0',
                  position: 'absolute',
                  top: VERTICAL_SPACE,
                  left: `calc(${VERTICAL_SPACE} * 2)`,
                  minWidth: `calc(100vh - ${isOpen ? 0 : HORIZONTAL_SPACE})`,
                  alignItems: 'flex-start',
                }),
            display: 'flex',
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
