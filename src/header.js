export default function Header() {
	let dom = document.getElementById('root');
	var header = document.createElement('div');
	header.innerText = 'Header';
	dom.append(header);
}