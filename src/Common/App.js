import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';

import RootStore from './RootStore'
import { history } from './history';
import { Shell } from './shell';

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

class App extends Component {
  render() {
    return(
      // Provider makes RootStore available to any nested component
      <Provider rootStore = {rootStore}>
        <div>
          <Shell />
          {/* <Add /> */}
        </div>
      </Provider>
    );
  }
}

export default App;