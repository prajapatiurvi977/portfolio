import React from 'react';
import type { IsEvenProp } from '../../common-types';
import { TicTacToeCategories, TicTacToeDescription } from '../constants';
import { CommonIntroduction } from './common-introduction';

const TicTacToe = ({ isEven }: IsEvenProp) => {
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
