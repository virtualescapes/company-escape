import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';
import Background from '../../assets/mobile/email-pattern-custom.png';
import PartyImg from '../../assets/mobile/party.jpg';
import Read from '../../assets/mobile/checks.svg';
import Mobile from '../../assets/mobile/mockup.svg';
import Arrow from '../../assets/mobile/icon-send.svg';

const Mockup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 810px;
  width: 430px;
  background-image: url(${Mobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: stretch;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 367px;
  background: #0c6156;
  z-index: 1;
  top: 84px;
  border-radius: 5px 5px 0% 0%;
`;

const ScrollContainer = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  height: 640px;
  margin-top: 15px;
  position: absolute;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 52px;
  width: 365px;
`;

const ImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin: 0px 15px 0px 15px;
`;

const GroupImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const GroupName = styled.p`
  color: #e9f7f8;
  font-size: 20px;
`;

const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  background-attachment: fixed;
  background-size: fill;
`;

const MessageWrapper = styled.div`
  position: relative;
  max-width: 40%;
  min-width: 20%;
  margin: 20px;
  align-self: ${({ author }) =>
    author === 'Sarah' ? 'flex-end' : 'flex-start'};
`;

const Message = styled.div`
  margin: 0;
  font-size: 16px;
  padding: 8px;
  border-radius: ${({ author }) =>
    author === 'Sarah' ? '10px 0px 10px 10px' : '0px 10px 10px 10px'};
  background-color: ${({ author }) =>
    author === 'Sarah' ? '#e2ffc8' : '#FFFFFF'};
  opacity: 1;
  box-shadow: 0px 1px 1px 0px grey;

  :before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;

    border-right: ${({ author }) =>
      author === 'Sarah' ? '10px solid transparent' : 'none'};

    border-left: ${({ author }) =>
      author === 'Sarah' ? 'none' : '10px solid transparent'};

    border-top: 12px solid
      ${({ author }) => (author === 'Sarah' ? '#e2ffc8' : '#FFFFFF')};

    border-bottom: 20px solid transparent;

    right: ${({ author }) => (author === 'Sarah' ? '-10px' : '')};

    left: ${({ author }) => (author === 'Sarah' ? '' : '-10px')};

    top: 0px;
  }
`;

const AuthorName = styled.div`
  color: ${({ color }) => color};
  margin-bottom: 3px;
`;

const TimeStamp = styled.div`
  color: #a4a4a4;
  font-size: 12px;
  text-align: right;
  margin-top: 3px;

  ::after {
    content: url(${({ author }) => (author === 'Sarah' ? Read : '')});
    margin-left: 3px;
  }
`;

const WritingContainer = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5px;
`;

const WritingArea = styled.input`
  background-color: #ffffff;
  width: 80%;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0px 1px 1px 0px grey;
  padding: 18px;
  align-self: center;
  border: none;
  outline: none;
  font-size: 18px;
  ::-webkit-input-placeholder {
    text-align: left;
    font-size: 18px;
  }
`;

const Send = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0c6156;
  border: none;
  outline: none;
  box-shadow: 0px 1px 1px 0px grey;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-size: fill;
  background-position: center;
  &:active {
    transform: translateY(1px);
  }
`;

export default function WhatsUp({ chat }) {
  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Mockup>
      <Header>
        <ImgWrapper>
          <GroupImg src={PartyImg} />
        </ImgWrapper>
        <GroupName>Promotion Parteeeey 🎉🕺🏻🍸</GroupName>
      </Header>
      <ScrollContainer>
        <Container>
          <ChatWindow>
            {chat?.map((chat) => (
              <MessageWrapper author={chat.author} key={chat.date}>
                <Message author={chat.author}>
                  <AuthorName color={chat.color}>{chat.author}</AuthorName>
                  {chat.message}
                  <TimeStamp author={chat.author}>{chat.date}</TimeStamp>
                </Message>
              </MessageWrapper>
            ))}
            <WritingContainer onSubmit={handleSubmit}>
              <WritingArea placeholder="Schreib etwas" /> <Send />
            </WritingContainer>
          </ChatWindow>
        </Container>
      </ScrollContainer>
    </Mockup>
  );
}

WhatsUp.propTypes = {
  chat: PropType.array,
};
