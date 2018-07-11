import {Selector} from 'testcafe';

export class IndexPage {
  constructor() {
    this.title = Selector('h1');
    this.kicker = Selector('p.kicker');
  }
}
