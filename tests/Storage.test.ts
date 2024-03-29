import { StorageArea } from "../src/types";
import { getter, push, setter, unshift } from "../src/utils";

describe("Storage", () => {
  const areas = [
    StorageArea.Local,
    StorageArea.Sync,
    StorageArea.Managed,
    StorageArea.Session,
  ];

  const mockCallback = jest.fn();

  areas.forEach((area) => {
    it(`[${area}] tests getter function`, async () => {
      const result = await getter(area, "key1", mockCallback);
      expect(result).toEqual("value1");
      expect(mockCallback).toHaveBeenCalledWith({ key1: "value1" });

      const results = await getter(area, ["key1", "key3"], mockCallback);
      expect(results).toEqual(["value1", "value3"]);
      expect(mockCallback).toHaveBeenCalledWith({
        key1: "value1",
        key3: "value3",
      });

      const resultsWithDefaultValue = await getter(
        area,
        {
          key4: "value4",
          key5: "value5",
        },
        mockCallback,
      );
      expect(resultsWithDefaultValue).toEqual({
        key4: "value4",
        key5: "value5",
      });
      expect(mockCallback).toHaveBeenCalledWith({
        key4: "value4",
        key5: "value5",
      });
    });

    // Managed not allowed set functions.
    if (area == "managed") return;

    it(`[${area}] tests setter function`, async () => {
      const callback = jest.fn();

      await setter(area, { key4: "value4" }, callback);
      expect(callback).toHaveBeenCalled();
    });

    it(`[${area}] tests push function`, async () => {
      const callback = jest.fn();
      const values = ["value1", "value2"];

      await push(area, "key4", values, callback);
      expect(callback).toHaveBeenCalled();
    });

    it(`[${area}] tests unshift function`, async () => {
      const callback = jest.fn();
      const values = ["value1", "value2"];

      await unshift(area, "key4", values, callback);
      expect(callback).toHaveBeenCalled();
    });
  });
});
