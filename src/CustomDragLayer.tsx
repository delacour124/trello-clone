import { useDragLayer } from "react-dnd";
import { Column } from "./components/Column"; // the dragged element
import { CustomDragLayerContainer, DragPreviewWrapper } from "./style";
import { useAppState } from "./state/AppStateContext"; // get the draggedItem from it



export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()
  }));

  return draggedItem && currentOffset? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Column
          id={draggedItem.id}
          text={draggedItem.text}
          isPreview
        />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
}