import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';
import Arrow from '../assets/apartment/navigation_arrow.svg';

const ArrowContainer = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  bottom: 3%;
  left: 50%;
  transform: rotate(90deg);
  opacity: 0.4;

  :hover {
    opacity: 1;
  }
`;

const ArrowImg = styled.img`
  height: 100%;
  width: 100%;
`;

export default function NavigationArrow({ previousPage }) {
  return (
    <ArrowContainer onClick={previousPage}>
      <ArrowImg src={Arrow} />
    </ArrowContainer>
  );
}

NavigationArrow.propTypes = {
  previousPage: PropType.func,
};
