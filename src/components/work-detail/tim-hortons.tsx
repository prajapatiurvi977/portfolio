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
        description={TimHortonsDescription}
        isEven={isEven}
        categories={[...TimHortonsCategories]}
      />
    </div>
  );
};
export { TimHortons };
