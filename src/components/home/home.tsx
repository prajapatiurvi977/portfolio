import type { FC } from 'react';
import React from 'react';
import PinkHeart from '../../assets/images/pink-heart.svg';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  GREY_COLOR,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../constants';
import { useUIContext } from '../../state/ui-context';
import { ColoredText } from '../colored-text';

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
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontFamily: LIGHT_FONT,
            fontSize: `calc(${FONT_SIZE} / 5)`,
            marginBottom: `calc(${VERTICAL_SPACE} / 1)`,
          }}
        >
          <div
            style={{
              width: `8px`,
              height: `8px`,
              background: ACCENT_COLOR,
              borderRadius: `50%`,
              animation: `pulse 2s infinite`,
            }}
          ></div>
          <div style={{ marginLeft: '0.5rem' }}>
            Open to Product Designer, UX UI Designer Roles
          </div>
        </div>
        <div
          style={{
            fontSize: `calc(${FONT_SIZE} / 3 )`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'start',
            lineHeight: `calc(${FONT_SIZE} / 1.5 + 2px)`,
            marginBottom: `calc(${VERTICAL_SPACE} / 1)`,
          }}
        >
          <div>
            From <ColoredText color="accent">DEV</ColoredText> to
            <ColoredText color="accent">
              {' '}
              <i>Designer</i>
            </ColoredText>
          </div>
        </div>
        <div
          style={{
            color: `${GREY_COLOR}`,
            fontSize: `calc(${FONT_SIZE} / 3)`,
          }}
        >
          I started as a
          <ColoredText color="dark"> front-end developer </ColoredText> building
          websites & SaaS products. Today I design
          <ColoredText color="dark">
            {' '}
            B2C experiences at IamMaturity{' '}
          </ColoredText>
          and drive
          <ColoredText color="dark"> social media strategy, </ColoredText>
          bringing a rare mix of
          <ColoredText color="dark">
            {' '}
            design thinking, user empathy, and engineering{' '}
          </ColoredText>
          fluency to every product I touch.
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
