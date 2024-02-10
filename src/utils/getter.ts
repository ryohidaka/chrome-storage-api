import { Items, StorageArea, StorageKeys } from "../types";

/**
 * Asynchronously retrieves the value of one or more keys from the storage.
 * @param {StorageArea} area - The storage area ('sync', 'local', or 'managed') from which to retrieve.
 * @param {StorageKeys} keys - Either a single key, a list of keys, or an object to retrieve.
 * @param {function} [callback] - Optional callback function that will be called with the retrieved items.
 * @returns {Promise<any>} A promise that resolves to the value(s) associated with the given key(s).
 */
export const getter = async (
  area: StorageArea,
  keys: StorageKeys,
  callback?: (items: Items) => void,
) => {
  const result = await chrome.storage[area].get(keys);
  if (typeof keys === "string") {
    callback?.({ [keys]: result });
    return result;
  }

  if (Array.isArray(keys)) {
    callback?.(result);
    return keys.map((key) => result[key] ?? []);
  }

  const res: { [key: string]: any } = {};
  for (const [key, defaultValue] of Object.entries(keys)) {
    res[key] = result && key in result ? result[key] : defaultValue;
  }
  callback?.(res);
  return res;
};
