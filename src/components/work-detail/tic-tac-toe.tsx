import type { FC } from 'react';
import React from 'react';
import { TicTacToeCategories, TicTacToeDescription } from '../constants';
import { CommonIntroduction } from './common-introduction';

interface ITicTacToe {
  isEven: boolean;
}
const TicTacToe: FC<ITicTacToe> = ({ isEven }) => {
  return (
    <div>
      <CommonIntroduction
        description={TicTacToeDescription}
        isEven={isEven}
        categories={[...TicTacToeCategories]}
      />
    </div>
  );
};
export { TicTacToe };
