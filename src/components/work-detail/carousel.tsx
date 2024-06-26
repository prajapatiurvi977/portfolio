import React, { useState } from 'react';
import ChevronRight from '../../assets/images/chevron-right.svg';
import { VERTICAL_SPACE } from '../../constants';
const Carousel = ({
  items,
  identifier = 'Carousel',
}: {
  items: React.JSX.Element[];
  identifier: string;
}) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  return (
    <div
      style={{
        position: 'relative',
        flex: 1,
        margin: `${VERTICAL_SPACE} 0`,
      }}
    >
      {focusedIndex > 0 && (
        <Arrow
          targetIndex={focusedIndex - 1}
          orientation="left"
          onClick={() => {
            setFocusedIndex((prev) => prev - 1);
          }}
          identifier={identifier}
        />
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          gap: '30px',
          overflowX: 'scroll',
          scrollSnapType: 'x',
          scrollBehavior: 'smooth',
        }}
      >
        {items.map((item, index) => (
          <div
            id={getIdFromIndex(index, identifier)}
            key={getIdFromIndex(index, identifier)}
            style={{
              width: '50%',
            }}
          >
            <div style={{ transition: 'all ease-in', height: '100%' }}>
              {item}
            </div>
          </div>
        ))}
      </div>
      {focusedIndex >= 0 && focusedIndex < items.length - 1 && (
        <Arrow
          targetIndex={focusedIndex + 1}
          orientation="right"
          onClick={() => {
            setFocusedIndex((prev) => prev + 1);
          }}
          identifier={identifier}
        />
      )}
    </div>
  );
};

const getIdFromIndex = (index: number, identifier: string): string =>
  `${identifier}-carousel-item-${index}`;

const Arrow = ({
  targetIndex,
  onClick,
  orientation,
  identifier,
}: {
  targetIndex: number;
  onClick: () => void;
  orientation: 'right' | 'left';
  identifier: string;
}) => {
  return (
    <a
      href={`#${getIdFromIndex(targetIndex, identifier)}`}
      style={{
        position: 'absolute',
        top: '50%',
        border: '1px solid',
        alignItems: 'center',
        display: 'flex',
        ...(orientation === 'left'
          ? { left: 0, transform: 'rotate(180deg)' }
          : { right: 0 }),
      }}
      onClick={() => {
        onClick();
        return true;
      }}
    >
      <img src={ChevronRight} alt="Previous" />
    </a>
  );
};

export { Carousel };
