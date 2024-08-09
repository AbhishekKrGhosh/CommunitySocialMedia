import React, { createContext, useState, useContext } from 'react';

const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  return (
    <CommunityContext.Provider value={{ selectedCommunity, setSelectedCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunity = () => useContext(CommunityContext);
