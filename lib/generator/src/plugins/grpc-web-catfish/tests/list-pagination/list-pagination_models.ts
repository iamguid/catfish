// @ts-nocheck
//
// Generated code by catfish
//
// DO NOT EDIT!
//
// package: simple_service
// file: list-pagination.proto

import * as pjs from "protobufjs/minimal";
import * as runtime from "@catfish/runtime";

export interface BookJSON {
  name: string;
  labels: Record<string, string>;
}

export class Book {
  name: string = "";
  labels: Map<string, string> = new Map();

  public static fields = ["name", "labels"];

  // map<string, string> labels = 2
  public static encodeLabels(
    m: Map<string, string>,
    w: pjs.Writer
  ): pjs.Writer {
    for (const [key, val] of m) {
      w.uint32(18);
      const w2 = w.fork();
      w.uint32(10);
      w.string(key);
      w.uint32(18);
      w2.string(val);
      w2.ldelim();
    }
    return w;
  }

  // map<string, string> labels = 2
  public static decodeLabels(r: pjs.Reader, length: number): [string, string] {
    const l = r.pos + length;
    let k;
    let v;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        case 10:
          k = r.string();
          continue;
        case 18:
          v = r.string();
          continue;
      }
    }

    return [k, v];
  }

  public get fields() {
    return Book.fields;
  }

  constructor(obj?: Book) {
    if (!obj) return;

    if (obj.name !== undefined) {
      this.name = obj.name;
    }
    if (obj.labels !== undefined) {
      const entries = Array.from(obj.labels.entries());
      const copy = entries.map(([key, val]) => [key, val]);
      this.labels = new Map(copy);
    }
  }

  public static encode(m: Book, w: pjs.Writer): pjs.Writer {
    // string name = 1
    if (m.name !== undefined) {
      w.uint32(10);
      w.string(m.name);
    }

    // map<string, string> labels = 2
    Book.encodeLabels(m.labels, w);

    return w;
  }

  public static decode(m: Book, r: pjs.Reader, length: number): Book {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // string name = 1
        case 10:
          m.name = r.string();
          continue;

        // map<string, string> labels = 2
        case 18:
          {
            const [k, v] = Book.decodeLabels(r, r.uint32());
            m.labels.set(k, v);
          }
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: Book): BookJSON {
    const obj = {};

    obj["name"] = m.name;
    obj["labels"] = runtime.convertMapToRecord(m.labels, (val) => val);

    return obj;
  }

  public static fromJSON(m: Book, obj: BookJSON): Book {
    m.name = obj.name;
    m.labels = runtime.convertRecordToMap(obj.labels, (val) => val);

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return Book.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): Book {
    const r = new pjs.Reader(buffer);
    return Book.decode(this, r, r.len);
  }

  toJSON(): BookJSON {
    return Book.toJSON(this);
  }

  fromJSON(obj: BookJSON): Book {
    return Book.fromJSON(this, obj);
  }

  clone(): Book {
    return new Book(this);
  }
}

export interface ListBooksRequestJSON {
  pageSize: number;
  pageToken: string;
}

export class ListBooksRequest {
  pageSize: number = 0;
  pageToken: string = "";

  public static fields = ["pageSize", "pageToken"];

  public get fields() {
    return ListBooksRequest.fields;
  }

  constructor(obj?: ListBooksRequest) {
    if (!obj) return;

    if (obj.pageSize !== undefined) {
      this.pageSize = obj.pageSize;
    }
    if (obj.pageToken !== undefined) {
      this.pageToken = obj.pageToken;
    }
  }

  public static encode(m: ListBooksRequest, w: pjs.Writer): pjs.Writer {
    // int32 page_size = 1
    if (m.pageSize !== undefined) {
      w.uint32(8);
      w.int32(m.pageSize);
    }

    // string page_token = 2
    if (m.pageToken !== undefined) {
      w.uint32(18);
      w.string(m.pageToken);
    }

    return w;
  }

