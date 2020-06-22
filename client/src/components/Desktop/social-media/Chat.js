import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 80%;
  background-color: #efefef;
  overflow-y: scroll;
  padding: 20px;
  border-radius: 5%;
`;

const ChatWrapper = styled.div`
  max-width: 45%;
  margin: 5px;
  align-self: ${({ author }) =>
    author === 'Florian' ? 'flex-start' : 'flex-end'};
`;

const Message = styled.div`
  padding: 5px;
  border-radius: 10px;
  background-color: lightgray;
  opacity: 1;
`;

export default function Chat() {
  const chatHistory = [
    {
      author: 'Susanne',
      date: '14:05',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    },
    {
      author: 'Susanne',
      date: '14:10',
      message: '🍆',
    },
    {
      author: 'Florian',
      date: '14:13',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    },
    {
      author: 'Florian',
      date: '14:15',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    },
    {
      author: 'Susanne',
      date: '14:12',
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    },
  ];

  return (
    <Wrapper>
      {chatHistory?.map((chat) => (
        <ChatWrapper author={chat.author} key={chat}>
          <div>{chat.date}</div>
          <Message>
            {chat.author}:
            <br />
            {chat.message}
          </Message>
        </ChatWrapper>
      ))}
    </Wrapper>
  );
}
