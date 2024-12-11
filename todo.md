1. Make custom Data stores that use different method to store the uploaded data instead of FileStore(refer
   https://github.com/tus/tus-node-server/tree/main/packages/file-store#example-creating-your-own-config-store)

# Note

I think that the reason why the vercel backend doesnt work correctly is,
it doesnt support the mkdir action within it.

So no adding new folders or files to te vercel server during runtime.

Thereby, probably best thing to do is to make files in a different server. maybe try to send them directly to mongoDB.

_it might also be possible to directly use the memory store suggested in https://github.com/tus/tus-node-server/tree/main/packages/file-store#example-creating-your-own-config-store_

---
