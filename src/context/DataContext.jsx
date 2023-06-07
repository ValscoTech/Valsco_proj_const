import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [co2data, setData] = useState({});

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ co2data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
