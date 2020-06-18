import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  width: 70vw;
  border-bottom: 1px solid #dbdbdb;
  padding: 50px 0px 50px 0px;
`;

const ProfileImageWrapper = styled.div`
  width: 200px;
  min-width: 100px;
  margin: 0px 100px 0px 50px;
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const FlexboxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProfileName = styled.div`
  font-size: 2rem;
  margin-bottom: 40px;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
`;

const ProfileInfo = styled.div`
  color: #262626;
  margin-right: 50px;
`;

export default function FinstagramProfile({ user }) {
  return (
    <ProfileSection>
      <ProfileImageWrapper>
        <ProfileImage src={user.image} />
      </ProfileImageWrapper>
      <FlexboxColumn>
        <ProfileName>{user.name}</ProfileName>
        <ProfileInfoWrapper>
          <ProfileInfo>{user.posts} Posts</ProfileInfo>
          <ProfileInfo>{user.followers} Followers</ProfileInfo>
          <ProfileInfo>{user.following} Following</ProfileInfo>
        </ProfileInfoWrapper>
      </FlexboxColumn>
    </ProfileSection>
  );
}

FinstagramProfile.propTypes = {
  user: PropType.object,
};
