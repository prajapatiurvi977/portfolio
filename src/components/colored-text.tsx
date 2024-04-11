import type { CSSProperties, FC, PropsWithChildren } from 'react';
import React from 'react';

import { ACCENT_COLOR, DARK_COLOR, DARK_FONT, LIGHT_COLOR } from '../constants';

interface IColoredText {
  color: 'light' | 'dark' | 'accent';
  styleProps?: CSSProperties;
}

const ColorMap = new Map<IColoredText['color'], CSSProperties['color']>([
  ['accent', ACCENT_COLOR],
  ['light', LIGHT_COLOR],
  ['dark', DARK_COLOR],
]);

const ColoredText: FC<PropsWithChildren<IColoredText>> = ({
  color,
  styleProps,
  children,
}) => {
  return (
    <span
      style={{
        fontFamily: DARK_FONT,
        color: ColorMap.get(color),
        ...styleProps,
      }}
    >
      {children}
    </span>
  );
};

export { ColoredText };
