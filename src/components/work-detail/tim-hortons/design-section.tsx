import React from 'react';
import HiFi1 from '../../../assets/images/timhortons/hi-fi-1.png';
import HiFi2 from '../../../assets/images/timhortons/hi-fi-2.png';
import HiFi3 from '../../../assets/images/timhortons/hi-fi-3.png';
import HiFi4 from '../../../assets/images/timhortons/hi-fi-4.png';
import HiFi5 from '../../../assets/images/timhortons/hi-fi-5.png';
import HiFi6 from '../../../assets/images/timhortons/hi-fi-6.png';
import HiFi7 from '../../../assets/images/timhortons/hi-fi-7.png';
import HiFi8 from '../../../assets/images/timhortons/hi-fi-8.png';
import { LIGHT_FONT } from '../../../constants';
import type { TabElementsConfig } from '../../tab';
import { Carousel } from '../carousel';
import { HiFiDesignLink } from '../hifi-design-link';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { designColumn } from './design-process-table';

const DesignSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <div
      style={{
        fontFamily: LIGHT_FONT,
      }}
    >
      <SectionDivider text="Design" isOnEvenTab={isOnEvenTab} />
      <SubHeading
        text={designColumn.links[0].label}
        containerAttributes={{
          id: designColumn.links[0].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <div>
        According to Usability test results, I changed major design flows.
      </div>
      <Carousel
        items={[HiFi1, HiFi2, HiFi3, HiFi4, HiFi5, HiFi6, HiFi7, HiFi8].map(
          (imageSrc, index) => (
            <img
              src={imageSrc}
              alt={`Hi Fi design ${index}`}
              key={index}
              width="480px"
            />
          ),
        )}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <HiFiDesignLink link="https://www.figma.com/proto/tG2riE7WCJJim6dhOaZVut/Tim-Hortons--Portfolio-1?page-id=0%3A1&type=design&node-id=11-66&viewport=676%2C273%2C0.15&t=VlRP24AAt1eo8f1L-1&scaling=scale-down&mode=design" />
      </div>
    </div>
  );
};

export { DesignSection };
