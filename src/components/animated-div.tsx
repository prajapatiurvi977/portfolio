import type { PropsWithChildren, FC, CSSProperties } from 'react';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface IAnimatedDiv {
  styleProps?: CSSProperties;
  isMounted: boolean;
  animationDuration: number;
  id: string;
}

const AnimatedDiv: FC<PropsWithChildren<IAnimatedDiv>> = ({
  isMounted,
  id,
  animationDuration = 0.4,
  children,
  styleProps,
}) => {
  return (
    <AnimatePresence initial={false}>
      {isMounted ? (
        <motion.div
          key={id}
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
