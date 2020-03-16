import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

function render(type) {
	ReactDOM.render(<App type={type} />, document.getElementById('root'));
}

export default render;