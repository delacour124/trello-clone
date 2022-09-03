import React, { useState } from "react";
import { NewItemFormContainer, NewItemInput, NewItemButton } from './style';
import { useFocus } from './useFocus';

// define NewItemFormProps type
type NewItemFormProps = {
  onAdd(text: string) : void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  // create text state, while user typing in input, will update text state
  const [text, setText] = useState('');
  const inputRef = useFocus();

  // create a function, submit input when hit enter key
  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAdd(text);
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput 
        value={text} 
        onChange={(e) => setText((e.target.value))}
        ref={inputRef}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}