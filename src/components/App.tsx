import { AppContainer } from '../style';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { useAppState } from '../state/AppStateContext';
import { addList } from '../state/actions';



export const App = () => {
  // get lists and dispatch from useAppState hook
  const { lists, dispatch } = useAppState();

  return (
    // add defalt columns and cards
    <AppContainer >
      {lists.map((list) => {
        return <Column key={list.id} id={list.id} text={list.text} />
      })}
      <AddNewItem 
        toggleButtonText='+ Add another list'
        onAdd={text => dispatch(addList(text))}
      />
    </AppContainer>
  );
};
