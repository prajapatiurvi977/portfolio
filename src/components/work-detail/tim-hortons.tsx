import type { FC } from 'react';
import React from 'react';
import WorkTimHortonsIntro from '../../assets/images/work-tim-hortons-intro.png';
import { TimHortonsCategories, TimHortonsDescription } from '../constants';
import { CommonIntroduction } from './common-introduction';
import { SubHeading } from './sub-heading';

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
        hifiProtoTypeLink="https://www.figma.com/proto/tG2riE7WCJJim6dhOaZVut/Tim-Hortons--Portfolio-1?page-id=0%3A1&type=design&node-id=11-66&viewport=676%2C273%2C0.15&t=VlRP24AAt1eo8f1L-1&scaling=scale-down&mode=design"
        imageSrc={WorkTimHortonsIntro}
      />
      <SubHeading text="The Problem I knew" isOnEvenTab={isEven} />
    </div>
  );
};
export { TimHortons };
