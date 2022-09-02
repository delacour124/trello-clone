import { useState } from 'react';
import { AddItemButton, NewItemButton } from './style';
import { NewItemForm } from './NewItemForm';

// this reusuable component is for adding new task or new list. click on the button will show the input form

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean; // this boolean decide the button is for add new list or new task
}

// add 
export const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps) => {
  // create hooks and state
  // when showForm is true, will display input and create button
  // when it is false, will show toggleButtonText on the button
  const [showForm, setShowForm] = useState(false);
  // const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    // render form and able to add new item
    return (
      // onAdd= is an attribute which will pass to NewItemForm as a prop
      // onAdd(text) is a function which take input text as variable
      <NewItemForm onAdd={(text) => {
        onAdd(text);
        setShowForm(false);
      }}/>
    )
  }
  return (
    // add new list/task button
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}