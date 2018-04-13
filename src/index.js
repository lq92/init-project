import print from './print.js'
import './style.css'

function test(){
	let ele = document.createElement('div'),
			btn = document.createElement('button');
	btn.textContent = 'Click Me!';
	ele.textContent = 'Hello, Webpack!';
	btn.addEventListener('click', print, false)
	ele.appendChild(btn);
	ele.classList.add('hello');
	return ele;		
}

document.body.appendChild(test())