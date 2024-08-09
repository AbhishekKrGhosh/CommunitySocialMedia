import React, { createContext, useState, useContext } from 'react';

const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [activity, setActivity] = useState("")

  return (
    <CommunityContext.Provider value={{ selectedCommunity, setSelectedCommunity, activity,  setActivity}}>
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunity = () => useContext(CommunityContext);
