import type { FC } from 'react';
import React from 'react';
import {
  HumberCurrentCategories,
  HumberCurrentDescription,
} from '../constants';
import { CommonIntroduction } from './common-introduction';

interface IHumberCurrent {
  isEven: boolean;
}
const HumberCurrent: FC<IHumberCurrent> = ({ isEven }) => {
  return (
    <div>
      <CommonIntroduction
        description={HumberCurrentDescription}
        isEven={isEven}
        categories={[...HumberCurrentCategories]}
      />
    </div>
  );
};
export { HumberCurrent };
