import type { CSSProperties } from 'react';
import React from 'react';
import DunkinLogo from '../../../assets/images/timhortons/dunkin-logo.svg';
import SadSmileyLogo from '../../../assets/images/timhortons/sad-smiley.svg';
import SmileyLogo from '../../../assets/images/timhortons/smiley.svg';
import StarbucksLogo from '../../../assets/images/timhortons/starbucks-logo.svg';
import TimHortonsLogo from '../../../assets/images/timhortons/timhortons-logo.svg';
import { DARK_FONT, FONT_SIZE, LIGHT_FONT } from '../../../constants';

const ResearchProcessTable = ({
  tableStyleProps,
}: {
  tableStyleProps?: CSSProperties;
}) => {
  const Smiley = <img src={SmileyLogo} alt="Smiley" />;
  const SadSmiley = <img src={SadSmileyLogo} alt="Sad Smiley" />;
  return (
    <table
      border={1}
      cellPadding="20px"
      style={{
        borderCollapse: 'collapse',
        fontFamily: LIGHT_FONT,
        textAlign: 'center',
        ...tableStyleProps,
      }}
    >
      <thead>
        <tr
          style={{
            fontFamily: DARK_FONT,
            fontSize: `calc(${FONT_SIZE} / 2)`,
          }}
        >
          <th
            style={{
              textAlign: 'left',
            }}
          >
            Feature
          </th>
          <th>
            <img src={TimHortonsLogo} alt="TimHortons Logo" />
          </th>
          <th>
            <img src={StarbucksLogo} alt="Starbucks Logo" />
          </th>
          <th>
            <img src={DunkinLogo} alt="Dunkin Donuts Logo" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              textAlign: 'left',
            }}
          >
            Customization of items with clear names
          </td>
          <td>{SadSmiley}</td>
          <td>{Smiley}</td>
          <td>{Smiley}</td>
        </tr>
        <tr>
          <td
            style={{
              textAlign: 'left',
            }}
          >
            User Interface & Navigation
          </td>
          <td>{SadSmiley}</td>
          <td>{SadSmiley}</td>
          <td>{Smiley}</td>
        </tr>
        <tr>
          <td
            style={{
              textAlign: 'left',
            }}
          >
            Order process & Post Checkout process
          </td>
          <td>{SadSmiley}</td>
          <td>{Smiley}</td>
          <td>{SadSmiley}</td>
        </tr>
        <tr>
          <td
            style={{
              textAlign: 'left',
            }}
          >
            Store locator feature
          </td>
          <td>{SadSmiley}</td>
          <td>{Smiley}</td>
          <td>{Smiley}</td>
        </tr>
      </tbody>
    </table>
  );
};

export { ResearchProcessTable };
