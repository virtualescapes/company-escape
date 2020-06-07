import React, { useContext } from 'react';
import { MailNavigationContext } from '../../contexts/MailNavigationContext';
import MailSenden from './MailSenden';
import MailGesendet from './MailGesendet';
import MailGelesen from './MailGelesen';
import MailUngelesen from './MailUngelesen';

export default function MailCommunications() {
  const [activeNavigation] = useContext(MailNavigationContext);

  if (activeNavigation === 'senden') {
    return <MailSenden />;
  } else if (activeNavigation === 'gesendet') {
    return <MailGesendet />;
  } else if (activeNavigation === 'gelesen') {
    return <MailGelesen />;
  } else if (activeNavigation === 'ungelesen') {
    return <MailUngelesen />;
  }
}
