import { makeAutoObservable } from "mobx";

import { Data } from "./data";

class ShopItems {
  shopItems = Data;

  constructor() {
    makeAutoObservable(this);
  }

  get getItems() {
    return this.shopItems;
  }
}

export default new ShopItems();
