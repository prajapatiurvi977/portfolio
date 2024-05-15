import React from 'react';
import LocationMarkerImg from '../../assets/images/location-marker.svg';
import PersonaImg from '../../assets/images/persona.png';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  LIGHT_COLOR,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../constants';
import { ColoredText } from '../colored-text';

interface IPersona {
  name: string;
  age: number;
  location: string;
  position: string;
  goals: string[];
  needs: string[];
  painPoints: string[];
  isOnEvenTab: boolean;
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
  const divider = `1px solid ${isOnEvenTab ? DARK_COLOR : LIGHT_COLOR}`;
  const leftColFlex = 0.25;
  const rightColFlex = 0.75;
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
        padding: '20px',
        fontFamily: LIGHT_FONT,
        margin: `${VERTICAL_SPACE} 0`,
        color: isOnEvenTab ? DARK_COLOR : LIGHT_COLOR,
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
          <img src={PersonaImg} alt="Persona" aria-hidden />
        </div>
        <div
          style={{ flex: rightColFlex, display: 'flex', flexDirection: 'row' }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <text
              style={{
                fontFamily: DARK_FONT,
                fontSize: `calc(${FONT_SIZE} / 2)`,
              }}
            >
              {name}
            </text>
            <text style={{ fontSize: `calc(${FONT_SIZE} / 2.5)` }}>
              <ColoredText color="dark">Age:</ColoredText> {age}
            </text>
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
              <img src={LocationMarkerImg} alt="Location marker" aria-hidden />
              <text style={{ fontSize: `calc(${FONT_SIZE} / 2.5)` }}>
                {location}
              </text>
            </div>
            <text style={{ fontSize: `calc(${FONT_SIZE} / 3)` }}>
              {position}
            </text>
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
              fontSize: `calc(${FONT_SIZE} / 3)`,
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
          }}
        >
          <div
            style={{
              fontFamily: DARK_FONT,
              fontSize: `calc(${FONT_SIZE} / 3)`,
              flex: leftColFlex,
            }}
          >
            Opportunity
          </div>
          <div style={{ flex: rightColFlex }}>
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
      {Boolean(userQuote) && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <text>&quot;{userQuote}&quot;</text>
          <br />
          <text>-User Quote</text>
        </div>
      )}
    </div>
  );
};

export { Persona };
