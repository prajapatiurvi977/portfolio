import type { HTMLAttributes } from 'react';
import React from 'react';
import { DARK_FONT, FONT_SIZE } from '../../constants';
import type { TabElementsConfig } from '../../types';

interface ISubHeading extends TabElementsConfig {
  text: string;
  containerAttributes?: HTMLAttributes<HTMLDivElement>;
}

const SubHeading = ({
  text,
  isOnEvenTab,
  containerAttributes,
}: ISubHeading) => {
  return (
    <div
      style={{
        fontFamily: DARK_FONT,
        fontSize: `calc(${FONT_SIZE} / 1.5)`,
        color: isOnEvenTab ? '#000000' : '#FFFFFF',
        opacity: isOnEvenTab ? '50%' : '60%',
        marginTop: '24px',
        marginBottom: '20px',
      }}
      {...containerAttributes}
    >
      {text}
    </div>
  );
};

export { SubHeading };
