import { makeAutoObservable } from 'mobx';
import { RefObject } from 'react';

class LayoutStore {
  mainRef:N<RefObject<HTMLElement>> = null;

  constructor() {
    makeAutoObservable(this);
  }

  setMainRef(ref: N<RefObject<HTMLElement>>) {
    this.mainRef = ref;
  }

  get hasMainRef() {
    return this.mainRef !== null;
  }
}

const layoutStore = new LayoutStore();

export default layoutStore;
