const UX_UI_DESIGN = 'UX/UI Design';
const INTERACTION_DESIGN = 'Interaction Design';
const RESPONSIVE_DESIGN = 'Responsive Design';
const WEB_DESIGN = 'Web Design';

const TimHortonsCategories = [
  UX_UI_DESIGN,
  INTERACTION_DESIGN,
  'User Research',
  'App Design',
] as const;
const TorontoZooCategories = [
  UX_UI_DESIGN,
  INTERACTION_DESIGN,
  RESPONSIVE_DESIGN,
  WEB_DESIGN,
] as const;
const HumberCurrentCategories = [
  UX_UI_DESIGN,
  INTERACTION_DESIGN,
  RESPONSIVE_DESIGN,
  WEB_DESIGN,
] as const;
const TicTacToeCategories = [
  'UI Development',
  'ReactJS',
  'JavaScript',
  'Game Development',
] as const;

type LabelsArray =
  | typeof TimHortonsCategories
  | typeof TorontoZooCategories
  | typeof HumberCurrentCategories
  | typeof TicTacToeCategories;

export {
  HumberCurrentCategories,
  TicTacToeCategories,
  TimHortonsCategories,
  TorontoZooCategories,
};
export type { LabelsArray };
