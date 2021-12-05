import React, { useContext, useState } from 'react';

const SetOriginalListContext = React.createContext();
const UseOriginalListContext = React.createContext();
const SetListContext = React.createContext();
const UseListContext = React.createContext();
const ResetListContext = React.createContext();

export const useOriginalList = () => {
  return useContext(UseOriginalListContext);
}

export const useOriginalListUpdate = () => {
  return useContext(SetOriginalListContext);
}

export const useList = () => {
  return useContext(UseListContext);
}

export const useListUpdate = () => {
  return useContext(SetListContext);
}

export const useListReset = () => {
  return useContext(ResetListContext);
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

  const updateOriginalList = (data) => {
    setOriginalList(data);
  }


  return (
    <UseOriginalListContext.Provider value={originalList}>
      <SetOriginalListContext.Provider value={updateOriginalList}>
        <UseListContext.Provider value={modifiedList}>
          <SetListContext.Provider value={updateList}>
            <ResetListContext.Provider value={resetList}>
              {children}
            </ResetListContext.Provider>
          </SetListContext.Provider>
        </UseListContext.Provider>
      </SetOriginalListContext.Provider>
    </UseOriginalListContext.Provider>
  )
}

export default ListProvider;