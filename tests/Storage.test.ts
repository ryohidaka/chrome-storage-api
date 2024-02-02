import { StorageArea } from "../src/types";
import { getter, setter } from "../src/utils";

describe("Storage", () => {
  const areas = [
    StorageArea.Local,
    StorageArea.Sync,
    StorageArea.Managed,
    StorageArea.Session,
  ];

  areas.forEach((area) => {
    it(`tests getter function for ${area}`, async () => {
      const result = await getter(area, "key1");
      expect(result).toEqual("value1");

      const results = await getter(area, ["key1", "key3"]);
      expect(results).toEqual(["value1", "value3"]);
    });

    it(`tests setter function for ${area}`, async () => {
      const callback = jest.fn();

      await setter(area, { key4: "value4" }, callback);
      expect(callback).toHaveBeenCalled();
    });
  });
});
