import type { PropsWithChildren, FC, CSSProperties } from 'react';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface IAnimatedDiv {
  entryWidth: CSSProperties['width'];
  exitWidth: CSSProperties['width'];
  styleProps?: CSSProperties;
  isMounted: boolean;
  animationDuration: number;
  key: string;
}

const AnimatedDiv: FC<PropsWithChildren<IAnimatedDiv>> = ({
  entryWidth,
  exitWidth,
  isMounted,
  key,
  animationDuration = 0.4,
  children,
  styleProps,
}) => {
  return (
    <AnimatePresence initial={false}>
      {isMounted ? (
        <motion.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: 'easeIn',
            duration: animationDuration,
          }}
          style={{ ...styleProps }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export { AnimatedDiv };
