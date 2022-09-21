export default class Todo {
    constructor(data, selectorTemplate, handleCheck) {
        this.id = ''
        this.status = data.status == 'on' ? true : false
        this.content = data.content
        this.tag = data.tag
        this.id = ''
        this._handleCheck = handleCheck
        this._selectorTemplate = selectorTemplate
    }
    _getTemplate() {
        return document.querySelector(this._selectorTemplate).content.cloneNode(true);
    }
    getTodo() {
        return {
            id: this.id,
            content: this.content.textContent,
            status: this.status.checked,
            tag: this.tag.textContent
        }
    }
    createTodo() {
        const todo = this._getTemplate()
        this._status = todo.querySelector(".todo-status")
        this._content = todo.querySelector(".todo")
        this._tag = todo.querySelector(".todo-tag")
        this._content.textContent = this.content
        this._tag.textContent = this.tag
        this._status.checked = this.status
        this.status == true ? this._content.style.setProperty("text-decoration", "line-through") : this._content.style.setProperty("text-decoration", "none")
        this._setEventListeners();
        return todo
    }
    setTodo(id, content, status, tag) {
        this.id = id
        this._content.textContent = content
        this._status.checked = status
        this._tag.checked = tag
    }
    _setEventListeners() {
        this._status.addEventListener('click', (e) => {
            if (e.target.classList[0] !== 'todo' && e.target.classList[0] !== 'todo-tag') {
                this._handleCheck()
            }
        })
    }
}