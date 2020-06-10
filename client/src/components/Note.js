import styled from '@emotion/styled';
import React from 'react';
import PropType from 'prop-types';
import { keyframes } from '@emotion/core';

const typing = keyframes` 
0% {
  width: 0%;
}
1%{
  opacity: 1;
}
100% {
  width: 100%;
  opacity: 1;
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
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  animation: ${typing} 5s steps(50) forwards ${({ delay }) => `${delay}s`};
`;

export default function Note({ title, content }) {
  let animationDelay = 1;
  return (
    <NoteContainer>
      <NoteBlock>
        <NoteTitle>{title ? title : 'Notizzettel'}</NoteTitle>
        {content
          ? content.map((zeile) => {
              return (
                <List key={zeile}>
                  <ListText key={zeile} delay={animationDelay++}>
                    {zeile}
                  </ListText>
                </List>
              );
            })
          : ''}
      </NoteBlock>
    </NoteContainer>
  );
}

Note.propTypes = {
  title: PropType.string,
  content: PropType.array,
};
