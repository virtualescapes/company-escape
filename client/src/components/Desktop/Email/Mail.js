import React from 'react';
import MailHeader from './MailHeader';
import { MailNavigationProvider } from '../../contexts/MailNavigationContext';
import MailCommunications from './MailCommunications';

export default function Mail() {
  return (
    <>
      <MailNavigationProvider>
        <MailHeader />
        <MailCommunications />
      </MailNavigationProvider>
    </>
  );
}
