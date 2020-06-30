import React, { useContext } from 'react';
import styled from '@emotion/styled';
import FinstagramCloseModalIcon from '../../utils/FinstagramCloseModalIcon';
import PropType from 'prop-types';
import { FinstagramPostModalContext } from '../../contexts/FinstagramPostModalContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Post = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 600px;
`;

const PostImage = styled.img`
  width: 100%;
`;

export default function FinstagramPostModal({ post }) {
  const [, setActivePostModal] = useContext(FinstagramPostModalContext);

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setActivePostModal(false);
    }
  };

  return (
    <Container onClick={closeModal}>
      <Post>
        <PostImage src={post} />
      </Post>
      <FinstagramCloseModalIcon />
    </Container>
  );
}

FinstagramPostModal.propTypes = {
  post: PropType.string,
};
