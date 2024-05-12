import type { FC } from 'react';
import React from 'react';
import { TorontoZooCategories, TorontoZooDescription } from '../constants';
import { CommonIntroduction } from './common-introduction';

interface ITorontoZoo {
  isEven: boolean;
}
const TorontoZoo: FC<ITorontoZoo> = ({ isEven }) => {
  return (
    <div>
      <CommonIntroduction
        description={TorontoZooDescription}
        isEven={isEven}
        categories={[...TorontoZooCategories]}
      />
    </div>
  );
};
export { TorontoZoo };
