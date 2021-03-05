import { useState } from "react";
import * as Cookies from "js-cookie";

/**
 * useCookie - React Hook for Cookies based on js-cookie
 * @param {string} key Cookie name
 * @param {Object|string} [initialValue]  Value will be assign if cookie doesn't exist.
 * @returns {Array} Returns cookie value, and the function to update it.
 */
export function useUserCookie(key, initialValue) {
  const [user, setItem] = useState(() => {
    const result = Cookies.get(key) || initialValue;
    if (result === "") return initialValue;
    return JSON.parse(result);
  });

  /**
   * Set value of cookie
   * @param {Object|string} value
   * @param {Cookies.CookieAttributes} [options]
   */
  const setValue = (value, options) => {
    setItem(value);
    Cookies.set(key, value, options);
  };

  return [user, setValue];
}

export default useUserCookie;
