import styled from '@emotion/styled';
import React from 'react';
import { keyframes } from '@emotion/core';

const typing = keyframes` 
0% {
  width: 0%;
  opacity:0;
}
1%{
  opacity:1;
}

100% {
  width: 100%;
  opacity:1;
  
}

`;
const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const NoteBlock = styled.div`
  background-color: #d9c6a0;
  width: 600px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const NoteTitle = styled.h2`
  text-align: center;
`;

const List = styled.div`
  position: relative; /* so our red line will be positioned correctly */
  color: #555;
  height: 35px;
  font-size: 1.1rem;
  padding: 0px;
  margin: auto;
  width: 550px;
  font-family: courier, monospace;
  border: 1px solid #dedede;
  text-align: center;

  :before {
    content: '';
    position: absolute;
    z-index: 99;
    top: -1px;
    left: 40px;
    height: 100%;
    width: 4px;
    border-left: 1px solid red;
    border-right: 1px solid red;
  }
`;

const ListText = styled.li`
  list-style: none;
  display: inline-block;
  padding: 10px 10px 12px 80px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  animation: ${typing} 5s steps(50);
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  opacity: 0;
`;

const ListTextSecond = styled(ListText)`
  animation-delay: 3s;
  opacity: 0;
`;
const ListTextThird = styled(ListText)`
  animation-delay: 5s;
  opacity: 0;
`;

export default function Note() {
  return (
    <NoteContainer>
      <NoteBlock>
        <NoteTitle>Notizzettel</NoteTitle>
        <List>
          <ListText>Frühstück</ListText>
        </List>
        <List>
          <ListTextSecond>Sport :(</ListTextSecond>
        </List>
        <List>
          <ListTextThird>Konzern zerschlagen und die Welt retten</ListTextThird>
        </List>
      </NoteBlock>
    </NoteContainer>
  );
}
