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
};
