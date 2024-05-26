import React from 'react';
import {
  DARK_COLOR,
  DARK_FONT,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
} from '../../constants';
import type { TabElementsConfig } from '../tab';
import { SubHeading } from './sub-heading';

interface ISolutionToHmw extends TabElementsConfig {
  label: string;
  target: string;
  description: React.JSX.Element;
}

const SolutionToHmw = ({
  label,
  target,
  description,
  isOnEvenTab,
}: ISolutionToHmw) => {
  return (
    <>
      <SubHeading
        text={label}
        containerAttributes={{
          id: target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div
        style={{
          fontFamily: DARK_FONT,
          padding: '20px 55px',
          border: `1px solid ${isOnEvenTab ? DARK_COLOR : LIGHT_COLOR}`,
          margin: `0 calc(2 * ${HORIZONTAL_SPACE})`,
        }}
      >
        {description}
      </div>
    </>
  );
};

export { SolutionToHmw };
