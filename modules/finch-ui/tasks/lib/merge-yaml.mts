import path from "node:path";
import { Transform, TransformCallback } from "node:stream";
import File from "vinyl";
import yaml from "yaml";

class ReduceYamlToJsonStream extends Transform {
  data = {};
  filename: string;

  constructor(spec: { filename: string }) {
    super({ objectMode: true });
    this.filename = spec.filename;
  }

  _transform(chunk: unknown, _: BufferEncoding, callback: TransformCallback): void {
    let file = chunk as File;
    try {
      if (file.isNull()) {
        callback();
        return;
      }
      const fileData = yaml.parse(file.contents!.toString("utf-8"));
      if (fileData) {
        this.data = { ...this.data, ...fileData };
      }
      callback();
    } catch (error) {
      callback(error as Error);
    }
  }

  _flush(callback: TransformCallback): void {
    try {
      const contents = JSON.stringify(this.data, null, 2);
      const file = new File({
        cwd: "/",
        base: "/",
        path: path.join("/", this.filename),
        contents: Buffer.from(contents),
      });
      this.push(file);
      callback();
    } catch (error) {
      callback(error as Error);
    }
  }
}

export function mergeYaml(options: { filename: string }): Transform {
  return new ReduceYamlToJsonStream(options);
}
