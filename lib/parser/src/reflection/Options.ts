export type Option = string | boolean | Options | Option[] | Options[] | undefined;

export interface Options {
  [key: string]: Option;
}
