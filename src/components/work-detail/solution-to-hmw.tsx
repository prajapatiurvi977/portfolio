import React from 'react';
import {
  ACCENT_COLOR,
  DARK_FONT,
  HORIZONTAL_SPACE,
  LIGHT_COLOR,
  VERTICAL_SPACE,
} from '../../constants';
import { useUIContext } from '../../state/ui-context';
import type { TabElementsConfig } from '../tab';
import { SubHeading } from './sub-heading';

interface ISolutionToHmw extends TabElementsConfig {
  label: string;
  target: string;
  descriptions: React.JSX.Element[];
}

const SolutionToHmw = ({
  label,
  target,
  descriptions: description,
  isOnEvenTab,
}: ISolutionToHmw) => {
  const { isMobileView } = useUIContext();
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
          display: 'flex',
          flexDirection: 'column',
          gap: VERTICAL_SPACE,
        }}
      >
        {description.map((descr, index) => (
          <div
            key={`description-${index}`}
            style={{
              fontFamily: DARK_FONT,
              padding: '20px 55px',
              border: `1px solid ${isOnEvenTab ? ACCENT_COLOR : LIGHT_COLOR}`,
              margin: isMobileView ? 0 : `0 calc(2 * ${HORIZONTAL_SPACE})`,
            }}
          >
            {descr}
          </div>
        ))}
      </div>
    </>
  );
};

export { SolutionToHmw };
