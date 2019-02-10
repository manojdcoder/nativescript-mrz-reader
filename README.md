# NativeScript MRZ Reader

## Installation
From the command prompt go to your app's root folder and execute:

```javascript
tns plugin add nativescript-mrz-reader
```

## Demo app
If you want a quickstart, clone the repo, `cd src`, and `npm run demo.ios` or `npm run demo.android`.

## API

### retrieveData
Initiates conitunous live scanning until it finds a MRZ code.

| Parameters | Type | Description |
| ---  | --- | --- |
| `callback` | `(data: IMrzData) => void` | Callback function that is invoked when scanning is completed or cancelled. |

```js
var MrzReader = require("nativescript-mrz-reader");
MrzReader.retrieveData(function (result) {
    console.log(result && result.value || "Cancelled");
});
```
