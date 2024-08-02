import React from 'react';
import LocationMarkerImgLight from '../../assets/images/location-marker-light.svg';
import LocationMarkerImg from '../../assets/images/location-marker.svg';
import PersonaImgLight from '../../assets/images/persona-light.png';
import PersonaImg from '../../assets/images/persona.png';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../constants';
import { useUIContext } from '../../state/ui-context';
import { ColoredText } from '../colored-text';
import type { TabElementsConfig } from '../tab';

interface IPersona extends TabElementsConfig {
  name: string;
  age: number;
  location: string;
  position: string;
  goals: string[];
  needs: string[];
  painPoints: string[];
  opportunity?: string[];
  userQuote?: string;
}

const Persona = ({
  name,
  age,
  location,
  position,
  goals,
  needs,
  painPoints,
  isOnEvenTab,
  opportunity,
  userQuote,
}: IPersona) => {
  const { isMobileView } = useUIContext();
  const divider = `1px solid ${isOnEvenTab ? DARK_COLOR : LIGHT_COLOR}`;
  const leftColFlex = 0.25;
  const rightColFlex = 0.75;
  const leftColFontSize = `calc(${FONT_SIZE} / 2.5)`;
  const rightColFontSize = `calc(${FONT_SIZE} / 4)`;
  const data: Array<{
    leftColumn: string;
    rightColumn: string[];
    shouldBoldRightColumn?: boolean;
  }> = [
    {
      leftColumn: 'Goal',
      rightColumn: goals,
    },
    {
      leftColumn: 'Needs',
      rightColumn: needs,
    },
    {
      leftColumn: 'Pain points',
      rightColumn: painPoints,
      shouldBoldRightColumn: true,
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: `4px solid ${ACCENT_COLOR}`,
        fontFamily: LIGHT_FONT,
        margin: `calc(${VERTICAL_SPACE} *  1.5) 0`,
        color: isOnEvenTab ? DARK_COLOR : LIGHT_COLOR,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: '20px',
          }}
        >
          <div style={{ flex: leftColFlex }}>
            <img
              src={isOnEvenTab ? PersonaImg : PersonaImgLight}
              width="60%"
              alt="Persona"
              aria-hidden
            />
          </div>
          <div
            style={{
              flex: rightColFlex,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <div
                style={{
                  fontFamily: DARK_FONT,
                  fontSize: `calc(${FONT_SIZE} / 2)`,
                }}
              >
                {name}
              </div>
              <div style={{ fontSize: `calc(${FONT_SIZE} / 2.5)` }}>
                <ColoredText
                  color="dark"
                  styleProps={{
                    ...(!isOnEvenTab && {
                      color: LIGHT_COLOR,
                    }),
                  }}
                >
                  Age:
                </ColoredText>{' '}
                {age}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 'auto',
                gap: '20px',
                alignItems: 'flex-end',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                }}
              >
                <img
                  src={isOnEvenTab ? LocationMarkerImg : LocationMarkerImgLight}
                  alt="Location marker"
                  aria-hidden
                />
                <div style={{ fontSize: `calc(${FONT_SIZE} / 2.5)` }}>
                  {location}
                </div>
              </div>
              <div style={{ fontSize: `calc(${FONT_SIZE} / 3)` }}>
                {position}
              </div>
            </div>
          </div>
        </div>
        {data.map(({ leftColumn, rightColumn, shouldBoldRightColumn }) => (
          <div
            key={leftColumn}
            style={{
              borderTop: divider,
              display: 'flex',
              flexDirection: 'row',
              padding: '20px',
            }}
          >
            <div
              style={{
                fontFamily: DARK_FONT,
                fontSize: leftColFontSize,
                flex: leftColFlex,
              }}
            >
              {leftColumn}
            </div>
            <div style={{ flex: rightColFlex }}>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: rightColFontSize,
                  ...(Boolean(shouldBoldRightColumn) && {
                    fontFamily: DARK_FONT,
                  }),
                }}
              >
                {rightColumn.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {opportunity !== undefined && opportunity.length > 0 && (
          <div
            style={{
              borderTop: divider,
              display: 'flex',
              flexDirection: 'row',
              color: ACCENT_COLOR,
              padding: '20px',
            }}
          >
            <div
              style={{
                fontFamily: DARK_FONT,
                fontSize: leftColFontSize,
                flex: leftColFlex,
              }}
            >
              Opportunity
            </div>
            <div style={{ flex: rightColFlex, fontSize: rightColFontSize }}>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontFamily: DARK_FONT,
                }}
              >
                {opportunity.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      {Boolean(userQuote) && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '40px',
            borderTop: `4px solid ${ACCENT_COLOR}`,
            ...(isMobileView
              ? { padding: VERTICAL_SPACE }
              : {
                  padding: `${VERTICAL_SPACE} calc(${HORIZONTAL_SPACE} * 2)`,
                }),
          }}
        >
          <div>&quot;{userQuote}&quot;</div>
          <br />
          <div>-User Quote</div>
        </div>
      )}
    </div>
  );
};

export { Persona };
