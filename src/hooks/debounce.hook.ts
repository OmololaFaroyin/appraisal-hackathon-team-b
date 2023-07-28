import { useCallback, useRef, useState } from 'react';

/**
 * Helper function that delays the input read by a number of seconds
 * 
 * @param {number} delay - in milliseconds 
 * 
 * @returns {object} {debounced value, setter}
 */

export default function useDebounce<T>(delay: number) {
  const [debouncedValue, setValue] = useState<T>();
  let timeout = useRef<any>();
  const setDebouncedValue = useCallback(
    (value: T) => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setValue(value);
      }, delay);
    },
    [delay]
  );
  return { debouncedValue, setDebouncedValue };
}
