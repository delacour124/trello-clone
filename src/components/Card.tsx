import { CardContainer } from '../style';
import { useAppState } from '../state/AppStateContext';
import { moveTask } from '../state/actions';
import { useItemDrag } from '../utils/useItemDrag';
import { useRef } from 'react';
import { useDrop } from 'react-dnd'
import { isHidden } from '../utils/isHidden';

type CardProps = {
  text : string,
  id: string,
  columnId: string,
  isPreview? : boolean,
}

export const Card = ({ text, id, columnId, isPreview }: CardProps) => {
  const { draggedItem, dispatch } = useAppState();
  
  const ref = useRef<HTMLDivElement>(null);
  
  const { drag } = useItemDrag({id, columnId, text, type: 'CARD'});
  const [, drop] = useDrop({
    accept: 'CARD',
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === 'CARD') {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
      }
    }
  })
  drag(drop(ref))
  
  return (
    <CardContainer
      ref={ref}
      isHidden={isHidden(draggedItem, 'CARD', id, isPreview)}
      isPreview={isPreview}
    >
      {text}
    </CardContainer>
  )
}