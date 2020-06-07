import React from 'react';
import MailHeader from './MailHeader';
import { MailNavigationProvider } from '../../contexts/MailNavigationContext';

export default function Mail() {
  return (
    <>
      <MailNavigationProvider>
        <MailHeader />
      </MailNavigationProvider>
    </>
  );
}
