import React from 'react';
import ReactDOM from 'react-dom';
import App from './common/App';
import * as serviceWorker from './common/serviceWorker';

import {Provider} from 'mobx-react';

import RootStore from './common/RootStore';

const rootStore = new RootStore();

const Root = (
    <Provider rootStore={rootStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();