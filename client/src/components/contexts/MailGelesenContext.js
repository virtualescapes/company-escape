import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MailGelesenContext = createContext();

export const MailGelesenProvider = ({ children }) => {
  const [activeGelesen, setActiveGelesen] = useState('redaktion');

  return (
    <MailGelesenContext.Provider value={[activeGelesen, setActiveGelesen]}>
      {children}
    </MailGelesenContext.Provider>
  );
};

MailGelesenProvider.propTypes = {
  children: PropTypes.any,
};
