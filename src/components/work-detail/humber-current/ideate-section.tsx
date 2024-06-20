import React from 'react';
import { LIGHT_FONT, VERTICAL_SPACE } from '../../../constants';
import type { TabElementsConfig } from '../../tab';
import { Carousel } from '../carousel';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { ideateColumn } from './design-process-table';

import Moodboard from '../../../assets/images/humber-current/moodboard.png';
import Sketch_1 from '../../../assets/images/humber-current/sketch-1.png';
import Sketch_2 from '../../../assets/images/humber-current/sketch-2.png';
import Sketch_3 from '../../../assets/images/humber-current/sketch-3.png';
import Sketch_4 from '../../../assets/images/humber-current/sketch-4.png';
import Sketch_5 from '../../../assets/images/humber-current/sketch-5.png';
import VisualDesign from '../../../assets/images/humber-current/visual-design.png';

const IdeateSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <div style={{ fontFamily: LIGHT_FONT }}>
      <SectionDivider text="Ideate" isOnEvenTab={isOnEvenTab} />
      <SubHeading
        text={ideateColumn.links[0].label}
        containerAttributes={{
          id: ideateColumn.links[0].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div>
        I brainstormed the solution and started my ideas drawing on plain cards
        first.
      </div>
      <Carousel
        items={[Sketch_1, Sketch_2, Sketch_3, Sketch_4, Sketch_5].map(
          (imageSrc, index) => (
            <img
              src={imageSrc}
              alt={`Sketch ${index}`}
              key={index}
              height="392px"
            />
          ),
        )}
      />

      <SubHeading
        text={ideateColumn.links[1].label}
        containerAttributes={{
          id: ideateColumn.links[1].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div>
        I brainstormed the moodboard to fulfill student&apos;s curiosity to
        watch other&apos;s portfolios.
      </div>
      <div
        style={{
          margin: VERTICAL_SPACE,
        }}
      >
        <img src={Moodboard} alt="Humber Current Moodboard" height="647px" />
      </div>

      <SubHeading
        text={ideateColumn.links[2].label}
        containerAttributes={{
          id: ideateColumn.links[2].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div>
        First, I tried to make cool Logo design. After several attempts I
        finalized the design which suits to Humber website.
      </div>
      <div
        style={{
          margin: VERTICAL_SPACE,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={VisualDesign}
          alt="Humber Current Logo Design"
          height="323px"
        />
      </div>
    </div>
  );
};

export { IdeateSection };
