import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Time from './Time';

ReactDOM.render(<Time/>, document.getElementById('root'));
registerServiceWorker();
