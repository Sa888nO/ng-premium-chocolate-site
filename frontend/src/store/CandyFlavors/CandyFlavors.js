import { makeAutoObservable } from "mobx";

import { Data } from "./data";

class CandyFlavors {
  candyFlavors = Data;

  constructor() {
    makeAutoObservable(this);
  }

  get getFlavors() {
    return this.candyFlavors;
  }
}

export default new CandyFlavors();
