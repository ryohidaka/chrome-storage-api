import { SetItems, StorageArea, StorageKeys } from "./types";
import { getter, setter } from "./utils";

/**
 * Storage object that provides methods to interact with different storage areas.
 */
export const Storage = {
  /**
   * Local storage area.
   */
  Local: {
    /**
     * Retrieves the value of the specified keys from the local storage area.
     * @param keys The keys of the items to be retrieved.
     * @returns A promise that resolves with the values of the keys.
     */
    get: async (keys: StorageKeys) => getter(StorageArea.Local, keys),

    /**
     * Sets the value of multiple items in the local storage area.
     * @param items An object containing one or more key-value pairs to be set.
     * @param callback Optional callback function to be executed after setting the value.
     */
    set: async (items: SetItems, callback?: () => void) =>
      setter(StorageArea.Local, items, callback),
  },

  /**
   * Sync storage area.
   */
  Sync: {
    /**
     * Retrieves the value of the specified keys from the sync storage area.
     * @param keys The keys of the items to be retrieved.
     * @returns A promise that resolves with the values of the keys.
     */
    get: async (keys: StorageKeys) => getter(StorageArea.Sync, keys),

    /**
     * Sets the value of multiple items in the sync storage area.
     * @param items An object containing one or more key-value pairs to be set.
     * @param callback Optional callback function to be executed after setting the value.
     */
    set: async (items: SetItems, callback?: () => void) =>
      setter(StorageArea.Sync, items, callback),
  },

  /**
   * Managed storage area.
   */
  Managed: {
    /**
     * Retrieves the value of the specified keys from the managed storage area.
     * @param keys The keys of the items to be retrieved.
     * @returns A promise that resolves with the values of the keys.
     */
    get: async (keys: StorageKeys) => getter(StorageArea.Managed, keys),
  },

  /**
   * Session storage area.
   */
  Session: {
    /**
     * Retrieves the value of the specified keys from the session storage area.
     * @param keys The keys of the items to be retrieved.
     * @returns A promise that resolves with the values of the keys.
     */
    get: async (keys: StorageKeys) => getter(StorageArea.Session, keys),

    /**
     * Sets the value of multiple items in the session storage area.
     * @param items An object containing one or more key-value pairs to be set.
     * @param callback Optional callback function to be executed after setting the value.
     */
    set: async (items: SetItems, callback?: () => void) =>
      setter(StorageArea.Session, items, callback),
  },

  /**
   * This method registers a listener for changes in the Chrome storage area.
   *
   * @param callback - A function that will be called when a storage change event occurs.
   *   This function takes two parameters:
   *     - changes: Object mapping each key that changed to its corresponding StorageChange for that item.
   *     - areaName: The name of the storage area ('sync', 'local', 'managed' or 'session') the changes are for.
   */
  onChange: (
    callback: (
      changes: { [key: string]: chrome.storage.StorageChange },
      areaName: string,
    ) => void,
  ) => {
    chrome.storage.onChanged.addListener(callback);
  },
};
