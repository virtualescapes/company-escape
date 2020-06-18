import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';

const PostSection = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 70%;
  margin-bottom: 10px;
  padding: 0px;
`;

const Post = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: calc(33.33% - 20px);
  margin: 20px 10px 0px 10px;
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function FinstagramPosts({ posts }) {
  return (
    <PostsWrapper>
      <PostSection>
        {posts.map((post) => {
          return (
            <Post key={post}>
              <PostImage src={post} />
            </Post>
          );
        })}
      </PostSection>
    </PostsWrapper>
  );
}

export default FinstagramPosts;

FinstagramPosts.propTypes = {
  posts: PropType.array,
};
