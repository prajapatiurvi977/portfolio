import React from 'react';
import { DARK_FONT } from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { HowMightWeStatement } from '../how-might-we-statement';
import { SectionDivider } from '../section-divider';
import { SubHeading } from '../sub-heading';
import { defineColumn } from './design-process-table';

const DefineSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
      <SectionDivider text="Define" isOnEvenTab={isOnEvenTab} />
      <HowMightWeStatement
        isOnEvenTab={isOnEvenTab}
        problem={
          <text>
            Customer wants to <ColoredText color="accent">checkout</ColoredText>{' '}
            as soon as possible from the{' '}
            <ColoredText color="accent">order process</ColoredText> to pick up
            the order.
          </text>
        }
        statement={
          <text>
            How might we <ColoredText color="accent">checkout</ColoredText>{' '}
            customers quickly from the{' '}
            <ColoredText color="accent">order process</ColoredText>?
          </text>
        }
      />
      <text style={{ fontFamily: DARK_FONT }}>
        I wanted to better understand our user&apos;s mental model to inform how
        the ordering process should be. I want the users to be able to find the
        information they are looking for where they think the information should
        be.
      </text>
      <SubHeading
        text={defineColumn.links[1].label}
        containerAttributes={{
          id: defineColumn.links[1].target,
        }}
        isOnEvenTab={isOnEvenTab}
      />
      <text style={{ fontFamily: DARK_FONT }}>
        Users search for the information they need, to address this, I
        customized menu design to see the exact prize and category. For store
        navigation, added map on screen to give better sense of directions. To
        enable users to find directions to the exact store they have selected, I
        want to add a directions CTA on the order confirmation page.
      </text>
    </>
  );
};

export { DefineSection };
