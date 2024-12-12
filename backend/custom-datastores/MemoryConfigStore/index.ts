import type { Upload } from "@tus/server";

export class MemoryConfigstore {
  data: Map<string, Upload> = new Map();

  get(key: string): Upload | undefined {
    return this.data.get(key);
  }

  set(key: string, value: Upload) {
    this.data.set(key, value);
  }

  delete(key: string) {
    return this.data.delete(key);
  }

  get list(): Record<string, Upload> {
    return Object.fromEntries(this.data.entries());
  }
}
