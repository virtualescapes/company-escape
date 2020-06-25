import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FinstagramPostModalContext = createContext();

export const FinstagramPostModalProvider = ({ children }) => {
  const [activePostModal, setActivePostModal] = useState(false);

  return (
    <FinstagramPostModalContext.Provider
      value={[activePostModal, setActivePostModal]}
    >
      {children}
    </FinstagramPostModalContext.Provider>
  );
};

FinstagramPostModalProvider.propTypes = {
  children: PropTypes.any,
};
