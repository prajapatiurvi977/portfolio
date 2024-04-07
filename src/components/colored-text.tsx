import type { CSSProperties, FC, PropsWithChildren } from 'react';
import React from 'react';

import {
  ACCENT_COLOR,
  DARK_COLOR,
  DARK_FONT,
  LIGHT_COLOR,
} from '../../constants';

interface IColoredText {
  color: 'light' | 'dark' | 'accent';
}

const ColorMap = new Map<IColoredText['color'], CSSProperties['color']>([
  ['accent', ACCENT_COLOR],
  ['light', LIGHT_COLOR],
  ['dark', DARK_COLOR],
]);

const ColoredText: FC<PropsWithChildren<IColoredText>> = ({
  color,
  children,
}) => {
  return (
    <span style={{ fontFamily: DARK_FONT, color: ColorMap.get(color) }}>
      {children}
    </span>
  );
};

export { ColoredText };
