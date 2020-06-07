import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MailGesendetContext = createContext();

export const MailGesendetProvider = ({ children }) => {
  const [activeGesendet, setActiveGesendet] = useState('abc');

  return (
    <MailGesendetContext.Provider value={[activeGesendet, setActiveGesendet]}>
      {children}
    </MailGesendetContext.Provider>
  );
};

MailGesendetProvider.propTypes = {
  children: PropTypes.any,
};
