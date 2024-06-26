import React from 'react';
import WorkHumberCurrentIntro from '../../../assets/images/work-humber-current-intro.png';
import type { IsEvenProp } from '../../../common-types';
import { LIGHT_FONT } from '../../../constants';
import {
  HumberCurrentCategories,
  HumberCurrentDescription,
} from '../../constants';
import { CommonIntroduction } from '../common-introduction';
import { SubHeading } from '../sub-heading';
import { DefineSection } from './define-section';
import { DeliverSection } from './deliver-section';
import { DesignProcessTable } from './design-process-table';
import { DesignSection } from './design-section';
import { DiscoverSection } from './discover-section';
import { IdeateSection } from './ideate-section';

const HumberCurrent = ({ isEven }: IsEvenProp) => {
  return (
    <div
      style={{
        width: '100%',
        fontFamily: LIGHT_FONT,
      }}
    >
      <CommonIntroduction
        subTitle={HumberCurrentDescription}
        isEven={isEven}
        categories={[...HumberCurrentCategories]}
        description="Introduced the Humber Current website to enhance student portfolio showcases, streamline skill development, and improve recruiter access to top talent."
        role="UX/UI Designer, UX Researcher, Visual Designer"
        screenSize="iPhone 13 & 14"
        duration="May 2022 - July 2022"
        tools="Figma, FigJam, Photoshop"
        hifiProtoTypeLink="https://www.figma.com/proto/SC4gy6OWtjR0Vti9mTuoat/User-Design-Studio-(Portfolio)?page-id=0%3A1&type=design&node-id=1-42&viewport=-447%2C361%2C0.59&t=tFVMfIkkolopDymV-1&scaling=scale-down&starting-point-node-id=1%3A42&mode=design"
        imageSrc={WorkHumberCurrentIntro}
      />
      <SubHeading text="Design Process" isOnEvenTab={isEven} />
      <DesignProcessTable isEven={isEven} />
      <DiscoverSection isOnEvenTab={isEven} />
      <DefineSection isOnEvenTab={isEven} />
      <IdeateSection isOnEvenTab={isEven} />
      <DesignSection isOnEvenTab={isEven} />
      <DeliverSection isOnEvenTab={isEven} />
    </div>
  );
};
export { HumberCurrent };
