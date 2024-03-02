class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        // todo: state.count++;
        this.setState({
            count: this.state.count ++
        });
    }

    render() {
        const h2 = React.createElement('h2', {}, this.state.count);
        const button = React.createElement('button', {onClick: () => {this.increment()}}, '+');
        return React.createElement(React.Fragment, {}, h2, button);
    }
}

const component = React.createElement(Counter);

const root = document.querySelector('#root');

ReactDOM.render(component, root);

/*

1. Реакт - бібліотека для створення користувацьких інтерфейсів. 
2. Ви можете використовувати як звичайний "вванільний" JS, так можете використовувати і React. Це може відбуватись одночасно.
3. Пропси - це дані, які можна передавати в компонети для того, щоб налаштовувати зовнішній вигляд компонентів.
4. Для того, щоб React щось відобразив, порібно викликати метод ReactDOM.render().
Він приймає 2 параметри:
- елемент, який потрібно відрендерити
- елемент, в який потрібно рендерити
5. React оперує React-елементами.
React-елемент - це об'єкт.
React-елемент набагато легший, ніж той самий елемент у нативному DOM'і.
6. З цих React-елементів як маленьких блоків складаються React-компоненти.
А за React-компонет складаються сторінки, які бачать користувачі. 
7. Стан компонети - дані, які можуть змінюватися за час життя компоненти.

*/
