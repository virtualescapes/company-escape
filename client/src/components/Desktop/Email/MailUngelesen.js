import React from 'react';
import {
  MailCommunicationWrapper,
  MailCommunicationOption,
} from '../../utils/MailCommunication';

export default function MailUngelesen() {
  return (
    <>
      <MailCommunicationWrapper>
        <MailCommunicationOption>Redaktion</MailCommunicationOption>
        <MailCommunicationOption>anonyme Quelle</MailCommunicationOption>
        <MailCommunicationOption>ABC</MailCommunicationOption>
        <MailCommunicationOption>Tinder-Date</MailCommunicationOption>
      </MailCommunicationWrapper>
    </>
  );
}
