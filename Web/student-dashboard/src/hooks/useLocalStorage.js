import { useState, useEffect } from "react";
import { defaultData } from "../defaultData";

export default function useLocalStorage(key, initial) {
  const storageKey = "sud_" + key;
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw);
      // if not present, initialize from defaultData if available
      if (defaultData && defaultData[key] !== undefined) {
        localStorage.setItem(storageKey, JSON.stringify(defaultData[key]));
        return defaultData[key];
      }
      localStorage.setItem(storageKey, JSON.stringify(initial));
      return initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {}
  }, [storageKey, state]);

  return [state, setState];
}