import React, { useState } from 'react';
import styled from '@emotion/styled';
import MailSendenIcon from './MailSendenIcon';
import MailGesendetIcon from './MailGesendetIcon';
import MailGelesenIcon from './MailGelesenIcon';
import MailUngelesenIcon from './MailUngelesenIcon';

const Container = styled.div`
  display: flex;
`;

const MailNavigationItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ active }) => (active ? 'white' : '#2c35bb')};
  border: none;
  color: ${({ active }) => (active ? '#2c35bb' : 'white')};
  font-size: 24px;
  font-weight: bold;
  margin-right: 30px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  > * {
    margin-right: 5px;
  }
`;

export default function MailNavigation() {
  const [activeNavigation, setActiveNavigation] = useState('gelesen');

  return (
    <Container>
      <MailNavigationItem
        active={activeNavigation === 'senden'}
        onClick={() => setActiveNavigation('senden')}
      >
        <MailSendenIcon active={activeNavigation} />
        senden
      </MailNavigationItem>

      <MailNavigationItem
        active={activeNavigation === 'gesendet'}
        onClick={() => setActiveNavigation('gesendet')}
      >
        <MailGesendetIcon active={activeNavigation} />
        gesendet
      </MailNavigationItem>

      <MailNavigationItem
        active={activeNavigation === 'gelesen'}
        onClick={() => setActiveNavigation('gelesen')}
      >
        <MailGelesenIcon active={activeNavigation} />
        gelesen
      </MailNavigationItem>

      <MailNavigationItem
        active={activeNavigation === 'ungelesen'}
        onClick={() => setActiveNavigation('ungelesen')}
      >
        <MailUngelesenIcon active={activeNavigation} />
        ungelesen
      </MailNavigationItem>
    </Container>
  );
}
