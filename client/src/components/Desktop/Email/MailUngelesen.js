import React, { useContext } from 'react';
import {
  MailCommunicationWrapper,
  MailCommunicationOption,
} from '../../utils/MailCommunication';
import { MailUngelesenContext } from '../../contexts/MailUngelesenContext';

export default function MailUngelesen() {
  const [activeUngelesen, setActiveUngelesen] = useContext(
    MailUngelesenContext
  );
  return (
    <>
      <MailCommunicationWrapper>
        <MailCommunicationOption
          active={activeUngelesen === 'redaktion'}
          onClick={() => setActiveUngelesen('redaktion')}
        >
          Redaktion
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeUngelesen === 'anonym'}
          onClick={() => setActiveUngelesen('anonym')}
        >
          anonyme Quelle
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeUngelesen === 'abc'}
          onClick={() => setActiveUngelesen('abc')}
        >
          ABC
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeUngelesen === 'tinder'}
          onClick={() => setActiveUngelesen('tinder')}
        >
          Tinder-Date
        </MailCommunicationOption>
      </MailCommunicationWrapper>
    </>
  );
}
