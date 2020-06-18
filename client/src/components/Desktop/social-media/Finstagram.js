import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';
import search from '../../../assets/social-media/icon_search.png';
import sebastian from '../../../assets/social-media/sebastian.jpg';
import FinstagramPosts from '../social-media/FinstagramPosts';

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  width: 100vw;
  border-bottom: 1px solid #dbdbdb;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 10%;
  background: #fafafa;
  color: #8e8e8e;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  font-size: 12px;
  margin: 12px;
  padding: 5px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 80%;
  background: none;
  color: #262626;
  ::placeholder {
    text-align: left;
  }
`;

const SearchIcon = styled.img`
  background: url(${(props) => props.src}) no-repeat fill;
  height: 60%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  background: #fafafa;
  width: 100vw;
  height: 100vh;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40%;
  width: 70%;
  border-bottom: 1px solid #dbdbdb;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 70%;
`;

const ProfileInfo = styled.div`
  color: #262626;
`;

const user = {
  name: 'Sebastian',
  image: sebastian,
  posts: '2',
  followers: '123',
  following: '24',
};

const PostsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Finstagram({ posts }) {
  return (
    <>
      <Header>
        Instagram
        <SearchBar>
          <SearchIcon src={search} />
          <SearchInput placeholder="Suchen" />
        </SearchBar>
        Icons
      </Header>
      <Content>
        <ProfileSection>
          <>
            <ProfileImage src={user.image} />
            <ProfileInfo>{user.name}</ProfileInfo>
            <ProfileInfo>{user.posts} Posts</ProfileInfo>
            <ProfileInfo>{user.followers} Followers</ProfileInfo>
            <ProfileInfo>{user.following} Following</ProfileInfo>
          </>
        </ProfileSection>
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
};
