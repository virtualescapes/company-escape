import React from 'react';
import styled from '@emotion/styled';
import search from '../../../assets/social-media/icon_search.png';

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

export default function FinstagramHeader() {
  return (
    <Header>
      Finstagram
      <SearchBar>
        <SearchIcon src={search} />
        <SearchInput placeholder="Suchen" />
      </SearchBar>
      Icons
    </Header>
  );
}
