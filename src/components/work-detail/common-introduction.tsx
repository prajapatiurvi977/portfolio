import type { FC } from 'react';
import React from 'react';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  LIGHT_COLOR,
  LIGHT_FONT,
  VERTICAL_SPACE,
} from '../../constants';
import { useUIContext } from '../../state/ui-context';

interface ICommonIntroduction {
  subTitle: string;
  categories: string[];
  isEven: boolean;
  role: string;
  screenSize: string;
  duration: string;
  tools: string;
  imageSrc: string;
  hifiProtoTypeLink: string;
  description: string;
}

const CommonIntroduction: FC<ICommonIntroduction> = ({
  subTitle,
  description,
  categories: tags,
  isEven,
  role,
  screenSize,
  duration,
  tools,
  imageSrc,
  hifiProtoTypeLink,
}) => {
  const { isMobileView } = useUIContext();
  const borderStyle = `1px solid ${isEven ? DARK_COLOR : LIGHT_COLOR}`;
  const gap = '20px';
  return (
    <div
      style={{
        fontFamily: DARK_FONT,
      }}
    >
      <div
        style={{
          color: ACCENT_COLOR,
          fontFamily: DARK_FONT,
          fontSize: `calc(${FONT_SIZE} / 3)`,
          margin: `calc(${VERTICAL_SPACE} / 2) 0`,
        }}
      >
        {subTitle}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5em 1em',
          marginBottom: `${VERTICAL_SPACE}`,
        }}
      >
        {tags.map((tag, index) => (
          <span
            key={tag + index}
            style={{
              border: borderStyle,
              padding: '4px 8px',
              marginBottom: '0.5em',
              fontFamily: DARK_FONT,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          border: borderStyle,
          display: 'flex',
          padding: gap,
          gap,
          ...(isMobileView && {
            flexDirection: 'column-reverse',
          }),
        }}
      >
        <div
          style={{
            fontSize: gap,
            display: 'flex',
            flexDirection: 'column',
            gap,
            alignItems: 'flex-start',
            flex: 0.8,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap }}>
            <div style={{ fontSize: `calc(${FONT_SIZE} / 3)` }}>
              {description}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap,
              }}
            >
              {[
                {
                  label: 'My Role',
                  value: role,
                },
                {
                  label: 'Screen Size',
                  value: screenSize,
                },
                {
                  label: 'Duration',
                  value: duration,
                },
                {
                  label: 'Tools',
                  value: tools,
                },
              ].map(({ label, value }) => (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                  key={label}
                >
                  <div style={{ marginRight: '0.25em' }}>{label}:</div>
                  <div style={{ fontFamily: LIGHT_FONT }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <a
            href={hifiProtoTypeLink}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              backgroundColor: ACCENT_COLOR,
              padding: '8px 12px',
              color: DARK_COLOR,
              ...(isMobileView && {
                alignSelf: 'stretch',
                textAlign: 'center',
              }),
            }}
          >
            View Hi-Fi prototype
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flex: 0.2,
          }}
        >
          <img
            src={imageSrc}
            aria-hidden
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};
export { CommonIntroduction };
