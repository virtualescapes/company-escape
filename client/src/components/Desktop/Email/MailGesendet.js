import React, { useContext } from 'react';
import {
  MailCommunicationWrapper,
  MailCommunicationOption,
} from '../../utils/MailCommunication';
import { MailGesendetContext } from '../../contexts/MailGesendetContext';

export default function MailGesendet() {
  const [activeGesendet, setActiveGesendet] = useContext(MailGesendetContext);
  return (
    <>
      <MailCommunicationWrapper>
        <MailCommunicationOption
          active={activeGesendet === 'abc'}
          onClick={() => setActiveGesendet('abc')}
        >
          ABC
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeGesendet === 'anonym'}
          onClick={() => setActiveGesendet('anonym')}
        >
          anonyme Quelle
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeGesendet === 'konzern'}
          onClick={() => setActiveGesendet('konzern')}
        >
          Konzern
        </MailCommunicationOption>
        <MailCommunicationOption
          active={activeGesendet === 'tinder'}
          onClick={() => setActiveGesendet('tinder')}
        >
          Tinder-Date
        </MailCommunicationOption>
      </MailCommunicationWrapper>
    </>
  );
}
