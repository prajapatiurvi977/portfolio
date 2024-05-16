import React from 'react';
import { ACCENT_COLOR, DARK_COLOR, DARK_FONT } from '../../constants';
import { useUIContext } from '../../state/ui-context';

const HiFiDesignLink = ({
  link,
}: {
  link: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];
}) => {
  const { isMobileView } = useUIContext();
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: 'none',
        backgroundColor: ACCENT_COLOR,
        padding: '8px 12px',
        color: DARK_COLOR,
        fontFamily: DARK_FONT,
        ...(isMobileView && {
          alignSelf: 'stretch',
          textAlign: 'center',
        }),
      }}
    >
      View Hi-Fi prototype
    </a>
  );
};

export { HiFiDesignLink };
