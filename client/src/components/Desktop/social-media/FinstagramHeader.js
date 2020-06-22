import React, { useContext } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Search from '../../../assets/social-media/icon_search.png';
import Home from '../../../assets/social-media/finstaHomeIcon.svg';
import Chat from '../../../assets/social-media/finstaChatIcon.svg';
import FinstagramChatModal from './FinstagramChatModal';
import { FinstagramChatModalContext } from '../../contexts/FinstagramChatModalContext';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  width: 100vw;
  border-bottom: 1px solid #dbdbdb;
  font-size: 1.5rem;
  font-family: 'Dancing Script', cursive;
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

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px;
`;
const IconContainer = styled.div`
  width: 26px;
  height: 26px;
  margin-right: 20px;
`;
const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const ProfileIcon = styled(Icon)`
  border-radius: 50%;
`;

const SearchIcon = styled.img`
  background: url(${(props) => props.src}) no-repeat fill;
  height: 60%;
`;

export default function FinstagramHeader({ user }) {
  const [activeChatModal, setActiveChatModal] = useContext(
    FinstagramChatModalContext
  );

  const openChatModal = () => {
    setActiveChatModal(true);
  };

  return (
    <Header>
      Finstagram
      <SearchBar>
        <SearchIcon src={Search} />
        <SearchInput placeholder="Suchen" />
      </SearchBar>
      <IconsContainer>
        <IconContainer>
          <Icon src={Home} />
        </IconContainer>
        <IconContainer onClick={openChatModal}>
          <Icon src={Chat} />
        </IconContainer>
        <IconContainer>
          <ProfileIcon src={user.image} />
        </IconContainer>
      </IconsContainer>
      {activeChatModal ? <FinstagramChatModal /> : null}
    </Header>
  );
}

FinstagramHeader.propTypes = {
  user: PropTypes.object,
};
