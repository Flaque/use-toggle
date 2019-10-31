import { useState } from "react";

/**
 * Like setState, but just toggles on and off.
 */
export default function useToggle(
  defaultState: boolean
): [boolean, () => void] {
  const [value, setValue] = useState(defaultState);

  return [
    value,
    () => {
      setValue(!value);
    }
  ];
}
