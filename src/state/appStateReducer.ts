import { Action } from './actions';
// use this library to generate new list id
import { nanoid } from 'nanoid';

// define type for the data structure, from smaller part to bigger part
export type Task = {
  id: string,
  text: string,
}

export type List = {
  id: string,
  text: string,
  tasks: Task[],
}

export type AppState = {
  lists: List[],
}

// create reducer
export const appStateReducer = (draft: AppState, action: Action) : AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      // useImmerReducer is able to push the new list into state and return a new state
      draft.lists.push({
        id: nanoid(),
        text: action.payLoad,
        tasks: [],
      })
      break;
    }
    case 'ADD_TASK': {
      
      draft.lists.find(list => list.id === action.payLoad.listId)?.tasks.push({
        id: nanoid(),
        text: action.payLoad.text,
      })
      break;
    }
    default: {
      break
    }
  }
}