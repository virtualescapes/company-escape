import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FinstagramChatModalContext = createContext();

export const FinstagramChatModalProvider = ({ children }) => {
  const [activeChatModal, setActiveChatModal] = useState(false);

  return (
    <FinstagramChatModalContext.Provider
      value={[activeChatModal, setActiveChatModal]}
    >
      {children}
    </FinstagramChatModalContext.Provider>
  );
};

FinstagramChatModalProvider.propTypes = {
  children: PropTypes.any,
};
