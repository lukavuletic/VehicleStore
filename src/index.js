import React from 'react';
import ReactDOM from 'react-dom';
import App from './Common/App';
import * as serviceWorker from './Common/serviceWorker';

import {Provider} from 'mobx-react';

import RootStore from './Common/RootStore';

const rootStore = new RootStore();

const Root = (
    <Provider rootStore={rootStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();