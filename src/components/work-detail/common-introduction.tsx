import type { FC } from 'react';
import React from 'react';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  LIGHT_COLOR,
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
        }}
      >
        {description}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {tags.map((tag, index) => (
          <span
            key={tag + index}
            style={{
              border: `1px solid ${isEven ? LIGHT_COLOR : DARK_COLOR}`,
              padding: '4px 8px',
              marginBottom: '0.5em',
              ...(index > 0 && { marginLeft: '1em' }),
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