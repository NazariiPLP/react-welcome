const root = document.querySelector('#root');

const h1 = React.createElement('h1', {}, 'Hello React!'); // React-element
console.log(h1);

const anotherH1 = document.createElement('h1');
console.log(anotherH1);

ReactDOM.render(h1, root);