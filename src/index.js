import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CelebrityList from './components/CelebrityList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
