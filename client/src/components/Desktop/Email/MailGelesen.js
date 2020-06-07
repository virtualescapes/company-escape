import React from 'react';
import {
  MailCommunicationWrapper,
  MailCommunicationOption,
} from '../../utils/MailCommunication';

export default function MailGelesen() {
  return (
    <>
      <MailCommunicationWrapper>
        <MailCommunicationOption>Redaktion</MailCommunicationOption>
        <MailCommunicationOption>ABC</MailCommunicationOption>
        <MailCommunicationOption>Konzern</MailCommunicationOption>
        <MailCommunicationOption>Tinder-Date</MailCommunicationOption>
      </MailCommunicationWrapper>
    </>
  );
}
