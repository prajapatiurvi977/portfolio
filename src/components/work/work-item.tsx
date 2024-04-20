import type { CSSProperties, FC } from 'react';
import React, { useState } from 'react';
import {
  CONDENSED_FONT,
  DARK_COLOR,
  FONT_SIZE,
  LIGHT_COLOR,
  LIGHT_FONT,
} from '../../constants';
import { ColoredText } from '../colored-text';

interface IWorkItem {
  backgroundImage: string;
  title: string;
  description: string;
  labels: string[];
  containerStyleProps?: Omit<CSSProperties, 'position' | 'backgroundImage'>;
}

const WorkItem: FC<IWorkItem> = ({
  backgroundImage,
  title,
  description,
  labels,
  containerStyleProps,
}) => {
  const [hovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        width: '400px',
        height: '400px',
        transition: 'all 0.5s',
        justifyContent: 'center',
        backgroundColor: LIGHT_COLOR,
        border: `1px solid ${DARK_COLOR}`,
        ...containerStyleProps,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        src={backgroundImage}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          maxWidth: '420px',
          transition: 'inherit',
          ...(hovered && { opacity: 0 }),
        }}
      />
      <div
        style={{
          backgroundColor: DARK_COLOR,
          color: LIGHT_COLOR,
          transition: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          flex: 1,
          opacity: 0,
          ...(hovered && { opacity: 1 }),
        }}
      >
        <ColoredText
          color="accent"
          styleProps={{
            fontSize: `calc(${FONT_SIZE} / 2)`,
            fontFamily: CONDENSED_FONT,
            flex: 1,
          }}
        >
          {title}
        </ColoredText>
        <div
          style={{
            fontFamily: LIGHT_FONT,
            fontSize: `calc(${FONT_SIZE} / 3.6)`,
            flex: 0.4,
          }}
        >
          {description}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          {labels.map((label, index) => (
            <div
              key={label}
              style={{
                border: '1px solid',
                padding: '4px 8px',
                ...(index !== 0 && { marginRight: `calc(${FONT_SIZE} / 3.6)` }),
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { WorkItem, type IWorkItem };
