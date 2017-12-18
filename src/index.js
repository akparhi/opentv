import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import asyncComponent from './routes/AsyncComponent';
import registerServiceWorker from './registerServiceWorker';

const Root = asyncComponent(() => import('./Root'));

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
