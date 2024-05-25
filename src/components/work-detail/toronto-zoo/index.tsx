import type { FC } from 'react';
import React from 'react';
import WorkTorontoZooIntro from '../../../assets/images/work-toronto-zoo-intro.png';
import { LIGHT_FONT } from '../../../constants';
import { TorontoZooCategories, TorontoZooDescription } from '../../constants';
import { CommonIntroduction } from '../common-introduction';
import { SubHeading } from '../sub-heading';

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
        hifiProtoTypeLink="https://www.figma.com/proto/8PBbMggHeXXXcKvLDIHF0N/5111---Group-7-(Portfolio)?page-id=0%3A1&type=design&node-id=808-8250&viewport=468%2C-534%2C0.11&t=3V6OxqzS5hQKfNBB-1&scaling=scale-down&starting-point-node-id=808%3A8250&show-proto-sidebar=1&mode=design"
        imageSrc={WorkTorontoZooIntro}
      />
      <SubHeading text="The Goal" isOnEvenTab={isEven} />
      <div
        style={{
          fontFamily: LIGHT_FONT,
        }}
      >
        During the problem sessions of Toronto Zoo website, we discovered some
        difficulty and uncertainty about ticket booking on Toronto zoo website.
        The main goal of this project is to revamp the Toronto Zoo website to
        cater to users&apos; need to purchase zoo tickets online, while also
        fulfilling the Zoo&apos;s business objectives of generating revenue via
        ticket sales, increasing volunteers and generating online donations.
      </div>
    </div>
  );
};
export { TorontoZoo };
