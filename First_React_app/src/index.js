import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
				<Main/>
				, document.getElementById('root'));
registerServiceWorker();
