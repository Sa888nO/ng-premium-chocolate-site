import { makeAutoObservable } from "mobx";

import { Data } from "./data";

class TruffleFlavors {
  truffleFlavors = Data;

  constructor() {
    makeAutoObservable(this);
  }

  get getFlavors() {
    return this.truffleFlavors;
  }
}

export default new TruffleFlavors();
