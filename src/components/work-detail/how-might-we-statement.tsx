import React from 'react';
import {
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
} from '../../constants';
import type { TabElementsConfig } from '../tab';
import { SubHeading } from './sub-heading';
import { defineColumn } from './tim-hortons/design-process-table';

interface IHowMightWeStatement extends TabElementsConfig {
  problem: React.JSX.Element;
  statement: React.JSX.Element;
}

const HowMightWeStatement = ({
  problem,
  statement,
  isOnEvenTab,
}: IHowMightWeStatement) => {
  return (
    <>
      <SubHeading
        text="How might we statement"
        containerAttributes={{
          id: defineColumn.links[0].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: DARK_FONT,
          fontSize: `calc(${FONT_SIZE} / 2.5)`,
          border: `1px solid ${isOnEvenTab ? DARK_COLOR : LIGHT_COLOR}`,
          margin: `32px calc(2 * ${HORIZONTAL_SPACE})`,
        }}
      >
        <div
          style={{
            color: isOnEvenTab ? DARK_COLOR : LIGHT_COLOR,
            backgroundColor: isOnEvenTab ? LIGHT_COLOR : DARK_COLOR,
            padding: '20px 55px',
          }}
        >
          {problem}
        </div>
        <div
          style={{
            color: isOnEvenTab ? LIGHT_COLOR : DARK_COLOR,
            backgroundColor: isOnEvenTab ? DARK_COLOR : LIGHT_COLOR,
            padding: '20px 55px',
          }}
        >
          {statement}
        </div>
      </div>
    </>
  );
};

export { HowMightWeStatement };
