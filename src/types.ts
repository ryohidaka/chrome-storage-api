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
 * Type for storage keys. Can be a single string or an array of strings.
 */
export type StorageKeys = string | string[];
