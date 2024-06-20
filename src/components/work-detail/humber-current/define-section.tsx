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
            A <ColoredText color="accent">Networking hub</ColoredText> that
            offers <ColoredText color="accent">digital channels</ColoredText>{' '}
            and resources for communication, story sharing , and collaboration
            to let <ColoredText color="accent">connect with alumni</ColoredText>{' '}
            and engage with each other.
          </div>
        }
        statement={
          <div>
            How might we create a networking hub that provides digital channels
            and resources for communication, story-sharing, and collaboration to
            facilitate connections and engagement among alumni?
          </div>
        }
      />
      <div style={{ fontFamily: LIGHT_FONT }}>
        Based on user journey mapping, the user flow highlights the primary task
        streams that the high-quality prototype would focus on: As there are
        many courses, providing a search option for obtaining course-related
        information is a necessity.
      </div>
      <SolutionToHmw
        isOnEvenTab={isOnEvenTab}
        label={defineColumn.links[1].label}
        target={defineColumn.links[1].target}
        descriptions={[
          <div key="hc-description-1" style={{ fontFamily: LIGHT_FONT }}>
            Integrating a <ColoredText color="dark">new Logo</ColoredText> which
            attracts students to encourage meeting other students.
          </div>,
          <div key="hc-description-2" style={{ fontFamily: LIGHT_FONT }}>
            Revamp the design of Humber Current website to{' '}
            <ColoredText color="dark">
              show related information only
            </ColoredText>{' '}
            related to student work.
          </div>,
        ]}
      />
    </>
  );
};

export { DefineSection };
