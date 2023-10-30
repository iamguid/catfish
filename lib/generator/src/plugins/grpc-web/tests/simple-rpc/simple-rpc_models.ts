// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: simple-rpc.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface SimpleRequestJSON {
  fInt32: number;
}

export class SimpleRequest {
  fInt32: number = 0;

  public static fields = ["fInt32"];

  public get fields() {
    return SimpleRequest.fields;
  }

  constructor(obj?: SimpleRequest) {
    if (!obj) return;

    if (obj.fInt32 !== undefined) {
      this.fInt32 = obj.fInt32;
    }
  }

  public static encode(m: SimpleRequest, w: pjs.Writer): pjs.Writer {
    // int32 f_int32 = 1
    if (m.fInt32 !== undefined) {
      w.uint32(8);
      w.int32(m.fInt32);
    }

    return w;
  }

  public static decode(
    m: SimpleRequest,
    r: pjs.Reader,
    length: number
  ): SimpleRequest {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 f_int32 = 1
        case 8:
          m.fInt32 = r.int32();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: SimpleRequest): SimpleRequestJSON {
    const obj = {};

    obj["fInt32"] = m.fInt32;

    return obj;
  }

  public static fromJSON(
    m: SimpleRequest,
    obj: SimpleRequestJSON
  ): SimpleRequest {
    m.fInt32 = obj.fInt32;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return SimpleRequest.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): SimpleRequest {
    const r = new pjs.Reader(buffer);
    return SimpleRequest.decode(this, r, r.len);
  }

  toJSON(): SimpleRequestJSON {
    return SimpleRequest.toJSON(this);
  }

  fromJSON(obj: SimpleRequestJSON): SimpleRequest {
    return SimpleRequest.fromJSON(this, obj);
  }

  clone(): SimpleRequest {
    return new SimpleRequest(this);
  }
}

export interface SimpleResponseJSON {
  data: SimpleResponse.DataJSON;
}

export class SimpleResponse {
  data: SimpleResponse.Data = new SimpleResponse.Data();

  public static fields = ["data"];

  public get fields() {
    return SimpleResponse.fields;
  }

  constructor(obj?: SimpleResponse) {
    if (!obj) return;

    if (obj.data !== undefined) {
      this.data = new SimpleResponse.Data(obj.data);
    }
  }

  public static encode(m: SimpleResponse, w: pjs.Writer): pjs.Writer {
    // SimpleResponse.Data data = 1
    if (m.data !== undefined) {
      w.uint32(10);
      SimpleResponse.Data.encode(m.data, w.fork()).ldelim();
    }

    return w;
  }

  public static decode(
    m: SimpleResponse,
    r: pjs.Reader,
    length: number
  ): SimpleResponse {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // SimpleResponse.Data data = 1
        case 10:
          m.data = SimpleResponse.Data.decode(
            new SimpleResponse.Data(),
            r,
            r.uint32()
          );
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: SimpleResponse): SimpleResponseJSON {
    const obj = {};

    obj["data"] = m.data.toJSON();

    return obj;
  }

  public static fromJSON(
    m: SimpleResponse,
    obj: SimpleResponseJSON
  ): SimpleResponse {
    m.data = new SimpleResponse.Data().fromJSON(obj.data);

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return SimpleResponse.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): SimpleResponse {
    const r = new pjs.Reader(buffer);
    return SimpleResponse.decode(this, r, r.len);
  }

  toJSON(): SimpleResponseJSON {
    return SimpleResponse.toJSON(this);
  }

  fromJSON(obj: SimpleResponseJSON): SimpleResponse {
    return SimpleResponse.fromJSON(this, obj);
  }

  clone(): SimpleResponse {
    return new SimpleResponse(this);
  }
}

export namespace SimpleResponse {
  export interface DataJSON {
    test: string;
  }

  export class Data {
    test: string = "";

    public static fields = ["test"];

    public get fields() {
      return Data.fields;
    }

    constructor(obj?: Data) {
      if (!obj) return;

      if (obj.test !== undefined) {
        this.test = obj.test;
      }
    }

    public static encode(m: Data, w: pjs.Writer): pjs.Writer {
      // string test = 1
      if (m.test !== undefined) {
        w.uint32(10);
        w.string(m.test);
      }

      return w;
    }

    public static decode(m: Data, r: pjs.Reader, length: number): Data {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          // string test = 1
          case 10:
            m.test = r.string();
            continue;
        }

        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
      }

      return m;
    }

    public static toJSON(m: Data): DataJSON {
      const obj = {};

      obj["test"] = m.test;

      return obj;
    }

    public static fromJSON(m: Data, obj: DataJSON): Data {
      m.test = obj.test;

      return m;
    }

    serialize(): Uint8Array | Buffer {
      const w = pjs.Writer.create();
      return Data.encode(this, w).finish();
    }

    deserialize(buffer: Uint8Array | Buffer): Data {
      const r = new pjs.Reader(buffer);
      return Data.decode(this, r, r.len);
    }

    toJSON(): DataJSON {
      return Data.toJSON(this);
    }

    fromJSON(obj: DataJSON): Data {
      return Data.fromJSON(this, obj);
    }

    clone(): Data {
      return new Data(this);
    }
  }
}
