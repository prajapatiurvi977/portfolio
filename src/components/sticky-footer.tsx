import type { FC } from 'react';
import React, { useState } from 'react';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  HORIZONTAL_SPACE,
  LIGHT_FONT,
  MAX_Z_INDEX,
  VERTICAL_SPACE,
} from '../constants';
import { useUIContext } from '../state/ui-context';

interface IFooterItem {
  iconUrl: string;
  label: string;
  target: string;
  index: number;
}

interface IStickyFooterProps {
  items: Array<Omit<IFooterItem, 'index'>>;
}

const ICON_SIZE = '48px';
const FONT_SIZE = '18px';

const FooterItem: FC<IFooterItem> = ({ label, iconUrl, target, index }) => {
  const [displayTooltip, setDisplayTooltip] = useState<boolean>(false);
  return (
    <a
      key={index}
      {...(Boolean(target) && { href: target })}
      target="_blank"
      aria-label={label}
      style={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        ...(index !== 0 && {
          marginLeft: '12px',
        }),
      }}
      onMouseEnter={() => {
        setDisplayTooltip(true);
      }}
      onMouseLeave={() => {
        setDisplayTooltip(false);
      }}
      rel="noreferrer"
    >
      {displayTooltip && (
        <span
          style={{
            position: 'absolute',
            top: `calc(-${ICON_SIZE} + 15px)`,
            transform: 'translateX(-30%)',
            backgroundColor: ACCENT_COLOR,
            padding: '5px',
            borderRadius: '4px',
            width: 'max-content',
            fontSize: FONT_SIZE,
            lineHeight: `calc(${FONT_SIZE} + 2px)`,
            letterSpacing: 1,
            fontFamily: LIGHT_FONT,
            color: DARK_COLOR,
            zIndex: MAX_Z_INDEX,
          }}
        >
          {label}
        </span>
      )}

      <img src={iconUrl} alt={label} width={ICON_SIZE} height={ICON_SIZE} />
    </a>
  );
};

const StickyFooter: FC<IStickyFooterProps> = ({ items }) => {
  const { isMobileView } = useUIContext();
  return (
    <div
      style={{
        ...(isMobileView
          ? {
              marginLeft: `calc(${VERTICAL_SPACE} - 4px)`,
              marginBottom: `calc(${VERTICAL_SPACE} / 2)`,
            }
          : {
              flex: 0,
              marginLeft: `calc(${HORIZONTAL_SPACE} - 4px)`,
              marginBottom: `${VERTICAL_SPACE}`,
            }),
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {items.map(({ iconUrl, label, target }, index) => (
        <FooterItem
          iconUrl={iconUrl}
          label={label}
          target={target}
          key={label + index}
          index={index}
        />
      ))}
    </div>
  );
};

export { StickyFooter, type IStickyFooterProps };
