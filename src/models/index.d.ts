import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly created?: string;
  readonly Files?: (File | null)[];
  readonly updated?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class File {
  readonly id: string;
  readonly name?: string;
  readonly type?: string;
  readonly size?: number;
  readonly created?: string;
  readonly updated?: string;
  readonly userID?: string;
  constructor(init: ModelInit<File>);
  static copyOf(source: File, mutator: (draft: MutableModel<File>) => MutableModel<File> | void): File;
}