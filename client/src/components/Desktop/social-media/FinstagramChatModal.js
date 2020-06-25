import React from 'react';
import styled from '@emotion/styled';
import Chat from './Chat';
import FinstagramCloseModalIcon from '../../utils/FinstagramCloseModalIcon';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function FinstagramChatModal() {
  return (
    <Container>
      <Chat />
      <FinstagramCloseModalIcon />
    </Container>
  );
}
