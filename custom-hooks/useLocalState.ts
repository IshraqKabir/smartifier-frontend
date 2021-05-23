import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function useLocalState<T>(key: string, defaultValue: any) {
  const [value, setValueState] = useState(() => {
    if (process.browser) {
      return getValue(key);
    }
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValueState(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", listener);

    if (!isLocalStorageWorking()) {
      setInterval(() => {
        if (JSON.stringify(getCookie(key)) != JSON.stringify(value)) {
          setValueState(getCookie(key));
        }
      }, 500);
    }

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key]);

  const setValue = (newValue) => {
    setValueState((currentValue) => {
      let value = null;

      if (typeof newValue === "function") {
        value = newValue(currentValue);
      } else {
        value = newValue;
      }

      if (isLocalStorageWorking()) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        setCookie(key, value);
      }

      return value;
    });
  };

  return [value, setValue];
}

const getValue = (key) => {
  if (isLocalStorageWorking()) {
    // return from local storage
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : value;
  }

  // return from cookie;
  return getCookie(key);
};

const isLocalStorageWorking = (): boolean => {
  return true;
  const key = "local-storage-test";
  const value = 19;

  localStorage.setItem(key, JSON.stringify(value));

  if (JSON.parse(localStorage.getItem(key)) == value) {
    console.log("working");
    return true;
  }

  console.log("not working");
  return false;
};

const setCookie = (key, value) => {
  Cookies.set(
    key ? JSON.stringify(key) : key,
    value ? JSON.stringify(value) : value
  );
};

const getCookie = (key) => {
  const result = Cookies.get(JSON.stringify(key));
  return result ? JSON.parse(result) : result;
};
