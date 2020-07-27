import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';
import { keyframes } from '@emotion/core';
import FootImg from '../assets/foot.svg';

const walking = keyframes`
    0% {
      opacity: 0
    }
    50% {
     opacity: 0.5
     }
    60% {
    opacity: 0
    }
    100% {
     opacity: 0
     }
`;

const AnimationContainer = styled.div`
  height: 150px;
  width: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Foot = styled.img`
  content: url(${FootImg});
  height: 40px;
  opacity: 0;
  position: absolute;
  animation: ${walking} 2s ease-out infinite;
`;

const FirstFoot = styled(Foot)`
  transform: scaleX(-1);
  align-self: flex-start;
  bottom: 60%;
  animation-delay: 1.15s;
`;

const SecondFoot = styled(Foot)`
  align-self: flex-end;
  bottom: 40%;
  animation-delay: 0.9s;
`;

const ThirdFoot = styled(Foot)`
  transform: scaleX(-1);
  align-self: flex-start;
  bottom: 20%;
  animation-delay: 0.6s;
`;

const FourthFoot = styled(Foot)`
  align-self: flex-end;
  bottom: 0;
  animation-delay: 0.3s;
`;

export default function Footprint({ className }) {
  return (
    <>
      <AnimationContainer className={className}>
        <FirstFoot />
        <SecondFoot />
        <ThirdFoot />
        <FourthFoot />
      </AnimationContainer>
    </>
  );
}

Footprint.propTypes = {
  className: PropType.func,
};
