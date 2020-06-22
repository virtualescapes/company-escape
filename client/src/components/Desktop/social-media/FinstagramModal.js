import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Chat from './Chat';
import CloseModal from '../../../assets/social-media/closeModal.svg';
import { FinstagramChatModalContext } from '../../contexts/FinstagramChatModalContext';

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

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 50px;
  right: 50px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export default function FinstagramModal() {
  const [, setActiveChatModal] = useContext(FinstagramChatModalContext);

  const closeChatModal = () => {
    setActiveChatModal(false);
  };

  return (
    <Container>
      <Chat />
      <IconContainer onClick={closeChatModal}>
        <Icon src={CloseModal} />
      </IconContainer>
    </Container>
  );
}
