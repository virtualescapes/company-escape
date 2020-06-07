import styled from '@emotion/styled';

export const MailCommunicationWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const MailCommunicationOption = styled.div`
  width: 280px;
  height: 60px;
  margin-bottom: 20px;
  background-color: ${({ active }) => (active ? 'white' : '#2c35bb')};
  color: ${({ active }) => (active ? '#2c35bb' : 'white')};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ active }) => (active ? '2px solid #2c35bb' : 'none')};
  cursor: pointer;
`;
