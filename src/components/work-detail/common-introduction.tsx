import type { FC } from 'react';
import React from 'react';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  LIGHT_COLOR,
  VERTICAL_SPACE,
} from '../../constants';

interface ICommonIntroduction {
  description: string;
  categories: string[];
  isEven: boolean;
}

const CommonIntroduction: FC<ICommonIntroduction> = ({
  description,
  categories: tags,
  isEven,
}) => {
  return (
    <div>
      <div
        style={{
          color: ACCENT_COLOR,
          fontFamily: DARK_FONT,
          fontSize: `calc(${FONT_SIZE} / 3)`,
          margin: `calc(${VERTICAL_SPACE} / 2) 0`,
        }}
      >
        {description}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5em 1em',
        }}
      >
        {tags.map((tag, index) => (
          <span
            key={tag + index}
            style={{
              border: `1px solid ${isEven ? DARK_COLOR : LIGHT_COLOR}`,
              padding: '4px 8px',
              marginBottom: '0.5em',
              fontFamily: DARK_FONT,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export { CommonIntroduction };
