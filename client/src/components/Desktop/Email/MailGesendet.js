import React from 'react';
import {
  MailCommunicationWrapper,
  MailCommunicationOption,
} from '../../utils/MailCommunication';

export default function MailGesendet() {
  return (
    <>
      <MailCommunicationWrapper>
        <MailCommunicationOption>ABC</MailCommunicationOption>
        <MailCommunicationOption>anonyme Quelle</MailCommunicationOption>
        <MailCommunicationOption>Konzern</MailCommunicationOption>
        <MailCommunicationOption>Tinder-Date</MailCommunicationOption>
      </MailCommunicationWrapper>
    </>
  );
}
