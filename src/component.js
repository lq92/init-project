import './style.css'
export function component(){
	let ele = document.createElement('div');
	ele.innerHTML = 'Hello, Webpack!';
	ele.classList.add('hello')
	return ele;
}