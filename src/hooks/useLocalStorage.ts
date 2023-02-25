import { useEffect, useState } from "react";

export function useLocalStorage<ValueType>(
  key: string,
  initialValue: ValueType | (() => ValueType)
) {
  const [value, setValue] = useState<ValueType>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => ValueType)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
