import { ColumnContainer, ColumnTitle } from "../style"
// if the component render children, need type FC to define children prop
import { Dispatch, FC } from 'react';
import { AddNewItem } from './AddNewItem'
// import global state
import { useAppState } from '../state/AppStateContext';
import { Card } from './Card';
import { addTask, moveList } from '../state/actions';
import { useItemDrag } from '../utils/useItemDrag';
import { useRef } from 'react';
import { useDrop } from 'react-dnd'
import { isHidden } from '../utils/isHidden';

// define a type for column props
type ColumnProps = {
  text: string
  id: string
}
// alternative way
// type ColumnProps = React.PropsWithChildren({
//   text: String
// })



export const Column = ({ text, id } : ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState(); // getTasksByListId is a function from useAppState (global state)
  const tasks = getTasksByListId(id); // tasks is an array of task
  
  // define ref to hold the dragged div
  const ref = useRef<HTMLDivElement>(null);
  

  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
      }
    }
  })

  // get drag method from useItemDrag customize hook, pass an obj of dragged column
  const { drag } = useItemDrag({type: 'COLUMN', id, text});

  
  drag(drop(ref));



  return (
    <ColumnContainer ref={ref} isHidden={isHidden(draggedItem, 'COLUMN', id)}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => {
        return <Card key={task.id} id={task.id} text={task.text} />
      })}
      <AddNewItem 
        toggleButtonText='+ Add another task'
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  )
}