export type Action = 
| {
    type: 'ADD_LIST',
    payLoad: string,
  }
| {
    type: 'ADD_TASK',
    payLoad: {text: string, listId: string}
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