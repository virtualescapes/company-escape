import React from 'react';
import styled from '@emotion/styled';
import search from '../../../assets/social-media/icon_search.png';
import profile from '../../../assets/social-media/profile.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  background: #fafafa;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  height: 10%;
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

function Insta() {
  return (
    <Wrapper>
      <Header>
        Instagram
        <SearchBar>
          <SearchIcon src={search} />
          <SearchInput placeholder="Suchen" />
        </SearchBar>
        Icons
      </Header>
      <ProfileSection>
        <ProfileImage src={profile} />
        <ProfileInfo>Sarah</ProfileInfo>
        <ProfileInfo>0 Posts</ProfileInfo>
        <ProfileInfo>10 Followers</ProfileInfo>
        <ProfileInfo>12 Following</ProfileInfo>
      </ProfileSection>
    </Wrapper>
  );
}
export default Insta;
