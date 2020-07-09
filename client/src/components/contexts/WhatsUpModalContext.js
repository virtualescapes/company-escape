import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const WhatsUpModalContext = createContext();

export const WhatsUpModalProvider = ({ children }) => {
  const [activeWhatsUpModal, setActiveWhatsUpModal] = useState(false);

  return (
    <WhatsUpModalContext.Provider
      value={[activeWhatsUpModal, setActiveWhatsUpModal]}
    >
      {children}
    </WhatsUpModalContext.Provider>
  );
};

WhatsUpModalProvider.propTypes = {
  children: PropTypes.any,
};
