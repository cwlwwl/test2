import React from 'react';
import ReactDOM from 'react-dom';
// import App from './view1/App';
// import App from './view2/App';
// import App from './view3/App';

import App from './view4/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
