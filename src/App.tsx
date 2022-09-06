import { AppContainer } from './style';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { useAppState } from './AppStateContext';



export const App = () => {
  const { lists } = useAppState();

  return (
    // add defalt columns and cards
    <AppContainer >
      {lists.map((list) => {
        return <Column key={list.id} id={list.id} text={list.text} />
      })}
      <AddNewItem 
        toggleButtonText='+ Add another list'
        onAdd={console.log}
      />
    </AppContainer>
  );
};
