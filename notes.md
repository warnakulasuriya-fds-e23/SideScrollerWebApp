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

# [21:30 12/12/2024]

After looking through several code files i understood that creating a custom config store wont solve the problem.
What i actually need is to code a custom DataStore subclass that is connected to mongoDB.(FileStore will sotre the final file onto the disk and the config store helps with some intermediary steps. But a package like @tus/gcs-store will not do so as far as i understand) After basically skiming through the index.ts files of the packages @tus/file-store, @tus/s3-store, @tus/gcs-store and also taking a look at the DataStore.ts in the utils and some other stuff, i could identify some major functions that a tus DataStore should contain.(also a common property)

## property

- extensions: string[]

## functions

- hasExtension(extension: string)
- async create(file: Upload)
- async remove(id: string)
- async write(
  stream: http.IncomingMessage | stream.Readable,
  id: string,
  offset: number
  )
- async getUpload(id: string): Promise<Upload>
- async declareUploadLength(id: string, upload_length: number)
- async deleteExpired(): Promise<number>
- getExpiration(): number

_I'm thinking that if i override these functions properly in a custom DataStore subclass for the mongoDB data storage, then i might be able to keep the rest of the tus code unchanged and just plug in an object of this new class into the Tus Server Constructor and then things would work._ (not sure)

todays unsuccessful attempt codes will committed into backend/custom-datastores of the repo.
