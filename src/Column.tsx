import { ColumnContainer, ColumnTitle } from "./style"
// if the component render children, need type FC to define children prop
import { FC } from 'react';

// define a type for column props
type ColumnProps = {
  text: String
  children? : React.ReactNode; // children prop is optional
}
// alternative way
// type ColumnProps = React.PropsWithChildren({
//   text: String
// })



export const Column : FC<ColumnProps> = ({ text, children} : ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}