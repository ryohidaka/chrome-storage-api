const createMockGet = () =>
  jest.fn((keys, callback) => {
    const data = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: ["value4", "value5"],
    };

    // Single Result
    if (typeof keys === "string") {
      if (typeof callback === "function") {
        callback({ [keys]: "value1" });
      }
      return data[keys];
    }

    // Multiple Result
    if (Array.isArray(keys)) {
      const result = {};
      keys.forEach((key) => {
        result[key] = data[key];
      });
      if (typeof callback === "function") {
        callback(result);
      }
      return result;
    }
  });

const mockSet = jest.fn((_data, callback) => {
  callback();
});

const mockPush = jest.fn();

global.chrome = {
  storage: {
    local: {
      get: createMockGet(),
      set: mockSet,
      push: mockPush,
    },
    sync: {
      get: createMockGet(),
      set: mockSet,
      push: mockPush,
    },
    managed: {
      get: createMockGet(),
      set: mockSet,
      push: mockPush,
    },
    session: {
      get: createMockGet(),
      set: mockSet,
      push: mockPush,
    },
  },
};
