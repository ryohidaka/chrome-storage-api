const createMockGet = () =>
  jest.fn((keys) => {
    const data = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    };

    // Single Result
    if (typeof keys === "string") {
      return data[keys];
    }

    // Multiple Result
    const result = {};
    keys.forEach((key) => {
      result[key] = data[key];
    });
    return result;
  });

global.chrome = {
  storage: {
    local: { get: createMockGet() },
    sync: { get: createMockGet() },
    managed: { get: createMockGet() },
    session: { get: createMockGet() },
  },
};
