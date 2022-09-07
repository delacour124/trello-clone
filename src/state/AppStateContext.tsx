import React, { createContext, useContext, FC, Dispatch } from 'react';
import { AppState, List, Task, appStateReducer } from './appStateReducer';
import { Action } from './actions';
import { useImmerReducer } from 'use-immer';


// use createContext() to creat AppStateContext
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

// define prop type
type AppStateContextProps = {
  lists: List[],
  getTasksByListId(id: string): Task[],
  dispatch: Dispatch<Action>
}


// data structure in global for all component, initial state
const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [
        {id: 'c0', text: 'Create react typeScript application'},
        {id: 'c1', text: 'React hooks practice'},
      ]
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [
        {id: 'c2', text: 'AlgoExpert'}
      ]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [
        {id: 'c3', text: 'React practice'}
      ]
    }
  ]
}

// define AppStateProvider
export const AppStateProvider: FC<any> = ({ children }) => {
  // create immeruseReducer hook
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  
  // define lists equal to the updated state
  const { lists } = state;
  console.log(lists);
  // define getTasksByListId function
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }
  
  // value is passed down to children, passed to all components
  return (
    <AppStateContext.Provider value={{lists, getTasksByListId, dispatch}}>
      {children}
    </AppStateContext.Provider>
  )
}

// define hook useContext
export const useAppState = () => {
  return useContext(AppStateContext)
}