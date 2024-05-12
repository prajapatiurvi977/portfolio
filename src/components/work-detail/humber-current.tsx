import type { FC } from 'react';
import React from 'react';
import WorkHumberCurrentIntro from '../../assets/images/work-humber-current-intro.png';
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
        subTitle={HumberCurrentDescription}
        isEven={isEven}
        categories={[...HumberCurrentCategories]}
        description="Revamped the Humber Current website to enhance student portfolio showcases, streamline skill development, and improve recruiter access to top talent."
        role="UX/UI Designer, UX Researcher, Visual Designer"
        screenSize="iPhone 13 & 14"
        duration="May 2022 - July 2022"
        tools="Figma, FigJam, Photoshop"
        hifiProtoTypeLink="www.google.com"
        imageSrc={WorkHumberCurrentIntro}
      />
    </div>
  );
};
export { HumberCurrent };
