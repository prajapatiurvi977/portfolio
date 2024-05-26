import React from 'react';
import WorkTimHortonsIntro from '../../../assets/images/work-tim-hortons-intro.png';
import type { IsEvenProp } from '../../../common-types';
import { LIGHT_FONT } from '../../../constants';
import { ColoredText } from '../../colored-text';
import { TimHortonsCategories, TimHortonsDescription } from '../../constants';
import { CommonIntroduction } from '../common-introduction';
import { SubHeading } from '../sub-heading';
import { DefineSection } from './define-section';
import { DeliverSection } from './deliver-section';
import { DesignProcessTable } from './design-process-table';
import { DesignSection } from './design-section';
import { DiscoverSection } from './discover-section';
import { IdeateSection } from './ideate-section';

const TimHortons = ({ isEven }: IsEvenProp) => {
  return (
    <div style={{ width: '100%' }}>
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
      <div
        style={{
          fontFamily: LIGHT_FONT,
        }}
      >
        Tim Hortons&apos; millions of customers still prefer to{' '}
        <ColoredText color="dark">order in person</ColoredText>. When I asked
        customers about it, many said that the ordering process was{' '}
        <ColoredText color="accent">too complicated</ColoredText> and the menu
        was <ColoredText color="accent">hard to understand</ColoredText>.
      </div>
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

export { TimHortons };
