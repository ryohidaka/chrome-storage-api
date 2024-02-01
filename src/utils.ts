import { StorageArea, StorageKeys } from "./types";

/**
 * Asynchronously retrieves the value of one or more keys from the storage.
 * @param {StorageArea} area - The storage area ('sync', 'local', or 'managed') from which to retrieve.
 * @param {StorageKeys} keys - Either a single key or a list of keys to retrieve.
 * @returns {Promise<any>} A promise that resolves to the value(s) associated with the given key(s).
 */
export const getter = async (area: StorageArea, keys: StorageKeys) => {
  const result = await chrome.storage[area].get(keys);
  if (typeof keys === "string") {
    return result;
  } else {
    return keys.map((key) => result[key] ?? []);
  }
};
