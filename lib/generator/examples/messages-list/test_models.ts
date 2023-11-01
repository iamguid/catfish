// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: test
// file: test.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface AJSON {}

export class A {
  public static fields = [];

  public get fields() {
    return A.fields;
  }

  constructor(obj?: A) {
    if (!obj) return;
  }

  public static encode(m: A, w: pjs.Writer): pjs.Writer {
    return w;
  }

  public static decode(m: A, r: pjs.Reader, length: number): A {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: A): AJSON {
    const obj = {};

    return obj;
  }

  public static fromJSON(m: A, obj: AJSON): A {
    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return A.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): A {
    const r = new pjs.Reader(buffer);
    return A.decode(this, r, r.len);
  }

  toJSON(): AJSON {
    return A.toJSON(this);
  }

  fromJSON(obj: AJSON): A {
    return A.fromJSON(this, obj);
  }

  clone(): A {
    return new A(this);
  }
}

export namespace A {
  export interface BJSON {}

  export class B {
    public static fields = [];

    public get fields() {
      return B.fields;
    }

    constructor(obj?: B) {
      if (!obj) return;
    }

    public static encode(m: B, w: pjs.Writer): pjs.Writer {
      return w;
    }

    public static decode(m: B, r: pjs.Reader, length: number): B {
      const l = r.pos + length;
      while (r.pos < l) {
        const tag = r.uint32();
        switch (tag) {
        }

        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
      }

      return m;
    }

    public static toJSON(m: B): BJSON {
      const obj = {};

      return obj;
    }

    public static fromJSON(m: B, obj: BJSON): B {
      return m;
    }

    serialize(): Uint8Array | Buffer {
      const w = pjs.Writer.create();
      return B.encode(this, w).finish();
    }

    deserialize(buffer: Uint8Array | Buffer): B {
      const r = new pjs.Reader(buffer);
      return B.decode(this, r, r.len);
    }

    toJSON(): BJSON {
      return B.toJSON(this);
    }

    fromJSON(obj: BJSON): B {
      return B.fromJSON(this, obj);
    }

    clone(): B {
      return new B(this);
    }
  }

  export namespace B {
    export interface CJSON {}

    export class C {
      public static fields = [];

      public get fields() {
        return C.fields;
      }

      constructor(obj?: C) {
        if (!obj) return;
      }

      public static encode(m: C, w: pjs.Writer): pjs.Writer {
        return w;
      }

      public static decode(m: C, r: pjs.Reader, length: number): C {
        const l = r.pos + length;
        while (r.pos < l) {
          const tag = r.uint32();
          switch (tag) {
          }

          if ((tag & 7) === 4 || tag === 0) {
            break;
          }
        }

        return m;
      }

      public static toJSON(m: C): CJSON {
        const obj = {};

        return obj;
      }

      public static fromJSON(m: C, obj: CJSON): C {
        return m;
      }

      serialize(): Uint8Array | Buffer {
        const w = pjs.Writer.create();
        return C.encode(this, w).finish();
      }

      deserialize(buffer: Uint8Array | Buffer): C {
        const r = new pjs.Reader(buffer);
        return C.decode(this, r, r.len);
      }

      toJSON(): CJSON {
        return C.toJSON(this);
      }

      fromJSON(obj: CJSON): C {
        return C.fromJSON(this, obj);
      }

      clone(): C {
        return new C(this);
      }
    }
  }
}

export interface DJSON {}

export class D {
  public static fields = [];

  public get fields() {
    return D.fields;
  }

  constructor(obj?: D) {
    if (!obj) return;
  }

  public static encode(m: D, w: pjs.Writer): pjs.Writer {
    return w;
  }

  public static decode(m: D, r: pjs.Reader, length: number): D {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: D): DJSON {
    const obj = {};

    return obj;
  }

  public static fromJSON(m: D, obj: DJSON): D {
    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return D.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): D {
    const r = new pjs.Reader(buffer);
    return D.decode(this, r, r.len);
  }

  toJSON(): DJSON {
    return D.toJSON(this);
  }

  fromJSON(obj: DJSON): D {
    return D.fromJSON(this, obj);
  }

  clone(): D {
    return new D(this);
  }
}
