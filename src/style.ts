import styled from 'styled-components';

export const AppContainer = styled.div`
  align-items: flex-start; 
  background-color: #317080;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px 40px;
  width: 100%;
`

// hide original dragged item (interface is able to extend)
interface DragPreviewContainerProps {
  isHidden?: boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${props => (props.isHidden ? 0.3 : 1)};
`

// extend DragPreviewContainer
export const ColumnContainer = styled(DragPreviewContainer)` 
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`

/******************************
 add new list/tast button prop
*******************************/
type AddItemButtonProps = {
  dark? : boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark? '#000' : '#fff')};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`

/******************
 add new task form
*******************/
export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start
`
// prop type is input !!!!!!!!!!! otherwise the attribute will give error
export const NewItemInput = styled.input` 
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`
// create button  // prop type is button
export const NewItemButton = styled.button` 
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`

