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
        subTitle={TicTacToeDescription}
        isEven={isEven}
        categories={[...TicTacToeCategories]}
        description=""
        role=""
        screenSize=""
        duration=""
        tools=""
        hifiProtoTypeLink="www.google.com"
        imageSrc="./"
      />
    </div>
  );
};
export { TicTacToe };
