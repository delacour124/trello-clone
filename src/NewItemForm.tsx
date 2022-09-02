import { useState } from "react";
import { NewItemFormContainer, NewItemInput, NewItemButton } from './style';

// define NewItemFormProps type
type NewItemFormProps = {
  onAdd(text: string) : void;
  // value?: string;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  // create text state, while user typing in input, will update text state
  const [text, setText] = useState('');

  return (
    <NewItemFormContainer>
      <NewItemInput 
        value={text} 
        onChange={(e) => setText((e.target.value))} 
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}