import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css'
import '@blueprintjs/core/lib/css/blueprint.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

ReactDOM.render(
 <Provider store={configureStore()}>
  <App />
 </Provider>,
 document.getElementById('root')
);

serviceWorker.unregister();