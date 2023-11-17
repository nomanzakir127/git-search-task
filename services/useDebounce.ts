import { useState } from "react";

type FuncType = (...args: any[]) => void;
type Timer = ReturnType<typeof setTimeout>;

function useDebounce<Func extends FuncType>(func: Func, delay:any) {
  const [timer, setTimer] = useState<Timer>(); //Create timer state

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer); 
    setTimer(newTimer); 
  }) as Func;

  return debouncedFunction;
}

export { useDebounce };