import React from 'react';
import MailHeader from './MailHeader';
import { MailNavigationProvider } from '../../contexts/MailNavigationContext';
import MailCommunications from './MailCommunications';
import MailContent from './MailContent';
import styled from '@emotion/styled';
import { MailSendenProvider } from '../../contexts/MailSendenContext';
import { MailGesendetProvider } from '../../contexts/MailGesendetContext';
import { MailGelesenProvider } from '../../contexts/MailGelesenContext';
import { MailUngelesenProvider } from '../../contexts/MailUngelesenContext';

const Main = styled.div`
  display: flex;
`;

export default function Mail() {
  return (
    <>
      <MailNavigationProvider>
        <MailSendenProvider>
          <MailGesendetProvider>
            <MailGelesenProvider>
              <MailUngelesenProvider>
                <MailHeader />
                <Main>
                  <MailCommunications />
                  <MailContent />
                </Main>
              </MailUngelesenProvider>
            </MailGelesenProvider>
          </MailGesendetProvider>
        </MailSendenProvider>
      </MailNavigationProvider>
    </>
  );
}
