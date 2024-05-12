import type { FC } from 'react';
import React from 'react';
import { TimHortonsCategories, TimHortonsDescription } from '../constants';
import { CommonIntroduction } from './common-introduction';

interface ITimHortons {
  isEven: boolean;
}
const TimHortons: FC<ITimHortons> = ({ isEven }) => {
  return (
    <div>
      <CommonIntroduction
        subTitle={TimHortonsDescription}
        isEven={isEven}
        categories={[...TimHortonsCategories]}
        description="Enhanced user interface with a simple grid menu, in-app navigation map, streamlined menu design, and direct cart addition feature to improve accessibility and shopping efficiency."
        role="UX/UI Designer, UX Researcher"
        screenSize="iPhone 13 & 14"
        duration="May 2023 - July 2023"
        tools="Figma, FigJam"
        hifiProtoTypeLink="www.google.com"
        imageSrc="./"
      />
    </div>
  );
};
export { TimHortons };
