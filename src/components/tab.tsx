import { motion } from 'framer-motion';
import type { CSSProperties, FC, ReactElement } from 'react';
import React, { useCallback } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Resume from '../assets/Urvi_Prajapati_Resume.pdf';
import ArrowLeftCircle from '../assets/images/arrow-left-circle.svg';
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
import { useWindowDimensions } from './hooks/use-window-dimensions';
import { FOOTER_ICON_SIZE, StickyFooter } from './sticky-footer';

interface ITabProps {
  title: string;
  id: string;
  isOpen: boolean;
  index: number;
  onTabSelected: (id: string) => void;
  content: ReactElement;
  totalTabs?: number;
  includeFooter?: boolean;
  backNavButtonTarget?: string;
}

const Tab: FC<ITabProps> = ({
  id,
  title,
  onTabSelected,
  isOpen = false,
  index,
  content,
  totalTabs = 4,
  includeFooter,
  backNavButtonTarget,
}) => {
  const { isMobileView } = useUIContext();
  /**
   * 100vh is not reliable in mobile browsers.
   * The address bar and bottom bar height is not taken into vh calculations.
   */
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const isEven = index % 2 === 0;
  const fontSize = isMobileView ? `calc(${FONT_SIZE} / 2)` : FONT_SIZE;

  const showFooter = isOpen && includeFooter === true;
  const getFooterItems = useCallback(() => {
    if (!showFooter) {
      return [];
    }
    return [
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
  }, [showFooter, isEven]);
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
        flexDirection: 'column',
        letterSpacing: '5px',
        fontFamily: `${CONDENSED_FONT}, ${DARK_FONT}`,
        position: 'relative',
        backgroundColor: isEven ? LIGHT_COLOR : DARK_COLOR,
        color: isEven ? DARK_COLOR : LIGHT_COLOR,
        ...(isOpen &&
          isMobileView && {
            maxHeight: `calc(${windowHeight}px - ${totalTabs - 1} * (${HORIZONTAL_SPACE} - ${VERTICAL_SPACE}))`,
          }),
        ...(!isOpen &&
          !isMobileView && {
            cursor: 'pointer',
            minWidth: HORIZONTAL_SPACE,
          }),
        ...(!isOpen &&
          isMobileView && {
            minHeight: `calc(${HORIZONTAL_SPACE} - ${VERTICAL_SPACE})`,
            justifyContent: 'center',
          }),
        ...(isOpen &&
          !isMobileView && {
            maxWidth: `calc(${windowWidth}px - ${totalTabs - 1} * ${HORIZONTAL_SPACE})`,
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
        <OpenedTab
          title={title}
          content={content}
          titleContainerStyleProps={{
            fontSize,
            lineHeight: `calc(${fontSize} + 2px)`,
          }}
          backNavButtonTarget={backNavButtonTarget}
        />
      )}
      <ClosedTab
        isMounted={!isOpen}
        title={title}
        containerStyleProps={{
          fontSize,
          lineHeight: `calc(${fontSize} + 2px)`,
        }}
      />

      {showFooter && <StickyFooter items={getFooterItems()} />}
    </motion.div>
  );
};

interface IClosedTab {
  isMounted: boolean;
  title: string;
  containerStyleProps?: CSSProperties;
}

const ClosedTab: FC<IClosedTab> = ({
  isMounted,
  title,
  containerStyleProps,
}) => {
  const { isMobileView } = useUIContext();
  /**
   * 100vh is not reliable in mobile browsers.
   * The address bar and bottom bar height is not taken into vh calculations.
   */
  const { height: windowHeight } = useWindowDimensions();
  return (
    <AnimatedDiv
      animationDuration={ANIMATION_DURATION}
      isMounted={isMounted}
      id="tab-title-closed"
      styleProps={{
        ...containerStyleProps,
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
                minWidth: `calc(${windowHeight}px - ${isMounted ? HORIZONTAL_SPACE : 0})`,
                alignItems: 'flex-start',
              }),
          display: 'flex',
        }}
      >
        {title}
      </div>
    </AnimatedDiv>
  );
};

interface IOpenedTab {
  title: string;
  content: ReactElement;
  titleContainerStyleProps: CSSProperties;
  backNavButtonTarget?: string;
}

const OpenedTab: FC<IOpenedTab> = ({
  title,
  content,
  titleContainerStyleProps,
  backNavButtonTarget,
}) => {
  const { isMobileView } = useUIContext();
  /**
   * 100vh is not reliable in mobile browsers.
   * The address bar and bottom bar height is not taken into vh calculations.
   */
  const { height: windowHeight } = useWindowDimensions();
  const backButtonSize = '68px';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1,
        padding: `${VERTICAL_SPACE} ${HORIZONTAL_SPACE} ${VERTICAL_SPACE} ${HORIZONTAL_SPACE}`,
        maxHeight: `calc(${windowHeight}px - (2 * ${VERTICAL_SPACE}) - ${VERTICAL_SPACE} - ${FOOTER_ICON_SIZE})`,
        ...(isMobileView && {
          overflow: 'hidden',
          padding: VERTICAL_SPACE,
        }),
      }}
    >
      {Boolean(backNavButtonTarget) && (
        <div
          style={{
            position: 'absolute',
            left: `calc(${HORIZONTAL_SPACE}/2 - ${backButtonSize} / 2 )`,
          }}
        >
          <BackNavButton
            to={backNavButtonTarget}
            linkContainerProps={{
              width: backButtonSize,
              height: backButtonSize,
            }}
          />
        </div>
      )}
      <AnimatedDiv
        isMounted={true}
        id="tab-title-opened"
        animationDuration={ANIMATION_DURATION}
        styleProps={{ ...titleContainerStyleProps }}
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
  );
};

interface IBackNavButton {
  to: LinkProps['to'];
  linkContainerProps?: CSSProperties;
}

const BackNavButton: FC<IBackNavButton> = ({ to, linkContainerProps }) => {
  return (
    <Link
      to={to}
      style={{
        position: 'absolute',
        zIndex: '1',
        ...linkContainerProps,
      }}
    >
      <img src={ArrowLeftCircle} alt="Go back to Home screen." />
    </Link>
  );
};
export { Tab, type ITabProps };
