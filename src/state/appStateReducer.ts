import { Action } from './actions';
// use this library to generate new list id
import { nanoid } from 'nanoid';
import { moveItem, findItemIndexById } from '../utils/arrayUtils';
import { DragItem } from '../DragItem';

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
  draggedItem: DragItem | null
}

// create reducer
export const appStateReducer = (draft: AppState, action: Action) : AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      // useImmerReducer is able to push the new list into state and return a new state
      draft.lists.push({
        id: nanoid(), // this npm package auto generate new id
        text: action.payLoad,
        tasks: [],
      })
      break;
    }
    case 'ADD_TASK': {
      // worked with my way!
      draft.lists.find(list => list.id === action.payLoad.listId)?.tasks.push({
        id: nanoid(),
        text: action.payLoad.text,
      })
      break;
    }
    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payLoad;
      let from = findItemIndexById(draft.lists, draggedId);
      let to = findItemIndexById(draft.lists, hoverId);
      moveItem(draft.lists, from, to);
      break;
    }
    case 'SET_DRAGGED_ITEM': { 
      draft.draggedItem = action.payLoad // update draggedItem in state
      break
    }
    default: {
      break
    }
  }
}