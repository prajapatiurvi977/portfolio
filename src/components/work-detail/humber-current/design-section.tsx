import React from 'react';
import HiFi1 from '../../../assets/images/humber-current/hi-fi-1.png';
import HiFi2 from '../../../assets/images/humber-current/hi-fi-2.png';
import HiFi3 from '../../../assets/images/humber-current/hi-fi-3.png';
import HiFi4 from '../../../assets/images/humber-current/hi-fi-4.png';
import HiFi5 from '../../../assets/images/humber-current/hi-fi-5.png';
import HiFi6 from '../../../assets/images/humber-current/hi-fi-6.png';
import HiFi7 from '../../../assets/images/humber-current/hi-fi-7.png';
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
        identifier="Humber-Current-Designs"
        items={[HiFi1, HiFi2, HiFi3, HiFi4, HiFi5, HiFi6, HiFi7].map(
          (imageSrc, index) => (
            <img
              src={imageSrc}
              alt={`Hi Fi design ${index}`}
              key={index}
              width="212px"
            />
          ),
        )}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <HiFiDesignLink link="https://www.figma.com/proto/SC4gy6OWtjR0Vti9mTuoat/User-Design-Studio-(Portfolio)?page-id=0%3A1&type=design&node-id=1-42&viewport=-447%2C361%2C0.59&t=tFVMfIkkolopDymV-1&scaling=scale-down&starting-point-node-id=1%3A42&mode=design" />
      </div>
    </div>
  );
};

export { DesignSection };
