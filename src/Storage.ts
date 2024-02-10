import { Items, StorageArea, StorageKeys } from "./types";
import { getter, push, setter } from "./utils";

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
     * @param callback Optional callback function to be executed after retrieving the value. The function takes the retrieved items as a parameter.
     * @returns A promise that resolves with the values of the keys.
     */
    get: async (keys: StorageKeys, callback?: (items: Items) => void) =>
      getter(StorageArea.Local, keys, callback),

    /**
     * Sets the value of multiple items in the local storage area.
     * @param items An object containing one or more key-value pairs to be set.
     * @param callback Optional callback function to be executed after setting the value.
     */
    set: async (items: Items, callback?: () => void) =>
      setter(StorageArea.Local, items, callback),

    /**
     * Pushes values to a specified key in the Chrome storage.
     *
     * @param {StorageArea} area - The storage area ('local', 'sync', or 'managed') where the data will be stored.
     * @param {string} key - The key under which the data will be stored.
     * @param {any[]} values - The values to be pushed to the array stored under the specified key.
     * @param {() => void | undefined} [callback] - Optional callback function that will be executed after the data is stored.
     *
     * @returns {Promise<void>} Returns a Promise that resolves when the data has been stored.
     * @throws {Error} Throws an error if the result is not an array.
     */
    push: async (
      key: string,
      values: any[],
      callback?: () => void,
    ): Promise<void> => push(StorageArea.Local, key, values, callback),
  },

  /**
   * Sync storage area.
   */
  Sync: {
    /**
     * Retrieves the value of the specified keys from the sync storage area.
     * @param keys The keys of the items to be retrieved.
     * @param callback Optional callback function to be executed after retrieving the value. The function takes the retrieved items as a parameter.
     * @returns A promise that resolves with the values of the keys.
     */
    get: async (keys: StorageKeys, callback?: (items: Items) => void) =>
      getter(StorageArea.Sync, keys, callback),

    /**
     * Sets the value of multiple items in the sync storage area.
     * @param items An object containing one or more key-value pairs to be set.
     * @param callback Optional callback function to be executed after setting the value.
     */
    set: async (items: Items, callback?: () => void) =>
      setter(StorageArea.Sync, items, callback),

    /**
     * Pushes values to a specified key in the Chrome storage.
     *
     * @param {StorageArea} area - The storage area ('local', 'sync', or 'managed') where the data will be stored.
     * @param {string} key - The key under which the data will be stored.
     * @param {any[]} values - The values to be pushed to the array stored under the specified key.
     * @param {() => void | undefined} [callback] - Optional callback function that will be executed after the data is stored.
     *
     * @returns {Promise<void>} Returns a Promise that resolves when the data has been stored.
     * @throws {Error} Throws an error if the result is not an array.
     */
    push: async (
      key: string,
      values: any[],
      callback?: () => void,
    ): Promise<void> => push(StorageArea.Sync, key, values, callback),
  },

  /**
   * Managed storage area.
   */
  Managed: {
    /**
     * Retrieves the value of the specified keys from the managed storage area.
     * @param keys The keys of the items to be retrieved.
     * @param callback Optional callback function to be executed after retrieving the value. The function takes the retrieved items as a parameter.
     * @returns A promise that resolves with the values of the keys.
     */
    get: async (keys: StorageKeys, callback?: () => void) =>
      getter(StorageArea.Managed, keys, callback),
  },

  /**
   * Session storage area.
   */
  Session: {
    /**
     * Retrieves the value of the specified keys from the session storage area.
     * @param keys The keys of the items to be retrieved.
     * @param callback Optional callback function to be executed after retrieving the value. The function takes the retrieved items as a parameter.
     * @returns A promise that resolves with the values of the keys.
     */
    get: async (keys: StorageKeys, callback?: () => void) =>
      getter(StorageArea.Session, keys, callback),

    /**
     * Sets the value of multiple items in the session storage area.
     * @param items An object containing one or more key-value pairs to be set.
     * @param callback Optional callback function to be executed after setting the value.
     */
    set: async (items: Items, callback?: () => void) =>
      setter(StorageArea.Session, items, callback),

    /**
     * Pushes values to a specified key in the Chrome storage.
     *
     * @param {StorageArea} area - The storage area ('local', 'sync', or 'managed') where the data will be stored.
     * @param {string} key - The key under which the data will be stored.
     * @param {any[]} values - The values to be pushed to the array stored under the specified key.
     * @param {() => void | undefined} [callback] - Optional callback function that will be executed after the data is stored.
     *
     * @returns {Promise<void>} Returns a Promise that resolves when the data has been stored.
     * @throws {Error} Throws an error if the result is not an array.
     */
    push: async (
      key: string,
      values: any[],
      callback?: () => void,
    ): Promise<void> => push(StorageArea.Session, key, values, callback),
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
