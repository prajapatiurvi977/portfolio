declare module '*.pdf';
declare module '*.png';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface TabElementsConfig {
  isOnEvenTab: boolean;
}

export type { TabElementsConfig };
