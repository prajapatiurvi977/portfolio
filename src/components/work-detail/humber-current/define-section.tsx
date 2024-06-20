import React from 'react';
import { LIGHT_FONT } from '../../../constants';
import { ColoredText } from '../../colored-text';
import type { TabElementsConfig } from '../../tab';
import { HowMightWeStatement } from '../how-might-we-statement';
import { SectionDivider } from '../section-divider';
import { SolutionToHmw } from '../solution-to-hmw';
import { defineColumn } from './design-process-table';

const DefineSection = ({ isOnEvenTab }: TabElementsConfig) => {
  return (
    <>
      <SectionDivider text="Define" isOnEvenTab={isOnEvenTab} />
      <HowMightWeStatement
        containerId={defineColumn.links[0].target}
        isOnEvenTab={isOnEvenTab}
        problem={
          <div>
            Customer wants to <ColoredText color="accent">checkout</ColoredText>{' '}
            as soon as possible from the{' '}
            <ColoredText color="accent">order process</ColoredText> to pick up
            the order.
          </div>
        }
        statement={
          <div>
            How might we <ColoredText color="accent">checkout</ColoredText>{' '}
            customers quickly from the{' '}
            <ColoredText color="accent">order process</ColoredText>?
          </div>
        }
      />
      <div style={{ fontFamily: LIGHT_FONT }}>
        I wanted to better understand our user&apos;s mental model to inform how
        the ordering process should be. I want the users to be able to find the
        information they are looking for where they think the information should
        be.
      </div>
      <SolutionToHmw
        isOnEvenTab={isOnEvenTab}
        label={defineColumn.links[1].label}
        target={defineColumn.links[1].target}
        description={
          <div>
            Users search for the information they need, to address this, I
            customized menu design to see the exact prize and category. For
            store navigation, added map on screen to give better sense of
            directions. To enable users to find directions to the exact store
            they have selected, I want to add a directions CTA on the order
            confirmation page.
          </div>
        }
      />
    </>
  );
};

export { DefineSection };
