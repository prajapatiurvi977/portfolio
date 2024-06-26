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
import type { TabElementsConfig } from '../tab';

interface ISectionDivider extends TabElementsConfig {
  text: string;
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
        paddingLeft: HORIZONTAL_SPACE,
        margin: `64px calc(-${HORIZONTAL_SPACE}) 0px calc(-${HORIZONTAL_SPACE})`,
        letterSpacing: '2px',
      }}
      {...containerAttributes}
    >
      {text}
    </div>
  );
};

export { SectionDivider };
