import { DragItem } from "../DragItem"

export type Action = 
| {
    type: 'ADD_LIST',
    payLoad: string,
  }
| {
    type: 'ADD_TASK',
    payLoad: {text: string, listId: string}
  }
| {
    type: 'MOVE_LIST',
    payLoad: {draggedId: string, hoverId: string}
  }
| {
    type: 'SET_DRAGGED_ITEM',
    payLoad: DragItem | null
  }


// action creator
export const addList = (text: string): Action => ({
  type: 'ADD_LIST', 
  payLoad: text,
});

export const addTask = (text: string, listId: string): Action => ({
  type: 'ADD_TASK', 
  payLoad: {text, listId},
})

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: 'MOVE_LIST',
  payLoad: {draggedId, hoverId}
})

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: 'SET_DRAGGED_ITEM',
  payLoad: draggedItem
})