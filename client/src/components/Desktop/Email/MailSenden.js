import React, { useContext } from 'react';
import {
  MailCommunicationWrapper,
  MailCommunicationOption,
} from '../../utils/MailCommunication';
import { MailSendenContext } from '../../contexts/MailSendenContext';

export default function MailSenden() {
  const [activeSenden, setActiveSenden] = useContext(MailSendenContext);
  return (
    <>
      <MailCommunicationWrapper>
        <MailCommunicationOption
          active={activeSenden === 'redaktion'}
          onClick={() => setActiveSenden('redaktion')}
        >
          Redaktion
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeSenden === 'anonym'}
          onClick={() => setActiveSenden('anonym')}
        >
          anonyme Quelle
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeSenden === 'konzern'}
          onClick={() => setActiveSenden('konzern')}
        >
          Konzern
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeSenden === 'tinder'}
          onClick={() => setActiveSenden('tinder')}
        >
          Tinder-Date
        </MailCommunicationOption>
      </MailCommunicationWrapper>
    </>
  );
}
