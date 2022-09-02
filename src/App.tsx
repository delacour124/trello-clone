import { AppContainer } from './style';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { Card } from './Card';



export const App = () => {
  return (
    // add defalt columns and cards
    <AppContainer >
      <Column text='To Do'>
        <Card text='Create react typeScript application'/>
        <Card text='React hooks practice'/>
      </Column>
      <Column text='In Progress'>
        <Card text='AlgoExpert'/>
      </Column>
      <Column text='Done'>
        <Card text='React practice' />
      </Column>
      <AddNewItem 
        toggleButtonText='+ Add another list'
        onAdd={console.log}
      />
    </AppContainer>
  );
};
