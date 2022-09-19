import { ColumnContainer, ColumnTitle } from "../style"
// if the component render children, need type FC to define children prop
import { AddNewItem } from './AddNewItem'
// import global state
import { useAppState } from '../state/AppStateContext';
import { Card } from './Card';
import { addTask, moveList, moveTask, setDraggedItem } from '../state/actions';
import { useItemDrag } from '../utils/useItemDrag';
import { useRef } from 'react';
import { useDrop } from 'react-dnd'
import { isHidden } from '../utils/isHidden';
import { CustomDragLayer } from '../CustomDragLayer'

// define a type for column props
type ColumnProps = {
  text: string,
  id: string,
  isPreview?: boolean,
}
// alternative way
// type ColumnProps = React.PropsWithChildren({
//   text: String
// })



export const Column = ({ text, id, isPreview } : ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState(); // getTasksByListId is a function from useAppState (global state)
  const tasks = getTasksByListId(id); // tasks is an array of task
  
  // define ref to hold the dragged div
  const ref = useRef<HTMLDivElement>(null);
  

  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'], // also accept card, so can move card to an empty column
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
      } else {
        if (draggedItem.columnId === id && tasks.length) {
          return;
        }
        dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
      }
    }
  })

  // get drag method from useItemDrag customize hook, pass an obj of dragged column
  const { drag } = useItemDrag({type: 'COLUMN', id, text});
  drag(drop(ref));



  return (
    <ColumnContainer 
      ref={ref} 
      isHidden={isHidden(draggedItem, 'COLUMN', id, isPreview)}
      isPreview={isPreview}
    >
      <ColumnTitle>{text}</ColumnTitle>
      <CustomDragLayer />
      {tasks.map((task) => {
        return <Card key={task.id} id={task.id} columnId={id} text={task.text} />
      })}
      <AddNewItem 
        toggleButtonText='+ Add another task'
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  )
}