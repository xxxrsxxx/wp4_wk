import { sum } from './math';

/*export default function () {
	console.log('10 + 20 = ', sum(10, 20));
}*/

export default {
	init: () => {
		console.log('app.js object expression');
		console.log('10 + 20 = ', sum(10, 20));
	},
};
