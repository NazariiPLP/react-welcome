class HeaderComponent extends React.Component {
    anotherMethod() { // інші якісь методи всередині компоненти - не заборонено

    }

    render() { // єдиний метод, який ви зобов'язані визначити в класі
        console.log(this.props);
        const p = React.createElement('p', {}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'Hi!'}, `Hello ${this.props.name}`);
        const article = React.createElement('article', {}, h2, p);
        return article;
    }
}

const component = React.createElement(HeaderComponent, {name: 'John'});
const component2 = React.createElement(HeaderComponent, {name: 'Oleg'});

const parentElement = React.createElement('section', {}, component, component2);


const root = document.querySelector('#root');

// ReactDOM.render(parentElement, root);

/*

*/

class GreetingsComponent extends React.Component {
    render() {
        const h1 = React.createElement('h1', {}, `Hello, ${this.props.name}`)
        return h1;
    }
}

const componentName = React.createElement(GreetingsComponent, {name: 'Josh'});
const componentName2 = React.createElement(GreetingsComponent, {name: 'Daniel'});

const parentElement2 = React.createElement('section', {}, componentName, componentName2);

ReactDOM.render(parentElement2, root);
