import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';
import FinstagramPosts from '../social-media/FinstagramPosts';
import FinstagramHeader from './FinstagramHeader';
import FinstagramProfile from './FinstagramProfile';

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  background: #fafafa;
  width: 100vw;
  height: 100vh;
`;

const PostsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Finstagram({ posts, user }) {
  return (
    <>
      <FinstagramHeader />
      <Content>
        <FinstagramProfile user={user} />
        <PostsWrapper>
          <FinstagramPosts posts={posts} />
        </PostsWrapper>
      </Content>
    </>
  );
}
export default Finstagram;

Finstagram.propTypes = {
  posts: PropType.array,
  user: PropType.object,
};
