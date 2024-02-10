import { Items, StorageArea } from "../types";

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
