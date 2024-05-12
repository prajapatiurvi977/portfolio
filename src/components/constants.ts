const UX_UI_DESIGN = 'UX/UI Design';
const INTERACTION_DESIGN = 'Interaction Design';
const RESPONSIVE_DESIGN = 'Responsive Design';
const WEB_DESIGN = 'Web Design';

const TimHortonsDescription =
  'Research & Redesign of App Navigation for order path';
const TorontoZooDescription =
  'Redesign of Site Navigation, UI/Visual Design, and Ticket Purchasing';
const HumberCurrentDescription =
  'Redesign of Site Navigation, UI/Visual Design';
const TicTacToeDescription = 'Fun game out of learning ReactJS with UI Design';
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
  HumberCurrentDescription,
  TicTacToeCategories,
  TicTacToeDescription,
  TimHortonsCategories,
  TimHortonsDescription,
  TorontoZooCategories,
  TorontoZooDescription,
};
export type { LabelsArray };
