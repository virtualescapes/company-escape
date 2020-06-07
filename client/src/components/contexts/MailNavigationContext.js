import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MailNavigationContext = createContext();

export const MailNavigationProvider = ({ children }) => {
  const [activeNavigation, setActiveNavigation] = useState('gelesen');

  return (
    <MailNavigationContext.Provider
      value={[activeNavigation, setActiveNavigation]}
    >
      {children}
    </MailNavigationContext.Provider>
  );
};

MailNavigationProvider.propTypes = {
  children: PropTypes.any,
};
