export default class HtmlGenerator {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem(element) {
        this._container.prepend(element);
    }
    render(todos) {
        todos.forEach((todo) => {
            this._renderer(todo);
        });
    }
}