// create a function to find index of certain id
type Item = { // item needs to have an id property
  id: string
}
export const findItemIndexById = <TItem extends Item>(array: TItem[], id: string) => {
  return array.findIndex(item => item.id === id);
}



// declare a function to move item in array
export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  // store the moved item in item variable
  const item = array[from];
  // use removeItemAtIndex to remove the item from original array, 
  // then use insertItemAtIndex to insert item at new index
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
}

export const removeItemAtIndex = <TItem>(array: TItem[], from: number) => {
  // return a new array
  return [...array.slice(0, from), ...array.slice(from + 1)];
}

export const insertItemAtIndex = <TItem>(array: TItem[], item: TItem, to: number) => {
  return [...array.slice(0, to), item, ...array.slice(to)];
}