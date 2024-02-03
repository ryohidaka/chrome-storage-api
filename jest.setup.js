const createMockGet = () =>
  jest.fn((keys, callback) => {
    const data = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
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

global.chrome = {
  storage: {
    local: { get: createMockGet(), set: mockSet },
    sync: { get: createMockGet(), set: mockSet },
    managed: { get: createMockGet(), set: mockSet },
    session: { get: createMockGet(), set: mockSet },
  },
};
