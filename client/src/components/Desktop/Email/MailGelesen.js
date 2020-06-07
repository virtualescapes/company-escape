import React, { useContext } from 'react';
import {
  MailCommunicationWrapper,
  MailCommunicationOption,
} from '../../utils/MailCommunication';
import { MailGelesenContext } from '../../contexts/MailGelesenContext';

export default function MailGelesen() {
  const [activeGelesen, setActiveGelesen] = useContext(MailGelesenContext);
  return (
    <>
      <MailCommunicationWrapper>
        <MailCommunicationOption
          active={activeGelesen === 'redaktion'}
          onClick={() => setActiveGelesen('redaktion')}
        >
          Redaktion
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeGelesen === 'abc'}
          onClick={() => setActiveGelesen('abc')}
        >
          ABC
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeGelesen === 'konzern'}
          onClick={() => setActiveGelesen('konzern')}
        >
          Konzern
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeGelesen === 'tinder'}
          onClick={() => setActiveGelesen('tinder')}
        >
          Tinder-Date
        </MailCommunicationOption>
      </MailCommunicationWrapper>
    </>
  );
}
