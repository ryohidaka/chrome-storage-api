# chrome-storage-api

[![npm version](https://badge.fury.io/js/chrome-storage-api.svg)](https://badge.fury.io/js/chrome-storage-api)
![build](https://github.com/ryohidaka/chrome-storage-api/workflows/Build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B6TVH92)

## Overview

Helper for `chrome.storage` API.

## Notes

To use the `chrome.storage` API, declare the `"storage"` permission in the [manifest](https://developer.chrome.com/docs/extensions/reference/manifest):

```json
{
  "name": "My extension",

  "permissions": ["storage"]
}
```

## Installation

You can install this library using npm:

```shell
npm install chrome-storage-api
```

## Usage

```typescript
import { Storage } from "chrome-storage-api"

// Local Storage
Storage.Local.{get | set}

// Sync Storage
Storage.Sync.{get | set}

// Managed Storage
Storage.Managed.{get}

// Session Storage
Storage.Session.{get | set}
```

## Methods

### `get`

Gets one or more items from storage.

```typescript
import { Storage } from "chrome-storage-api";

// Get a single item from storage.
const singleResult = await Storage.Local.get("key1");
console.log(singleResult);
// Output: value1

// Get multiple items from storage.
const multipleResult = await Storage.Local.get(["key1", "key2"]);
console.log(multipleResult);
// Output: [value1, value2]

// Get items with default values.
const resultWithDefaultValue = await Storage.Local.get({
  key4: "value4",
  key5: "value5",
});
console.log(resultWithDefaultValue);
// Output: { key4: "value4", key5: "value5" }

// Get items using a callback function.
Storage.Local.get("key1", (items) => console.log(items));
// Output: { key1: "value1" }
```

### `set`

Sets multiple items.

```typescript
import { Storage } from "chrome-storage-api";

Storage.Local.set({ key3: "value3" }, () => console.log("Value 3 was set."));
```

### `onChange`

Fired when one or more items change.

```typescript
import { Storage } from "chrome-storage-api";

Storage.onChange((changes, areaName) => {
  console.log(`New Value: ${changes.key1.newValue}`);
  console.log(`Old Value: ${changes.key1.oldValue}`);
  console.log(`Area Name: ${areaName}`);
});

// Outputs:
//   New Value: new value1
//   Old Value: value1
//   Area Name: local
```

## Link

- [chrome.storage](https://developer.chrome.com/docs/extensions/reference/api/storage)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
