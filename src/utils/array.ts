import { StorageArea } from "../types";
import { getter } from "./getter";

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
export const push = async (
  area: StorageArea,
  key: string,
  values: any[],
  callback?: () => void | undefined,
): Promise<void> => {
  const result = await getter(area, key);
  if (!Array.isArray(result) && !Array.isArray(result[key])) {
    throw new Error(`The value of ${area}/${key} is not an array.`);
  }
  let arr = Array.isArray(result) ? result : result[key] ? result[key] : [];
  arr.push(...values);
  chrome.storage[area].set({ [key]: arr }, () => {
    callback?.();
  });
};

/**
 * Unshifts values to a specified key in the Chrome storage.
 *
 * @param {StorageArea} area - The storage area ('local', 'sync', or 'managed') where the data will be stored.
 * @param {string} key - The key under which the data will be stored.
 * @param {any[]} values - The values to be pushed to the array stored under the specified key.
 * @param {() => void | undefined} [callback] - Optional callback function that will be executed after the data is stored.
 *
 * @returns {Promise<void>} Returns a Promise that resolves when the data has been stored.
 * @throws {Error} Throws an error if the result is not an array.
 */
export const unshift = async (
  area: StorageArea,
  key: string,
  values: any[],
  callback?: () => void | undefined,
): Promise<void> => {
  const result = await getter(area, key);
  if (!Array.isArray(result) && !Array.isArray(result[key])) {
    throw new Error(`The value of ${area}/${key} is not an array.`);
  }
  let arr = Array.isArray(result) ? result : result[key] ? result[key] : [];
  arr.unshift(...values);
  chrome.storage[area].set({ [key]: arr }, () => {
    callback?.();
  });
};
