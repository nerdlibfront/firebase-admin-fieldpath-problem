# Info
There seems to be an issue with the contructor of FieldPath of firestore-admin.
This issue only occurs in Emulator mode, not in cloud functions that are live on Firebase/GCP.

# Reproduce
1. Checkout project
2. Add your firebase project id in .firebaserc
3. run `npm run build && firebase emulators:start`
4. add a new document to firestore in a collection named `test`
5. See error appearing in log output of the emulator.

Error that appears and breaks function:
```
⚠  functions: TypeError: admin.firestore.FieldPath is not a constructor
    at /###/functions/lib/index.js:11:18
    at cloudFunction (/###/functions/node_modules/firebase-functions/lib/cloud-functions.js:78:23)
    at /usr/local/lib/node_modules/firebase-tools/lib/emulator/functionsEmulatorRuntime.js:516:16
    at runFunction (/usr/local/lib/node_modules/firebase-tools/lib/emulator/functionsEmulatorRuntime.js:504:15)
    at runBackground (/usr/local/lib/node_modules/firebase-tools/lib/emulator/functionsEmulatorRuntime.js:515:11)
    at processBackground (/usr/local/lib/node_modules/firebase-tools/lib/emulator/functionsEmulatorRuntime.js:499:11)
    at /usr/local/lib/node_modules/firebase-tools/lib/emulator/functionsEmulatorRuntime.js:690:27
    at Layer.handle [as handle_request] (/usr/local/lib/node_modules/firebase-tools/node_modules/express/lib/router/layer.js:95:5)
    at next (/usr/local/lib/node_modules/firebase-tools/node_modules/express/lib/router/route.js:137:13)
    at next (/usr/local/lib/node_modules/firebase-tools/node_modules/express/lib/router/route.js:131:14)
```
