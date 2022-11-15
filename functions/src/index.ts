import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const onTesting = functions
    .firestore
    .document("/test/{testId}")
    .onWrite(async (change) => {
      const path = new admin.firestore.FieldPath("test");
      const item = await admin.firestore().collection("test")
          .where(path, "==", "test")
          .get();
      console.log(item.docs.length);
    });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
