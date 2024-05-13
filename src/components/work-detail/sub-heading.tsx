import type { FC } from 'react';
import React from 'react';
import { DARK_FONT, FONT_SIZE } from '../../constants';

interface ISubHeading {
  text: string;
  isOnEvenTab: boolean;
}

const SubHeading: FC<ISubHeading> = ({ text, isOnEvenTab }) => {
  return (
    <div
      style={{
        fontFamily: DARK_FONT,
        fontSize: `calc(${FONT_SIZE} / 2)`,
        color: isOnEvenTab ? '#000000' : '#FFFFFF',
        opacity: isOnEvenTab ? '50%' : '60%',
        marginTop: '24px',
        marginBottom: '20px',
      }}
    >
      {text}
    </div>
  );
};

export { SubHeading };
