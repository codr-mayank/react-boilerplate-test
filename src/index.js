import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './main.scss';

const data = {};
const func = () => {
  // demo function
};

/**
 * ReactDOM.render: Renders App to index html file
 */
ReactDOM.render(<App sampleData={data} sampleProp={func} />, document.querySelector('#root'));
