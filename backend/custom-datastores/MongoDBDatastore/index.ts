// import type { Upload } from "@tus/server";
// // import "./model/tusDataStoreModel";
// const tusDataStoreModel = require("./model/tusDataStoreModel");

// export class MongoDBDatastore {
//   async get(key: string): Promise<Upload | undefined> {
//     return await tusDataStoreModel.findOne({ key: key }).select("value");
//   }
//   async set(key: string, value: Upload) {
//     await tusDataStoreModel.create({ key, value });
//   }
//   async delete(key: string) {
//     const deletedRecord = await tusDataStoreModel.findOneAndDelete({
//       key: key,
//     });
//     if (deletedRecord) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   //   get list(): Record<string, Upload> {
//   //     const map1 = new Map();
//   //     tusDataStoreModel
//   //       .find({})
//   //       .then((objectsarray) => {
//   //         objectsarray.forEach((object) => {
//   //           map1.set(object.key, object.value);
//   //         });
//   //         return Object.fromEntries(map1.entries());
//   //       })
//   //       .catch(() => {
//   //         return Object.fromEntries(map1.entries());
//   //       });
//   //   }
// }
