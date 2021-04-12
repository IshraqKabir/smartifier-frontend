import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useLocalState = (key: string, defaultValue: any) => {
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

    setInterval(() => {
      if (JSON.stringify(getCookie(key)) != JSON.stringify(value)) {
        setValueState(getCookie(key));
      }
    }, 500);

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

      setCookie(key, value);
      localStorage.setItem(key, JSON.stringify(value));

      return value;
    });
  };

  return [value, setValue];
};

export default useLocalState;

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

// function useLocalState<T>(key: string, defaultValue: T) {
//   const [value, setValue] = useState(() => {
//     if (isLocalStorageWorking() == false) {
//       return getCookie(key);
//     }

//     let result = null;
//     if (process.browser) {
//       const storedValue = localStorage.getItem(key)
//         ? JSON.parse(localStorage.getItem(key))
//         : localStorage.getItem(key);

//       if (!storedValue) {
//         result = defaultValue;
//       }
//       result = storedValue === null ? defaultValue : storedValue;
//     } else {
//       result = defaultValue;
//     }

//     return result;
//   });

//   useEffect(() => {
//     const listener = (e) => {
//       if (e.storageArea === localStorage && e.key === key) {
//         setValue(JSON.parse(e.newValue));
//       }
//     };
//     window.addEventListener("storage", listener);

//     return () => {
//       window.removeEventListener("storage", listener);
//     };
//   }, [key]);

//   const setValueInLocalStorage = (newValue) => {
//     setValue((currentValue) => {
//       let value = null;
//       if (typeof newValue === "function") {
//         setCookie(key, newValue(currentValue));
//         value = newValue(currentValue);
//       } else {
//         setCookie(key, newValue);
//         value = newValue;
//       }
//       // const result =
//       //   typeof newValue === "function" ? newValue(currentValue) : newValue;
//       // localStorage.setItem(key, JSON.stringify(result));
//       return value;
//     });
//   };

//   useEffect(() => {
//     const storedValue = JSON.parse(localStorage.getItem(key));
//     if (storedValue) {
//       setValueInLocalStorage(storedValue);
//     } else {
//       setValueInLocalStorage(value);
//     }
//   }, []);

//   return [value, setValueInLocalStorage];
// }

// export default useLocalState;
