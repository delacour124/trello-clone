import { useRef, useEffect } from 'react';

// this useFocus hook help to focus on the input box when clicked add new item button
export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus(); // when ref.current is truethy, call focus()
  },[])

  return ref;
}