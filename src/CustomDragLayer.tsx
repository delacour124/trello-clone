import { useDragLayer } from "react-dnd";
import { Column } from "./components/Column"; // the dragged element
import { CustomDragLayerContainer, DragPreviewWrapper } from "./style";
import { useAppState } from "./state/AppStateContext"; // get the draggedItem from it
import { Card } from "./components/Card";



export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()
  }));

  return draggedItem && currentOffset? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === 'COLUMN'? (
          <Column
            id={draggedItem.id}
            text={draggedItem.text}
            isPreview
          />
        ) : (
          <Card 
            id={draggedItem.id}
            text={draggedItem.text}
            columnId={draggedItem.columnId}
            isPreview
          />
        )}
        
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
}