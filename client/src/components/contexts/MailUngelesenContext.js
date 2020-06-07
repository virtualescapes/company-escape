import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MailUngelesenContext = createContext();

export const MailUngelesenProvider = ({ children }) => {
  const [activeUngelesen, setActiveUngelesen] = useState('redaktion');

  return (
    <MailUngelesenContext.Provider
      value={[activeUngelesen, setActiveUngelesen]}
    >
      {children}
    </MailUngelesenContext.Provider>
  );
};

MailUngelesenProvider.propTypes = {
  children: PropTypes.any,
};
