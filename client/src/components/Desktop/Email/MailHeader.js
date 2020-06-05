import React from 'react';
import styled from '@emotion/styled';
import MailNavigation from './MailNavigation';

const Container = styled.div`
  background-color: #2c35bb;
  display: flex;
  height: 100px;
  align-items: center;
`;

const TitleContainer = styled.div`
  padding-left: 60px;
  padding-right: 120px;
  color: white;
  font-size: 42px;
  font-weight: bold;
`;

export default function MailHeader() {
  return (
    <Container>
      <TitleContainer>GE-Mail</TitleContainer>
      <MailNavigation />
    </Container>
  );
}
