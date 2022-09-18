import { useDrag } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { DragItem } from '../DragItem';
import { setDraggedItem } from '../state/actions';
import { useEffect } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { DragPreviewContainer } from '../style';

// create a custom hook useItemDrag that return a drag method
export const useItemDrag = (item: DragItem) => {
  
  const { dispatch } = useAppState(); // context hook
  const [, drag, preview] = useDrag({ // take in an obj has type/item/end properties
    type: item.type, // could be COLUMN or CARD
    item: () => {
      dispatch(setDraggedItem(item)); // dispath setDraggedItem action with item
      return item; // return dragged item
    },
    end: () => dispatch(setDraggedItem(null)) // dispath setDraggedItem action, update draggedItem state to null
  })
  
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])

  return { drag }; // return drag method
}