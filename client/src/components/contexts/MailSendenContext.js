import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MailSendenContext = createContext();

export const MailSendenProvider = ({ children }) => {
  const [activeSenden, setActiveSenden] = useState('redaktion');

  return (
    <MailSendenContext.Provider value={[activeSenden, setActiveSenden]}>
      {children}
    </MailSendenContext.Provider>
  );
};

MailSendenProvider.propTypes = {
  children: PropTypes.any,
};
