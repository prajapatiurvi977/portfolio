import type { AnchorHTMLAttributes, FC } from 'react';
import React, { useState } from 'react';
import {
  ACCENT_COLOR,
  DARK_COLOR,
  HORIZONTAL_SPACE,
  MAX_Z_INDEX,
  VERTICAL_SPACE,
} from '../constants';

interface IFooterItem {
  iconUrl: string;
  label: string;
  target: string;
  anchorProps?: Omit<AnchorHTMLAttributes<any>, 'href'>;
  id?: string;
}

interface IStickyFooterProps {
  items: IFooterItem[];
}

const ICON_SIZE = '48px';
const FONT_SIZE = '18px';

const FooterItem: FC<IFooterItem> = ({ label, iconUrl, target, id }) => {
  const [displayTooltip, setDisplayTooltip] = useState<boolean>(false);
  return (
    <a
      key={id}
      href={target}
      aria-label={label}
      style={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
      }}
      onMouseEnter={() => {
        setDisplayTooltip(true);
      }}
      onMouseLeave={() => {
        setDisplayTooltip(false);
      }}
    >
      {displayTooltip && (
        <span
          style={{
            position: 'absolute',
            top: `calc(-${ICON_SIZE} + 15px)`,
            // left: '0',
            transform: 'translateX(-30%)',
            backgroundColor: ACCENT_COLOR,
            padding: '5px',
            borderRadius: '4px',
            width: 'max-content',
            fontSize: FONT_SIZE,
            lineHeight: `calc(${FONT_SIZE} + 2px)`,
            letterSpacing: 1,
            fontFamily: 'NoiGrotesk-Light',
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
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        bottom: VERTICAL_SPACE,
        left: HORIZONTAL_SPACE,
      }}
    >
      {items.map(({ iconUrl, label, target }, index) => (
        <FooterItem
          iconUrl={iconUrl}
          label={label}
          target={target}
          key={label + index}
          id={index}
        />
      ))}
    </div>
  );
};

export { StickyFooter, type IStickyFooterProps };
