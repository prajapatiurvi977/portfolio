import type { FC, HTMLAttributes } from 'react';
import React from 'react';
import {
  ACCENT_COLOR,
  CONDENSED_FONT,
  DARK_COLOR,
  FONT_SIZE,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
} from '../../constants';

interface ISectionDivider {
  text: string;
  isOnEvenTab: boolean;
  containerAttributes?: HTMLAttributes<HTMLDivElement>;
}

const SectionDivider: FC<ISectionDivider> = ({
  text,
  isOnEvenTab,
  containerAttributes,
}) => {
  return (
    <div
      style={{
        fontFamily: CONDENSED_FONT,
        fontSize: `calc(${FONT_SIZE} / 2)`,
        color: ACCENT_COLOR,
        backgroundColor: isOnEvenTab ? DARK_COLOR : LIGHT_COLOR,
        padding: '20px',
        paddingLeft: '120px',
        margin: `24px calc(-${HORIZONTAL_SPACE})`,
      }}
      {...containerAttributes}
    >
      {text}
    </div>
  );
};

export { SectionDivider };
