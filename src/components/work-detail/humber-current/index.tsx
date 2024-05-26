import React from 'react';
import WorkHumberCurrentIntro from '../../../assets/images/work-humber-current-intro.png';
import type { IsEvenProp } from '../../../common-types';
import {
  HumberCurrentCategories,
  HumberCurrentDescription,
} from '../../constants';
import { CommonIntroduction } from '../common-introduction';
import { SubHeading } from '../sub-heading';
import { DesignProcessTable } from './design-process-table';

const HumberCurrent = ({ isEven }: IsEvenProp) => {
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
        hifiProtoTypeLink="https://www.figma.com/proto/SC4gy6OWtjR0Vti9mTuoat/User-Design-Studio-(Portfolio)?page-id=0%3A1&type=design&node-id=1-42&viewport=-447%2C361%2C0.59&t=tFVMfIkkolopDymV-1&scaling=scale-down&starting-point-node-id=1%3A42&mode=design"
        imageSrc={WorkHumberCurrentIntro}
      />
      <SubHeading text="Design Process" isOnEvenTab={isEven} />
      <DesignProcessTable isEven={isEven} />
    </div>
  );
};
export { HumberCurrent };
