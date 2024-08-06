import React, { useEffect, useMemo, useRef, useState } from 'react';
import ChevronRight from '../../assets/images/chevron-right.svg';
import { DARK_COLOR, VERTICAL_SPACE } from '../../constants';

const Carousel = ({
  items,
  identifier = 'Carousel',
}: {
  items: React.JSX.Element[];
  identifier: string;
}) => {
  const [leftFocusedIndex, setLeftFocusedIndex] = useState<number>(0);
  const [rightFocusedIndex, setRightFocusedIndex] = useState<number>(0);
  const itemsLength = items.length;
  const containerElementRef = useRef<HTMLDivElement>(null);
  const elementRefs: HTMLDivElement[] = useMemo(() => [], []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const elementLeft = e.intersectionRect.left;
          const elementRight = e.intersectionRect.right;
          const containerLeft = e.rootBounds?.left ?? 0;
          const containerRight = e.rootBounds?.right ?? 0;

          if (elementLeft === containerLeft) {
            const index = Number(e.target.getAttribute('data-loop-index') ?? 0);
            setLeftFocusedIndex(index);
            return;
          }

          if (elementRight === containerRight) {
            const index = Number(e.target.getAttribute('data-loop-index') ?? 0);
            setRightFocusedIndex(index);
          }
        });
      },
      {
        root: containerElementRef.current,
        threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      },
    );
    elementRefs.forEach((ele) => {
      observer.observe(ele);
    });

    return () => {
      elementRefs.forEach((ele) => {
        observer.unobserve(ele);
      });
    };
  }, [elementRefs, identifier]);
  return (
    <div
      style={{
        position: 'relative',
        flex: 1,
        margin: `${VERTICAL_SPACE} 0`,
      }}
      id={identifier}
      ref={containerElementRef}
    >
      {leftFocusedIndex > 0 && (
        <Arrow
          targetIndex={leftFocusedIndex - 1}
          orientation="left"
          onClick={() => {
            setLeftFocusedIndex((prev) => Math.min(prev - 1, 0));
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
            data-loop-index={index}
            style={{
              width: '50%',
            }}
            ref={(ref) => {
              if (ref != null) {
                elementRefs.push(ref);
              }
            }}
          >
            <div style={{ transition: 'all ease-in', height: '100%' }}>
              {item}
            </div>
          </div>
        ))}
      </div>
      {rightFocusedIndex >= 0 && rightFocusedIndex < itemsLength - 1 && (
        <Arrow
          targetIndex={rightFocusedIndex + 1}
          orientation="right"
          onClick={() => {
            setRightFocusedIndex((prev) => Math.max(prev + 1, itemsLength));
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
        border: `1px solid ${DARK_COLOR}`,
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
