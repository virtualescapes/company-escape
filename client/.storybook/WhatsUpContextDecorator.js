import React from 'react';
import { WhatsUpModalProvider } from '../src/components/contexts/WhatsUpModalContext';

const WhatsUpContextDecorator = (storyFn) => (
  <>
    <WhatsUpModalProvider>{storyFn()}</WhatsUpModalProvider>
  </>
);

export default WhatsUpContextDecorator;
