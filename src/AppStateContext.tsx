import { createContext, useContext, FC } from 'react';

// use createContext() to define AppStateContext
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

// define prop type
type AppStateContextProps = {
  lists: List[],
  getTasksByListId(id: string): Task[],
}


// define type for the data structure, from smaller part to bigger part
type Task = {
  id: string,
  text: string,
}

type List = {
  id: string,
  text: string,
  tasks: Task[],
}

type AppState = {
  lists: List[],
}

// data structure in global for all component
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
export const AppStateProvider: FC = ({ children }) => {
  // define lists
  const { lists } = appData;
  // define getTasksByListId function
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)
  }
}