import React from 'react';
import {
  MailCommunicationWrapper,
  MailCommunicationOption,
} from '../../utils/MailCommunication';

export default function MailSenden() {
  return (
    <>
      <MailCommunicationWrapper>
        <MailCommunicationOption>Redaktion</MailCommunicationOption>
        <MailCommunicationOption>anonyme Quelle</MailCommunicationOption>
        <MailCommunicationOption>Konzern</MailCommunicationOption>
        <MailCommunicationOption>Tinder-Date</MailCommunicationOption>
      </MailCommunicationWrapper>
    </>
  );
}