  public static decode(
    m: ListBooksRequest,
    r: pjs.Reader,
    length: number
  ): ListBooksRequest {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // int32 page_size = 1
        case 8:
          m.pageSize = r.int32();
          continue;

        // string page_token = 2
        case 18:
          m.pageToken = r.string();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: ListBooksRequest): ListBooksRequestJSON {
    const obj = {};

    obj["pageSize"] = m.pageSize;
    obj["pageToken"] = m.pageToken;

    return obj;
  }

  public static fromJSON(
    m: ListBooksRequest,
    obj: ListBooksRequestJSON
  ): ListBooksRequest {
    m.pageSize = obj.pageSize;
    m.pageToken = obj.pageToken;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return ListBooksRequest.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): ListBooksRequest {
    const r = new pjs.Reader(buffer);
    return ListBooksRequest.decode(this, r, r.len);
  }

  toJSON(): ListBooksRequestJSON {
    return ListBooksRequest.toJSON(this);
  }

  fromJSON(obj: ListBooksRequestJSON): ListBooksRequest {
    return ListBooksRequest.fromJSON(this, obj);
  }

  clone(): ListBooksRequest {
    return new ListBooksRequest(this);
  }
}

export interface ListBooksResponseJSON {
  books: BookJSON[];
  nextPageToken: string;
}

export class ListBooksResponse {
  books: Book[] = [];
  nextPageToken: string = "";

  public static fields = ["books", "nextPageToken"];

  public get fields() {
    return ListBooksResponse.fields;
  }

  constructor(obj?: ListBooksResponse) {
    if (!obj) return;

    if (obj.books !== undefined) {
      this.books = obj.books.map((val) => new Book(val));
    }
    if (obj.nextPageToken !== undefined) {
      this.nextPageToken = obj.nextPageToken;
    }
  }

  public static encode(m: ListBooksResponse, w: pjs.Writer): pjs.Writer {
    // repeated Book books = 1
    if (m.books.length > 0) {
      for (let item of m.books) {
        w.uint32(10);
        Book.encode(item, w.fork()).ldelim();
      }
    }

    // string next_page_token = 2
    if (m.nextPageToken !== undefined) {
      w.uint32(18);
      w.string(m.nextPageToken);
    }

    return w;
  }

  public static decode(
    m: ListBooksResponse,
    r: pjs.Reader,
    length: number
  ): ListBooksResponse {
    const l = r.pos + length;
    while (r.pos < l) {
      const tag = r.uint32();
      switch (tag) {
        // repeated Book books = 1
        case 10:
          m.books.push(Book.decode(new Book(), r, r.uint32()));
          continue;

        // string next_page_token = 2
        case 18:
          m.nextPageToken = r.string();
          continue;
      }

      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
    }

    return m;
  }

  public static toJSON(m: ListBooksResponse): ListBooksResponseJSON {
    const obj = {};

    obj["books"] = m.books.map((val) => val.toJSON());
    obj["nextPageToken"] = m.nextPageToken;

    return obj;
  }

  public static fromJSON(
    m: ListBooksResponse,
    obj: ListBooksResponseJSON
  ): ListBooksResponse {
    m.books = obj.books.map((val) => new Book().fromJSON(val));
    m.nextPageToken = obj.nextPageToken;

    return m;
  }

  serialize(): Uint8Array | Buffer {
    const w = pjs.Writer.create();
    return ListBooksResponse.encode(this, w).finish();
  }

  deserialize(buffer: Uint8Array | Buffer): ListBooksResponse {
    const r = new pjs.Reader(buffer);
    return ListBooksResponse.decode(this, r, r.len);
  }

  toJSON(): ListBooksResponseJSON {
    return ListBooksResponse.toJSON(this);
  }

  fromJSON(obj: ListBooksResponseJSON): ListBooksResponse {
    return ListBooksResponse.fromJSON(this, obj);
  }

  clone(): ListBooksResponse {
    return new ListBooksResponse(this);
  }
}
