import { Items, StorageArea, StorageKeys } from "./types";

/**
 * Asynchronously retrieves the value of one or more keys from the storage.
 * @param {StorageArea} area - The storage area ('sync', 'local', or 'managed') from which to retrieve.
 * @param {StorageKeys} keys - Either a single key, a list of keys, or an object to retrieve.
 * @returns {Promise<any>} A promise that resolves to the value(s) associated with the given key(s).
 */
export const getter = async (area: StorageArea, keys: StorageKeys) => {
  const result = await chrome.storage[area].get(keys);
  if (typeof keys === "string") {
    return result;
  }

  if (Array.isArray(keys)) {
    return keys.map((key) => result[key] ?? []);
  }

  const res: { [key: string]: any } = {};
  for (const [key, defaultValue] of Object.entries(keys)) {
    res[key] = result && key in result ? result[key] : defaultValue;
  }
  return res;
};

/**
 * Asynchronously stores one or more items in the storage.
 * @param {StorageArea} area - The storage area ('sync', 'local', 'managed' or 'session') in which to store the item.
 * @param {Object} items - An object which gives each key/value pair to update storage with.
 * @param {function} [callback] - Optional callback function to be executed after the set operation completes.
 */
export const setter = async (
  area: StorageArea,
  items: Items,
  callback?: () => void | undefined,
) => {
  chrome.storage[area].set(items, () => {
    callback?.();
  });
};
