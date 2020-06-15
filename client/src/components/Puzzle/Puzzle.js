import React from 'react';
import styled from '@emotion/styled';
import Draggable from 'react-draggable';
import FullWrapper from '../FullWrapper';
import Piece1 from '../../assets/puzzle-pieces/1.png';
import Piece2 from '../../assets/puzzle-pieces/2.png';
import Piece3 from '../../assets/puzzle-pieces/3.png';
import Piece4 from '../../assets/puzzle-pieces/4.png';
import Piece5 from '../../assets/puzzle-pieces/5.png';
import Piece6 from '../../assets/puzzle-pieces/6.png';
import Piece7 from '../../assets/puzzle-pieces/7.png';
import Piece8 from '../../assets/puzzle-pieces/8.png';
import Piece9 from '../../assets/puzzle-pieces/9.png';
import Piece10 from '../../assets/puzzle-pieces/10.png';
import Piece11 from '../../assets/puzzle-pieces/11.png';
import Piece12 from '../../assets/puzzle-pieces/12.png';
import Piece13 from '../../assets/puzzle-pieces/13.png';
import Piece14 from '../../assets/puzzle-pieces/14.png';
import Piece15 from '../../assets/puzzle-pieces/15.png';
import Piece16 from '../../assets/puzzle-pieces/16.png';

const PuzzleBoard = styled.div`
  display: flex;
  flex-flow: wrap;
  background: lightgrey;
  width: 50%;
`;

const PuzzlePiece = styled.img`
  width: 25%;
  background-repeat: no-repeat;
  padding: 5px;
`;

const pieces = [
  Piece1,
  Piece2,
  Piece3,
  Piece4,
  Piece5,
  Piece6,
  Piece7,
  Piece8,
  Piece9,
  Piece10,
  Piece11,
  Piece12,
  Piece13,
  Piece14,
  Piece15,
  Piece16,
];

function Puzzle() {
  return (
    <FullWrapper background={'grey'}>
      <PuzzleBoard>
        {pieces.map((piece) => {
          return (
            <Draggable key={piece}>
              <PuzzlePiece src={piece} />
            </Draggable>
          );
        })}
      </PuzzleBoard>
    </FullWrapper>
  );
}
export default Puzzle;
