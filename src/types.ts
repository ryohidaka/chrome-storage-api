/**
 * Enum for different types of storage areas.
 *
 * @see https://developer.chrome.com/docs/extensions/reference/api/storage#storage_areas
 */
export enum StorageArea {
  /**
   * Local storage area. Data is stored on the user's device.
   */
  Local = "local",

  /**
   * Sync storage area. Data is synced across all instances of the application where the user is logged in.
   */
  Sync = "sync",

  /**
   * Managed storage area. Data is set by the domain administrator or other authorized entity and can't be modified by the user.
   */
  Managed = "managed",

  /**
   * Session storage area. Data is stored only for the duration of the session.
   */
  Session = "session",
}

/**
 * Type for storage keys. Can be a single string, an array of strings or object.
 */
export type StorageKeys = string | string[] | Object;

/**
 * Type for setting multiple items in storage.
 * This is an object where each property is a key in storage and its value is the data to be stored.
 * The value can be of any type.
 */
export type SetItems = { [key: string]: any };
