import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const ModalContainer = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  right: 3%;
  top: 5%;
`;

const Bubble = styled.div`
  background: beige;
  position: relative;
  font-family: sans-serif;
  font-size: 1.4rem;
  line-height: 24px;
  width: 300px;
  border-radius: 40px;
  padding: 22px;
  text-align: center;
  color: #000;
  opacity: 0.8;

  :before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 24px solid beige;
    border-left: 12px solid transparent;
    border-top: 12px solid beige;
    border-bottom: 20px solid transparent;
    right: 20px;
    bottom: -24px;
  }
`;
const BubbleContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  color: #000;
`;

export default function ThoughtBubble(props) {
  return (
    <ModalContainer active={props.active}>
      <Bubble>
        <BubbleContent>{props.children}</BubbleContent>
      </Bubble>
    </ModalContainer>
  );
}

ThoughtBubble.propTypes = {
  children: PropTypes.string,
  active: PropTypes.bool,
};
