import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { FinstagramChatModalContext } from '../contexts/FinstagramChatModalContext';
import CloseModal from '../../assets/social-media/closeModal.svg';
import { FinstagramPostModalContext } from '../contexts/FinstagramPostModalContext';

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

export default function FinstagramCloseModalIcon() {
  const [, setActiveChatModal] = useContext(FinstagramChatModalContext);
  const [, setActivePostModal] = useContext(FinstagramPostModalContext);

  const closeModal = () => {
    setActiveChatModal(false);
    setActivePostModal(false);
  };

  return (
    <IconContainer onClick={closeModal}>
      <Icon src={CloseModal} />
    </IconContainer>
  );
}
