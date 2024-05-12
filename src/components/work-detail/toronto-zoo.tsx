import type { FC } from 'react';
import React from 'react';
import WorkTorontoZooIntro from '../../assets/images/work-toronto-zoo-intro.png';
import { TorontoZooCategories, TorontoZooDescription } from '../constants';
import { CommonIntroduction } from './common-introduction';

interface ITorontoZoo {
  isEven: boolean;
}
const TorontoZoo: FC<ITorontoZoo> = ({ isEven }) => {
  return (
    <div>
      <CommonIntroduction
        subTitle={TorontoZooDescription}
        isEven={isEven}
        categories={[...TorontoZooCategories]}
        description="Redesigned the Toronto Zoo website's ticket purchasing flow by implementing an intuitive step-by-step process, optimizing the ticket selection interface, and simplifying transaction steps to enhance user experience and streamline the path to purchase."
        role="UX/UI Designer, UX Researcher"
        screenSize="Desktop, iPhone 13 & 14"
        duration="Jan 2023 - April 2023"
        tools="Figma, FigJam, Canva"
        hifiProtoTypeLink="www.google.com"
        imageSrc={WorkTorontoZooIntro}
      />
    </div>
  );
};
export { TorontoZoo };
