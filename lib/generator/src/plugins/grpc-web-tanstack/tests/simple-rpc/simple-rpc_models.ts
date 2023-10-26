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
  data: SimpleResponse.SomeDataJSON;
}

export class SimpleResponse {
  data: SimpleResponse.SomeData = new SimpleResponse.SomeData();

  public static fields = ["data"];

  public get fields() {
    return SimpleResponse.fields;
  }

  constructor(obj?: SimpleResponse) {
    if (!obj) return;

    if (obj.data !== undefined) {
      this.data = new SimpleResponse.SomeData(obj.data);
    }
  }

  public static encode(m: SimpleResponse, w: pjs.Writer): pjs.Writer {
    // SimpleResponse.SomeData data = 1
    if (m.data !== undefined) {
      w.uint32(10);
      SimpleResponse.SomeData.encode(m.data, w.fork()).ldelim();
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
        // SimpleResponse.SomeData data = 1
        case 10:
          m.data = SimpleResponse.SomeData.decode(
            new SimpleResponse.SomeData(),
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
    m.data = new SimpleResponse.SomeData().fromJSON(obj.data);

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
  export interface SomeDataJSON {
    data: number;
  }

  export class SomeData {
    data: number = 0;

    public static fields = ["data"];

    public get fields() {
      return SomeData.fields;
    }

    constructor(obj?: SomeData) {
      if (!obj) return;

      if (obj.data !== undefined) {
        this.data = obj.data;
      }
    }

    public static encode(m: SomeData, w: pjs.Writer): pjs.Writer {
      // int32 data = 1
      if (m.data !== undefined) {
        w.uint32(8);
        w.int32(m.data);
      }

      return w;
    }

    public static decode(m: SomeData, r: pjs.Reader, length: number): SomeData {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
          // int32 data = 1
          case 8:
            m.data = r.int32();
            continue;
        }

        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
      }

      return m;
    }

    public static toJSON(m: SomeData): SomeDataJSON {
      const obj = {};

      obj["data"] = m.data;

      return obj;
    }

    public static fromJSON(m: SomeData, obj: SomeDataJSON): SomeData {
      m.data = obj.data;

      return m;
    }

    serialize(): Uint8Array | Buffer {
      const w = pjs.Writer.create();
      return SomeData.encode(this, w).finish();
    }

    deserialize(buffer: Uint8Array | Buffer): SomeData {
      const r = new pjs.Reader(buffer);
      return SomeData.decode(this, r, r.len);
    }

    toJSON(): SomeDataJSON {
      return SomeData.toJSON(this);
    }

    fromJSON(obj: SomeDataJSON): SomeData {
      return SomeData.fromJSON(this, obj);
    }

    clone(): SomeData {
      return new SomeData(this);
    }
  }
}
