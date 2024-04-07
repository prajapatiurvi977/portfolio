import { useCallback, useEffect, useState } from 'react';

const debounce = <T extends (...args: any[]) => any>(fnc: T, timeout = 200) => {
  let timer: number;
  // @ts-expect-error Rest parameter 'args' implicitly has an 'any[]' type.
  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      fnc.apply(this, args);
    }, timeout);
  };
};

interface Dimensions {
  width: number;
  height: number;
}

const getWindowDimensions = (): Dimensions => {
  const { innerHeight, innerWidth } = window;
  return { width: innerWidth, height: innerHeight };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimension] = useState(
    getWindowDimensions(),
  );

  const memoizedSetWindowDimension = useCallback(() => {
    setWindowDimension(getWindowDimensions());
  }, []);

  const debouncedMemoizedSetWindowDimension = debounce(() => {
    memoizedSetWindowDimension();
  });

  useEffect(() => {
    window.addEventListener('resize', (dimension) => {
      debouncedMemoizedSetWindowDimension(dimension);
    });
  }, []);

  return windowDimensions;
};

export { useWindowDimensions };
