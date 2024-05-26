import type { CSSProperties } from 'react';
import React from 'react';

const FigmaFrame = ({
  src,
  styleProps,
}: {
  src: string;
  styleProps?: CSSProperties;
}) => {
  return (
    <iframe width="100%" height="550" src={src} style={{ ...styleProps }} />
  );
};

export { FigmaFrame };
