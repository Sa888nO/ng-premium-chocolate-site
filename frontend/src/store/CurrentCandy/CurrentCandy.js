import { makeAutoObservable, runInAction } from "mobx";

class CurrentCandy {
  currentCandy = localStorage.getItem("id") ?? -1;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentCandy(id) {
    runInAction(() => {
      this.currentCandy = id;
      localStorage.setItem("id", id);
    });
  }
  get getCurrentCandy() {
    return this.currentCandy;
  }
}

export default new CurrentCandy();
