import _ from 'lodash';
import app from './js/app';
import startingPoint from './js/class';
import './assets/css/base.css';

function component() {
	var element = document.createElement('div');

	/* lodash is required for the next line to work */
	element.innerHTML = _.join(['nice', 'webpack'], ' ');
	return element;
}
document.body.appendChild(component());

app.init();
new startingPoint('from index.js');
