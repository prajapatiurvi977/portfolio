import React from 'react';
import {
  DARK_COLOR,
  DARK_FONT,
  FONT_SIZE,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
} from '../../constants';
import { useUIContext } from '../../state/ui-context';
import type { TabElementsConfig } from '../tab';
import { SubHeading } from './sub-heading';

interface IHowMightWeStatement extends TabElementsConfig {
  containerId: string;
  problem: React.JSX.Element;
  statement: React.JSX.Element;
}

const HowMightWeStatement = ({
  containerId,
  problem,
  statement,
  isOnEvenTab,
}: IHowMightWeStatement) => {
  const { isMobileView } = useUIContext();
  return (
    <>
      <SubHeading
        text="How might we statement"
        containerAttributes={{
          id: containerId,
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
          margin: isMobileView ? '32px' : `32px calc(2 * ${HORIZONTAL_SPACE})`,
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
