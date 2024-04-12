import type { FC } from 'react';
import React from 'react';
import { ColoredText } from '../colored-text';
import {
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../constants';
import PinkHeart from '../../assets/images/pink-heart.svg';
import { useUIContext } from '../../state/ui-context';

const Home: FC = () => {
  const { isMobileView } = useUIContext();
  return (
    <div
      style={{
        fontSize: `calc(${FONT_SIZE} / 2)`,
        fontFamily: LIGHT_FONT,
        letterSpacing: 'initial',
        display: 'flex',
        flexDirection: 'inherit',
        alignItems: 'inherit',
      }}
    >
      <div
        style={{
          marginBottom: `calc(${FONT_SIZE} / 1.5)`,
          textAlign: 'left',
        }}
      >
        <div
          style={{
            marginBottom: `calc(${VERTICAL_SPACE} / 2)`,
            fontSize: `calc(${FONT_SIZE} / 2.5)`,
          }}
        >
          👋 Hi, I am Urvi !
        </div>
        <div
          style={{
            fontSize: `calc(${FONT_SIZE} / 1.5)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'start',
            lineHeight: `calc(${FONT_SIZE} / 1.5 + 2px)`,
          }}
        >
          <div>
            i <ColoredText color="accent">design</ColoredText> and
            <ColoredText color="accent"> develop</ColoredText> websites.
          </div>
          <br />
          <div>i bridge the gap between user needs & innovative solutions.</div>
        </div>
      </div>
      <div
        style={{
          fontFamily: LIGHT_FONT,
          fontSize: `calc(${FONT_SIZE} / 2.5)`,
          marginBottom: `calc(${VERTICAL_SPACE} / 2)`,
        }}
      >
        I work as:
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobileView ? 'column' : 'row',
          fontFamily: DARK_FONT,
          fontSize: '24px',
          marginBottom: `calc(${VERTICAL_SPACE} / 2)`,
        }}
      >
        {['UI/UX Designer', 'Front-End Developer'].map((title, index) => (
          <div
            style={{
              border: `1px solid ${DARK_COLOR}`,
              padding: '8px 16px',
              ...(index === 0 &&
                (isMobileView
                  ? {
                      marginBottom: `calc(${VERTICAL_SPACE} / 2)`,
                    }
                  : { marginRight: VERTICAL_SPACE })),
            }}
            key={index}
          >
            {title}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontFamily: LIGHT_FONT,
          fontSize: `calc(${FONT_SIZE} / 4)`,
          marginTop: `calc(${VERTICAL_SPACE} / 2)`,
        }}
      >
        Designed and developed with Love
        <img src={PinkHeart} alt="heart" style={{ marginLeft: '0.5rem' }} />
      </div>
    </div>
  );
};

export { Home };
