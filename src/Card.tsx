import { CardContainer } from './style';

type CardProps = {
  text : String;
}

export const Card = ({ text }: CardProps) => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  )
}