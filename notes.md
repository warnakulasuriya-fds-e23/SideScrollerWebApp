# [22:40 11/12/2024]

| Item                                 | Description                                                                 |
| ------------------------------------ | --------------------------------------------------------------------------- |
| git HEAD                             | 987e3b35032243d0b704e5d2d1231258545303f2                                    |
| latest commit                        | cleaned up server.js code a little bit                                      |
| Offline Local frontend Status        | Works well                                                                  |
| Offline Local backend Status         | Works well                                                                  |
| Online vercel frontend server status | seems to be working                                                         |
| Online vercel backend server status  | not working properly                                                        |
| issues                               | cannot create files and fodlers in vercel backend server during runtime.    |
|                                      | because vercel uses a serverless function architecture.                     |
| possible fix1                        | try using memory store instead of datastore.                                |
|                                      | (as referenced in link1 below)                                              |
| possible fix2                        | a custom datastore to write to and read from somewhere else (maybe mongodb, |
|                                      | checkout link1)                                                             |

---

- link1: https://github.com/tus/tus-node-server/tree/main/packages/file-store#example-creating-your-own-config-store
