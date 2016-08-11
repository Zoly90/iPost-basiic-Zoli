/**
 * Created by zoltanincze on 04/08/2016.
 */

import BaseModule from '../../base-module.js';
import TreeStore from './stores/myStores.js';
import SearchingStore from './stores/playground.js';
import * as actions from './actions.js';
import * as getters from './getters.js';

class MyModule extends BaseModule   {
  static displayName = 'MyModule';

  constructor() {
    super({actions, getters});
  }

  register (context)  {
    context.registerStores({
      'tree': TreeStore,
      'searching': SearchingStore
    });
  }
}

export default new MyModule();
