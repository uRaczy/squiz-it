import React, { useContext, useState, useEffect } from 'react';

import tempFetch from './tempFetch';

const OriginalListContext = React.createContext();
const ListContext = React.createContext();
const ListUpdateContext = React.createContext();
const ListResetContext = React.createContext();

export const useOriginalList = () => {
  return useContext(OriginalListContext);
}

export const useList = () => {
  return useContext(ListContext);
}

export const useListUpdate = () => {
  return useContext(ListUpdateContext);
}

export const useListReset = () => {
  return useContext(ListResetContext);
}

export const ListProvider = ({ children }) => {
  const [originalList, setOriginalList] = useState([]);
  const [modifiedList, setModifiedList] = useState([]);

  const updateList = (data) => {
    setModifiedList(data);
  }

  const resetList = () => {
    setModifiedList(originalList);
  }

  useEffect(() => {
    setOriginalList(tempFetch);
    console.log(originalList);
  }, [tempFetch, originalList])

  return (
    <OriginalListContext.Provider value={originalList}>
      <ListContext.Provider value={modifiedList}>
        <ListUpdateContext.Provider value={updateList}>
          <ListResetContext.Provider value={resetList}>
            {children}
          </ListResetContext.Provider>
        </ListUpdateContext.Provider>
      </ListContext.Provider>
    </OriginalListContext.Provider>
  )
}

export default ListProvider;